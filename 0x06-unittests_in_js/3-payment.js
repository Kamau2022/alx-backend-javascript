const Utils = require('./utils');
function sendPaymentRequestToApi(totalAmount, totalShipping){
	const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping)
	console.log(sum)
}
module.exports = sendPaymentRequestToApi;
