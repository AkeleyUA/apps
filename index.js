const app = require('express')();
const cors = require('cors')

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/public', (req, res) => {
  res.json('I am public route!');
});

app.use('/private', (req, res) => {
  if (!req.query.login || !req.query.password) {
    return res.status(401).send('Unauthorized');
  }
  res.json(`Hi ${req.query.login}. I am a private route. I haven't been taught how to return a token yet, but my developer knows how. I believe him.`);
});

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`)
},)