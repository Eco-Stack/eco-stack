// @ts-nocheck
import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js');
};

export const hexToRGB = h => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = value =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);

export const parseFloat = (number, digits = 2) => {
  if (Number.isNaN(Number(number))) return number;

  return Number(number).toFixed(digits);
};

export const lengthedArray = <T>(array: T[] | T, length = 10): (T | null)[] => {
  if (!Array.isArray(array)) {
    return [array].concat(new Array(length - 1).fill(null));
  }

  const arrLen = array.length;
  if (arrLen >= length) {
    return array.splice(0, 10);
  } else {
    const insuff = length - arrLen;
    const newArr = new Array(insuff).fill(null);
    return array.concat(newArr);
  }
};
