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
}

module.exports = isPrimitive;
