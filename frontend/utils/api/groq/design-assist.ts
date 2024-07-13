import type { NextApiRequest, NextApiResponse } from 'next';
import groqClient from './groq-client';

interface Design {
  color: string;
  position: [number, number, number];
}

/**
 * Handles API requests to the Groq design assist endpoint.
 *
 * @remarks
 * This function is responsible for processing POST requests to the `/api/groq/design-assist` endpoint.
 * It uses the `groqClient` to make a request to the Groq API for code completion suggestions.
 *
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 *
 * @returns {Promise<void>} - A promise that resolves when the request is handled.
 *
 * @throws Will throw an error if the request method is not POST.
 * @throws Will throw an error if there is an issue with the Groq API request.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const promptMessage = `Generate a design for a 3D object. Provide a color (as a hex code) and a position (as an array of three numbers between -1 and 1). Format the response as a JSON object with 'color' and 'position' keys.`;
      /**
       * Makes a POST request to the Groq API for code completion suggestions.
       *
       * @param {string} endpoint - The API endpoint to make the request to.
       * @param {object} data - The data to send in the request body.
       * @param {string} data.model - The model to use for code completion.
       * @param {string[]} data.messages - The messages to use for code completion.
       * @param {number} data.max_tokens - The maximum number of tokens to generate.
       *
       * @returns {Promise<object>} - A promise that resolves with the API response data.
       *
       * @throws Will throw an error if there is an issue with the API request.
       */
      const response = await groqClient.post('/chat/completions', {
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: 'You are a helpful AI design assistant.' },
          { role: 'user', content: promptMessage }
        ],
        max_tokens: 1000,
      });

      const aiResponse = response.data.choices[0].message.content;
      console.log('AI Response:', aiResponse); // Log the AI response for debugging

      let design: Design;

      try {
        // Trim any whitespace and remove any explanatory text
        const jsonString = aiResponse.trim().match(/\{[\s\S]*\}/)?.[0] || '';
        design = JSON.parse(jsonString);

        if (!design.color || !Array.isArray(design.position) || design.position.length !== 3) {
          throw new Error('Invalid design format');
        }
      } catch (parseError) {
        console.error('Parse error:', parseError);
        throw new Error(`Failed to parse AI response: ${aiResponse}`);
      }

      res.status(200).json({ design });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error generating design: ' + getErrorMessage(error) });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Helper function to safely get error messages
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}