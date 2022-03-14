/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/

class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

// class testador extends Employee{
//   this.add
// }

console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
e1.name = "Demian"
console.log(e1)
/*
Saída:



*/