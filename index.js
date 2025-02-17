const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

app.post('/api', (req, res) => {
  //res.json({ message: 'This is an API endpoint' });
  try {
        const apiResponse = await fetch('https://apim.workato.com/api_ferco/searchi-v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '94700300d77ce83c0806ec2e9cec6d16f24522b9a49bf4e9638d7efcc1e39710'
            },
            //body: JSON.stringify(req.body),
            body: JSON.stringify(payload),
        });

        const data = await apiResponse.text(); // o .json() si la respuesta es JSON
        res.send(data);
    } catch (error) {
        console.error('Error en el proxy:', error);
        res.status(500).send('Error al obtener la API');
    }
});

// Export the Express app for Vercel to use
module.exports = app;
