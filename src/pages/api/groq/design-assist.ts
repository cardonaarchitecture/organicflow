import type { NextApiRequest, NextApiResponse } from 'next';
import groqClient from '../../../utils/groq-client';
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
        messages: req.body.messages,
        max_tokens: 1000,
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error calling Groq API' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}