const Order = require('../models/Order');

// 建立新訂單
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 取得所有訂單
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 更新訂單狀態
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 處理退款
exports.processRefund = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Refunded' }, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
