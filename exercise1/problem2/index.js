function intWithinBounds(n, lower, upper) {
  if (Number.isInteger(n)) {
    return n >= lower && n < upper;
  }
  return false;
}

module.exports = intWithinBounds;
