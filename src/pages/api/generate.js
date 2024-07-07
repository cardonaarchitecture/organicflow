import groqClient from '../../lib/groq-client';
/**
 * Handles the API request for generating a response based on a given prompt.
 *
 * @param {Object} req - The request object containing the HTTP method and body.
 * @param {Object} res - The response object used to send the generated response.
 * @return {Promise<void>} Returns a promise that resolves when the response is sent.
 */
export default async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    try {
      // Make a POST request to the Groq API to generate a response
      const response = await groqClient.post('/chat/completions', {
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: prompt }],
      });

      // Send a JSON response with the generated response
      res
        .status(200)
        .json({ result: response.data.choices[0].message.content });
    } catch (error) {
      // Log the error and send a JSON error response
      console.error(
        'Error calling Groq API:',
        error.response?.data || error.message,
      );
      res.status(500).json({ error: 'Error generating response' });
    }
  } else {
    // Set the Allow header to indicate the allowed HTTP methods
    res.setHeader('Allow', ['POST']);
    // Send a 405 Method Not Allowed response
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
