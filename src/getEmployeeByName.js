const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let employeeFound = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeFound === undefined) employeeFound = {};
  return employeeFound;
}

module.exports = getEmployeeByName;
