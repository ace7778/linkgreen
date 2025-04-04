const express = require('express');
const router = express.Router();
const consultantController = require('../controllers/consultantController');
const upload = require('../middleware/uploadMiddleware');

// 建立顧問資料
router.post('/', upload.single('resume'), consultantController.createConsultant);

// 取得所有顧問資料
router.get('/', consultantController.getConsultants);

// 取得單一顧問資料
router.get('/:id', consultantController.getConsultant);

// 更新顧問資料
router.put('/:id', upload.single('resume'), consultantController.updateConsultant);

// 刪除顧問資料
router.delete('/:id', consultantController.deleteConsultant);

// 搜尋與篩選顧問
router.get('/search', consultantController.searchConsultants);

module.exports = router;
