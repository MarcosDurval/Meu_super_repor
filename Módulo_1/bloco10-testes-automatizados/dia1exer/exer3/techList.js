function techList(array, ze) {
  let objFinal = {};
  const sil = array.sort()
  const teste =  []
  if (!array.length) return 'Vazio!'
  sil.forEach((item) => {
    objFinal.tech = item
    objFinal.name = ze
    teste.push(objFinal)
    objFinal = {}
  })
  return teste
}
module.exports = techList;