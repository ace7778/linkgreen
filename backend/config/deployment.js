// 雲端部署設定檔案

module.exports = {
  port: process.env.PORT || 5000, // 伺服器監聽埠號
  databaseURL: process.env.MONGODB_URI, // MongoDB 資料庫連線字串
  jwtSecret: process.env.JWT_SECRET, // JWT 驗證密鑰
  frontendURL: process.env.FRONTEND_URL, // 前端應用程式 URL
  ecpayConfig: {
    merchantID: process.env.ECPAY_MERCHANT_ID,
    hashKey: process.env.ECPAY_HASH_KEY,
    hashIV: process.env.ECPAY_HASH_IV,
  },
  emailConfig: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  googleCalendarAPIKey: process.env.GOOGLE_CALENDAR_API_KEY, // Google 日曆 API 金鑰
  lineNotifyToken: process.env.LINE_NOTIFY_TOKEN, // LINE Notify Token
  smsAPIKey: process.env.SMS_API_KEY, // SMS 簡訊通知 API 金鑰
};
