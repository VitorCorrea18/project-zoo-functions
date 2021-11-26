const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsibleFor = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsibleFor);
  const oldestAnimal = animal.residents.reduce((accResident, crrResident) => {
    let oldest = accResident;
    if (crrResident.age > accResident.age) oldest = crrResident;
    return oldest;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
