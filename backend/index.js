const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const msg = message.toLowerCase();

  try {
    if (msg.includes('joke')) {
      const jokeRes = await axios.get('https://v2.jokeapi.dev/joke/Any');
      const joke = jokeRes.data;
      const jokeText = joke.type === 'single' ? joke.joke : `${joke.setup} - ${joke.delivery}`;
      return res.json({ type: 'joke', response: jokeText });
    } else if (msg.includes('cat')) {
      const catRes = await axios.get('https://api.thecatapi.com/v1/images/search');
      return res.json({ type: 'cat', response: catRes.data[0].url });
    } else {
      return res.json({ type: 'unknown', response: "I'm not sure what you want, but I'm here to help! 🧠" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));