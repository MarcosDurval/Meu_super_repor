// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// // const fullName = `${customer.firstName} ${customer.lastName}`;
// // customer[newKey] = fullName;
// console.log(customer);

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
// const arrayStudent = (student)=>{
//   const arrayOfSkills = Object.keys(student);
//   for (index in arrayOfSkills){
//   //  console.log(`${index} Nivel ${student[index]}`)
//    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   //  Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.
//   }
// }
// console.log("estudante 1")
// arrayStudent(student1)
// console.log("estudante 2")
// arrayStudent(student2)







// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// // const listSkillsValuesWithFor = (student) => {
// //   const skills = [];
// //   for(skill in student) {
// //     skills.push(student[skill]);
// //   }

// //   return skills;
// // };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// // console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));




