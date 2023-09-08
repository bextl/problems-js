function longestTime(h, m, s) {
  const totalSecondsH = h * 3600;
  const totalSecondsM = m * 60;

  const maxDuration = Math.max(totalSecondsH, totalSecondsM, s);

  if (maxDuration === s) {
    return s;
  }
  else if (maxDuration === totalSecondsM) {
    return m;
  }
  else {
    return h;
  }
function longestTime() {
  // Your code
}

module.exports = longestTime;
