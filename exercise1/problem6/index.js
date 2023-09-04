function insertWhitespace(str) {
  const modifiedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return modifiedStr;
}

module.exports = insertWhitespace;
