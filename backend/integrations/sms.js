const axios = require('axios');

// TODO: 未來插入 SMS API 金鑰
const SMS_API_KEY = process.env.SMS_API_KEY;

// 發送 SMS 簡訊通知
exports.sendSMS = async (phoneNumber, message) => {
  try {
    const response = await axios.post(
      'https://api.smsprovider.com/send', // 請替換為實際的 SMS API URL
      {
        apiKey: SMS_API_KEY,
        to: phoneNumber,
        message,
      }
    );
    return response.data;
  } catch (error) {
    console.error('發送 SMS 簡訊時發生錯誤:', error);
    throw error;
  }
};
