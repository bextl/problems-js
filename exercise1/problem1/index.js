function numOfDigits(int) {
  const numString = Math.abs(int).toString();
  return numString.length;
  // Your code
}

module.exports = numOfDigits;
