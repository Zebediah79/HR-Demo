/**
 * @typedef Employee
 * @property {string} name - Name of employee
 * @property {string} position - Employee's position in the complany
 * @property {number} salary - Employee's current salary
 */

/**@type {Employee[]} */
const employeeList = [
  { name: "Sam Walton", position: "Chief Executive", salary: 100000 },
  { name: "Employee A", position: "Sales", salary: 60000 },
];

// global variable that can be updated to stop the loop below
let userisFinished = false;
// 1. Prompt user for new employee data - name, position, salary as a comma seperated string.
while (!userisFinished) {
  const userInput = prompt(
    "Please enter the name, position, salary for the new employee.",
    "Jaimie Oliver, Developer, 80000"
  );
  if (userInput === null) {
    userisFinished = true;
    continue;
  }
  // 2. Create an object of type Employee from this data.
  const employeeData = userInput.split(",");
  const newEmployee = addEmployee(employeeData);
  // 3. Put the object created in step 2 into our list of employees.
  employeeList.push(newEmployee);
  console.log(employeeList);
  // 4. Alert the user that the employee was added successfully.
  alert("Employee added successfully");
}

/**
 *
 * @param {string} employeeDataArr - array with name, position, and salary in that order
 * @returns @type Employee
 */
function addEmployee(employeeArray) {
  // const newEmployee = {};
  // newEmployee.name = employeeArray[0].trim();
  // newEmployee.position = employeeArray[1].trim();
  // newEmployee.salary = Number(employeeArray[2].trim());
  const newEmployee = {
    name: employeeArray[0].trim(),
    position: employeeArray[1],
    salary: Number(employeeArray[2].trim()),
  };
  return newEmployee;
}
