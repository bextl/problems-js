function makeTitleCase(str) {
  const words = str.split(' ');

  
  const titleCaseWords = words.map(word => {

    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  const titleCaseStr = titleCaseWords.join(' ');

  return titleCaseStr;
}

module.exports = makeTitleCase;
