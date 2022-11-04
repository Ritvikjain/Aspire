export const formatCurrency = (givenAmount) => {
  if(!givenAmount) {
    return givenAmount?.toString();
  }
  const amount = typeof givenAmount === 'string' ? givenAmount : givenAmount.toString();
  const decimalAmount = amount.split('.')[1];
  const roundOfAmount = amount.split('.')[0]
  let result = '';
  let digitCount = 0;
  let firstComma = false;
  for(let i = roundOfAmount.length - 1; i >= 0; i--) {
    result += roundOfAmount.charAt(i);
    digitCount++;
    if(!firstComma && digitCount === 3 && i !== 0) {
      result += ',';
      digitCount = 0;
      firstComma = true;
    } else if(firstComma && digitCount === 2 && i !== 0) {
      result += ',';
      digitCount = 0;
    }
  }
  const formattedAmount = result?.split('').reverse().join('');
  return decimalAmount && decimalAmount.length > 0 ? 
    `${formattedAmount}.${decimalAmount.substring(0,2)?.length === 1 ? `${decimalAmount.substring(0,2)}0` : decimalAmount.substring(0,2)}` : formattedAmount;
}