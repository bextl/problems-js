function arrayOfMultiples(num, length) {
  const multiples = [];

  for (let i = 1; multiples.length < length; i++) {
    multiples.push(num * i);
  }

  return multiples;

}

module.exports = arrayOfMultiples;
