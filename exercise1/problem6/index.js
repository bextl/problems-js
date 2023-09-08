function insertWhitespace(str) {
  const modifiedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return modifiedStr;
function insertWhitespace() {
  // Your code
}

module.exports = insertWhitespace;
