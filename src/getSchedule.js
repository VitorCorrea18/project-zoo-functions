const data = require('../data/zoo_data');

function returnHours(day) {
  // retorna uma frase informando os horarios do dia passado por parâmetro
  const { hours } = data;
  if (hours[day].open === 0 || hours[day].close === 0) return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}
// console.log(returnHours('Monday'));

function returnExhibitAnimals(day) {
  // retorna qual animal estará em exibição no dia passado por parâmentro
  const { hours } = data;
  if (hours[day].open === 0 || hours[day].close === 0) return 'The zoo will be closed!'; // se o horario de abertura for 0 o zoo estará fechado
  const availabeAnimals = []; // pesquisar sobre o map.
  data.species.forEach((specie) => {
    // roda um forEach para inserir cada animal disponivel no dia.parâmentro
    if (specie.availability.includes(day)) availabeAnimals.push(specie.name);
  });
  return availabeAnimals;
}
// console.log(returnExhibitAnimals('Friday'));

function allAnimalsSchedule() { // retorna a disponibilidade de todos os animais
  const { hours } = data;
  const schedule = Object.keys(hours).reduce((dayHours, currDay) => {
    // para cada dia da semana insere um obj com o horario de funcionamento mais os animais disponiveis
    const obj = dayHours;
    obj[currDay] = {
      officeHour: returnHours(currDay),
      exhibition: returnExhibitAnimals(currDay),
    };
    return obj;
  }, {});
  return schedule;
}

function verifySpecieName(name) {
  if (data.species.find((specie) => specie.name === name) === undefined) return false;
  return true;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return allAnimalsSchedule(); // se o parâmetro for vazio retorna todos os animais.
  if (data.hours[scheduleTarget]) {
    const schedule = {};
    schedule[scheduleTarget] = {
      officeHour: returnHours(scheduleTarget),
      exhibition: returnExhibitAnimals(scheduleTarget),
    };
    return schedule;
  }
  if (verifySpecieName(scheduleTarget)) {
    const animal = data.species.find((specie) => specie.name === scheduleTarget);
    return animal.availability;
  } return allAnimalsSchedule();
}
console.log(getSchedule('Friday'));

module.exports = getSchedule;
