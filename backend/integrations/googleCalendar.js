const { google } = require('googleapis');

// Google 日曆 API 設定
const calendar = google.calendar({ version: 'v3' });

// TODO: 未來插入 Google API 金鑰
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

// 建立 Google 日曆事件
exports.createCalendarEvent = async (eventData) => {
  try {
    const response = await calendar.events.insert({
      auth: API_KEY,
      calendarId: 'primary',
      resource: {
        summary: eventData.summary,
        description: eventData.description,
        start: { dateTime: eventData.start },
        end: { dateTime: eventData.end },
      },
    });
    return response.data;
  } catch (error) {
    console.error('建立 Google 日曆事件時發生錯誤:', error);
    throw error;
  }
};
