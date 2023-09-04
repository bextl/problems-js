function move(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-z]/.test(char)) {
      const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

      result += nextChar;
    }
    else if (/[A-Z]/.test(char)) {
      const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

      result += nextChar.toUpperCase();
    }
    else {
      result += char;
    }
  }

  return result;
}

module.exports = move;
