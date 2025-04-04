const nodemailer = require('nodemailer');

// Gmail SMTP 設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 發送電子郵件
exports.sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('電子郵件已成功發送:', info.response);
    return info;
  } catch (error) {
    console.error('發送電子郵件時發生錯誤:', error);
    throw error;
  }
};
