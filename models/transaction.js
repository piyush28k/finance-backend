const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, default: 'General' },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
