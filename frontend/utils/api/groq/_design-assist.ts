import type { NextApiRequest, NextApiResponse } from 'next';
import groqClient from './groq-client';

interface Design {
  color: string;
  position: [number, number, number];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const promptMessage = `Generate a design for a 3D object. Provide only a JSON object with 'color' (as a hex code) and 'position' (as an array of three numbers between -1 and 1) keys. Do not include any additional explanation.`;

      const response = await groqClient.post('/chat/completions', {
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: 'You are a design assistant that provides only JSON responses.' },
          { role: 'user', content: promptMessage }
        ],
        max_tokens: 100,
      });

      const aiResponse = response.data.choices[0].message.content;
      console.log('AI Response:', aiResponse);

      let design: Design;

      try {
        design = JSON.parse(aiResponse);
        
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

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}