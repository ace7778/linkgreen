const mongoose = require('mongoose');

const ConsultantSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  skills: [String],
  experience: String,
  bio: String,
  resume: String,
  profileImage: String,
  googleCalendarSync: { type: Boolean, default: false }, // 顧問自助啟用或停用 Google 日曆同步功能
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Consultant', ConsultantSchema); 