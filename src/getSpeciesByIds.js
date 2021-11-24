const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesFound = [];
  ids.forEach((id) => speciesFound.push(data.species.find((specie) => specie.id === id)));
  return speciesFound;
}

module.exports = getSpeciesByIds;
