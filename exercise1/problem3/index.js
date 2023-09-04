function pentagonal(num) {
  if (num <= 0) {
    return 0; 
  }

  return 1 + 5 * (num - 1) * (num - 1);
}

module.exports = pentagonal;
