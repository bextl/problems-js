function numOfDigits(int) {
  const numString = Math.abs(int).toString();
  return numString.length;
}

module.exports = numOfDigits;
