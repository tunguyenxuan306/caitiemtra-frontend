import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/webhook/banking', (req, res) => {
  const { transaction_id, amount, note, account } = req.body;

  // TODO: Match transaction with pending order and confirm it
  console.log('Webhook received:', req.body);

  res.sendStatus(200);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});
