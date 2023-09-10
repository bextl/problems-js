function afterNYears(people, n) {
  if (n === 0) {
    return people; 
  }

  const updatedAges = {};

  for (const person in people) {
    const currentAge = people[person];
    const updatedAge = currentAge + Math.abs(n);
    updatedAges[person] = updatedAge;
  }

  return updatedAges;
}

module.exports = afterNYears;
