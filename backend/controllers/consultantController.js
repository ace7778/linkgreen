const Consultant = require('../models/Consultant');

// 建立顧問資料
exports.createConsultant = async (req, res) => {
  try {
    const consultant = new Consultant({ ...req.body, resume: req.file.path });
    await consultant.save();
    res.status(201).json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 取得所有顧問資料
exports.getConsultants = async (req, res) => {
  try {
    const consultants = await Consultant.find();
    res.status(200).json(consultants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 取得單一顧問資料
exports.getConsultant = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.params.id);
    res.status(200).json(consultant);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// 更新顧問資料
exports.updateConsultant = async (req, res) => {
  try {
    const consultant = await Consultant.findByIdAndUpdate(req.params.id, { ...req.body, resume: req.file?.path }, { new: true });
    res.status(200).json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 刪除顧問資料
exports.deleteConsultant = async (req, res) => {
  try {
    await Consultant.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: '顧問資料已刪除' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 搜尋與篩選顧問
exports.searchConsultants = async (req, res) => {
  const { category, expertise, ratings, availability } = req.query;
  let filter = {};

  if (category) filter.category = category;
  if (expertise) filter.skills = { $in: expertise.split(',') };
  if (ratings) filter.ratings = { $gte: Number(ratings) };
  if (availability) filter.availability = availability;

  try {
    const consultants = await Consultant.find(filter);
    res.status(200).json(consultants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
