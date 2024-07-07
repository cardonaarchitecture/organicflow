import axios from 'axios';
  
/**
 * A configured instance of axios for making requests to the Groq API.
 *
 * @remarks
 * This client is pre-configured with the base URL for the Groq API,
 * an authorization header containing the OpenAI API key, and a JSON content type.
 *
 * @example
 * ```typescript
 * import groqClient from './groqClient';
 *
 * const response = await groqClient.get('/engines');
 * console.log(response.data);
 * ```
 *
 * @returns {import('axios').AxiosInstance} - An instance of axios configured for the Groq API.
 */
const groqClient = axios.create({
  baseURL: 'https://api.groq.com/openai/v1',
  headers: {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default groqClient;