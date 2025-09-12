require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRouter = require('./routes/transaction');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRouter);

app.get('/', (req, res) => res.send('Finance API running'));

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch(err => console.error('Mongo connect error:', err));
