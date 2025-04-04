const Booking = require('../models/Booking');
const ecpay = require('../integrations/ecpay');

// 建立新預約並處理支付
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // 處理支付
    const paymentData = ecpay.createOrder({
      tradeNo: booking._id,
      tradeDate: new Date().toISOString(),
      amount: booking.amount,
      description: '顧問預約',
      itemName: '顧問服務',
      returnURL: `${process.env.FRONTEND_URL}/payment-confirmation`,
    });

    res.status(201).json({ booking, paymentData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 取得所有預約
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 更新預約狀態
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 取消預約
exports.cancelBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: '預約已取消' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
