export const formatNumber = (num: number | string): string => {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  const [integerPart, decimalPart] = number.toString().split('.');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const formatPriceChange = (value: number | null): string => {
  if (value === null || isNaN(value)) return '0.00';

  const absValue = Math.abs(value);
  const decimals = absValue >= 1 ? 2 : 4;

  return formatNumber(value.toFixed(decimals));
};
