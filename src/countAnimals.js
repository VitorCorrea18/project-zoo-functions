const data = require('../data/zoo_data');

function countSearchedAnimals(animal) {
  const searchedAnimal = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    const residentOfSex = [];
    searchedAnimal.residents.forEach((resident) => {
      if (resident.sex === animal.sex) residentOfSex.push(resident);
    });
    return residentOfSex.length;
  }
  return searchedAnimal.residents.length;
}

function countAllAnimals() {
  const animals = {};
  data.species.forEach((specie) => {
    animals[`${specie.name}`] = specie.residents.length;
  });
  return animals;
}

// function countAnimals(animal) { // { specie: 'penguins' }
//   // seu código aqui
//   if (animal !== undefined) countSearchedAnimals(animal);
//   if (animal === undefined) countAllAnimals();
// }

function countAnimals(animal) { // { specie: 'penguins' }
  // seu código aqui
  if (animal !== undefined) return countSearchedAnimals(animal);
  if (animal === undefined) return countAllAnimals();
}

module.exports = countAnimals;
