const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

// 建立新預約
router.post('/', authMiddleware, bookingController.createBooking);

// 取得所有預約
router.get('/', authMiddleware, bookingController.getBookings);

// 更新預約狀態
router.put('/:id', authMiddleware, bookingController.updateBookingStatus);

// 取消預約
router.delete('/:id', authMiddleware, bookingController.cancelBooking);

module.exports = router;
