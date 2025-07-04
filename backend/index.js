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

  let catAndJokeCheck = ['cat', 'joke'];

  const isCatAndJoke = catAndJokeCheck.every(word => msg.includes(word));

  try {
    if (isCatAndJoke) {

      const catAndJokeResponse = "Very smart, nice try. I am currently incapable of creating cat jokes, only one or the other.";
      return res.json({ type: 'catAndJoke', response: catAndJokeResponse });

    } else if (msg.includes('cat')) {
      const catRes = await axios.get('https://api.thecatapi.com/v1/images/search');
      return res.json({ type: 'cat', response: catRes.data[0].url });
    } else if (msg.includes('joke')) {

      const jokeRes = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
      const joke = jokeRes.data;
      const jokeText = joke.type === 'single' ? joke.joke : `${joke.setup} - ${joke.delivery}`;
      return res.json({ type: 'joke', response: jokeText });

    } else if (msg.includes('fact')) {

      const factRes = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const factText = factRes.data.text;
      const factSauce = factRes.data.source_url;

      return res.json({ type: 'fact', response: factText, source: factSauce });
    } else {
      return res.json({ type: 'unknown', response: "Sorry! I'm not yet programmed to handle messages besides cat pics and jokes. 🙇" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));