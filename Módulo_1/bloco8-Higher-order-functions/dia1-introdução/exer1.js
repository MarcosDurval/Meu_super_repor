
const newEmployees = () => {
  const employees = {
    id1: genereEmployes('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2:  genereEmployes('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3:  genereEmployes('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const genereEmployes = (obj) => {
  const email = obj.split(' ').join('_').toLowerCase()
  return `${email}@betrybe`
}
console.log(newEmployees())