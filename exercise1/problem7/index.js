function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null ||
    typeof value === 'bigint' ||
    typeof value === 'symbol'
  );
function isPrimitive() {
  // Your code
}

module.exports = isPrimitive;
