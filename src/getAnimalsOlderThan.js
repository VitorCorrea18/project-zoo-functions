const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal);
  const checkAge = animals.residents.every((resident) => resident.age > age);
  return checkAge;
}

module.exports = getAnimalsOlderThan;
