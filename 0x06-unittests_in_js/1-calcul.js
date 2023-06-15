function calculateNumber(type, a, b) {
  if (type == 'SUM') { 
      return Math.round(a) + Math.round(b);
  }else if (type == 'SUBTRACT'){
	return (Math.round(a) - Math.round(b));
  }else if (type == 'Divide'){
	return Math.round(a) / Math.round(b);
  }else {
    throw new Error('Error');
}
}
module.exports = calculateNumber;
