const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// 載入環境變數
dotenv.config();

// 建立 Express 應用程式
const app = express();

// 資料庫連線
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// 中介層設定
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// 路由設定
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/consultants', require('./routes/consultantRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));

// 啟動伺服器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
