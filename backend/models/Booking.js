const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  consultantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true, index: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
