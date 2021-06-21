const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}
divUm.addEventListener("click",handleChangeTech)
divDois.addEventListener("click",handleChangeTech)
divTres.addEventListener("click",handleChangeTech)




input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});
myWebpage.addEventListener('dblclick', (event) => {
  window.open('https://blog.betrybe.com/');
});
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
   event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.