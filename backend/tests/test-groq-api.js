const axios = require('axios');

const groqClient = axios.create({
  baseURL: 'https://api.groq.com/openai/v1',
  headers: {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

async function testGroqAPI() {
  try {
    const promptMessage = `Generate a design for a 3D object. Provide a color (as a hex code) and a position (as an array of three numbers between -1 and 1). Format the response as a JSON object with 'color' and 'position' keys.`;

    const response = await groqClient.post('/chat/completions', {
      model: 'mixtral-8x7b-32768',
      messages: [
        { role: 'system', content: 'You are a helpful AI design assistant.' },
        { role: 'user', content: promptMessage }
      ],
      max_tokens: 1000,
    });

    const aiResponse = response.data.choices[0].message.content;
    console.log('AI Response:', aiResponse);

    const jsonString = aiResponse.trim().match(/\{[\s\S]*\}/)?.[0] || '';
    const design = JSON.parse(jsonString);

    console.log('Parsed Design:', design);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testGroqAPI();