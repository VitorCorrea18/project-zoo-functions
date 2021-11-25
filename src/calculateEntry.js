const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrantsForAge = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) entrantsForAge.child += 1;
    if (person.age >= 18 && person.age < 50) entrantsForAge.adult += 1;
    if (person.age >= 50) entrantsForAge.senior += 1;
  });
  return entrantsForAge;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const entrantsForAge = countEntrants(entrants);
  const childTotal = entrantsForAge.child * 20.99;
  const adultTotal = entrantsForAge.adult * 49.99;
  const seniorTotal = entrantsForAge.senior * 24.99;
  return childTotal + adultTotal + seniorTotal;
}

module.exports = { calculateEntry, countEntrants };
