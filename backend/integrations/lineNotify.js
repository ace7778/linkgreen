const axios = require('axios');

// TODO: 未來插入 LINE Notify Token
const LINE_NOTIFY_TOKEN = process.env.LINE_NOTIFY_TOKEN;

// 發送 LINE Notify 通知
exports.sendLineNotification = async (message) => {
  try {
    const response = await axios.post(
      'https://notify-api.line.me/api/notify',
      new URLSearchParams({ message }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${LINE_NOTIFY_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('發送 LINE 通知時發生錯誤:', error);
    throw error;
  }
};
