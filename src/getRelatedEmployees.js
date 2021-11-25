const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // const person = data.employees.find((employee) => employee.id === id);
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const employees = data.employees.filter((employee) => employee.managers.includes(managerId));
    const responsibleFor = [];
    employees.forEach((employee) =>
      responsibleFor.push(`${employee.firstName} ${employee.lastName}`));
    return responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
