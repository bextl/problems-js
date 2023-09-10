function mapping(arr) {
  const result = {};

  for (const letter of arr) {
    result[letter] = letter.toUpperCase();
  }

  return result;
}

module.exports = mapping;
