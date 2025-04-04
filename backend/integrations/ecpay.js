const crypto = require('crypto');

// ECPay 綠界支付設定
const config = {
  merchantID: process.env.ECPAY_MERCHANT_ID,
  hashKey: process.env.ECPAY_HASH_KEY,
  hashIV: process.env.ECPAY_HASH_IV,
};

// 產生 CheckMacValue
function generateCheckMacValue(params) {
  const sortedParams = Object.keys(params).sort().map(key => `${key}=${params[key]}`).join('&');
  const rawString = `HashKey=${config.hashKey}&${sortedParams}&HashIV=${config.hashIV}`;
  const encodedString = encodeURIComponent(rawString).toLowerCase().replace(/%20/g, '+');
  return crypto.createHash('sha256').update(encodedString).digest('hex').toUpperCase();
}

// 建立訂單
exports.createOrder = (orderData) => {
  const params = {
    MerchantID: config.merchantID,
    MerchantTradeNo: orderData.tradeNo,
    MerchantTradeDate: orderData.tradeDate,
    PaymentType: 'aio',
    TotalAmount: orderData.amount,
    TradeDesc: orderData.description,
    ItemName: orderData.itemName,
    ReturnURL: orderData.returnURL,
    ChoosePayment: 'Credit',
  };

  params.CheckMacValue = generateCheckMacValue(params);

  return params;
};
