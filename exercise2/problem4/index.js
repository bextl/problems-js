function numInStr(arr) {
  const result = [];

  const regex = /\d/;

  for (const str of arr) {
    if (regex.test(str)) {
      result.push(str);
    }
  }

  return result;
}

module.exports = numInStr;
