function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function dia() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dialist = document.querySelector("#days").appendChild(document.createElement("li"))
    dialist.innerText = dezDaysList[i]
    dialist.className = "day"
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      dialist.classList.add("holliday")
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      dialist.classList.add("friday")

    }
  }
}


dia()
function botão(texto){
  let btn = document.createElement("button")
  let cor = "red"
  btn.id = "btn-holiday"
  document.querySelector(".buttons-container").appendChild(btn)
  btn.innerHTML = texto
  let fe = document.querySelectorAll(".holliday")
  btn.addEventListener("click",function(){
    for(let i = 0; i < fe.length; i += 1){
      if(fe[i].style.background !== cor){
        fe[i].style.background = cor
      }else{
        fe[i].style.backgroundColor = "white";
      }
    }
  
  })
}
botão("feriados")


function botun(){
  let dezFridays = [ 4, 11, 18, 25 ];
  let btn = document.createElement("button")
  btn.id = "btn-Friday"
  document.querySelector(".buttons-container").appendChild(btn)
  btn.innerText = "Sexta-feira"
  let fe = document.querySelectorAll(".friday")
  btn.addEventListener("click",function(){
    console.log(fe)
    for(let i = 0; i < fe.length; i += 1){
      if(fe[i].innerHTML === "sextou"){
        fe[i].innerHTML = dezFridays[i]
      }
      else{
        fe[i].innerHTML = "sextou"
      }
    }
  })
}
botun()

function entrei(){
  let dia1 = document.querySelectorAll(".day")
  for(let i =0; i < dia1.length; i += 1){
    dia1[i].addEventListener("mouseover",function(){
      dia1[i].style.fontSize = "30px"
    })
  }
}
entrei()
function sai(){
  let dia1 = document.querySelectorAll(".day")
  for(let i =0; i < dia1.length; i += 1){
    dia1[i].addEventListener("mouseout",function(){
      dia1[i].style.fontSize = "20px"
    })
  }
}
sai()
function span(texto){
  let span =  document.createElement("span")
  let pai = document.querySelector(".my-tasks")
  pai.appendChild(span)
  span.innerText = texto
  
}
span("projetos")









function divs(cor){
  let divUm =  document.createElement("div")
  let pai = document.querySelector(".my-tasks")
  pai.appendChild(divUm)
  divUm.style.background = cor
  divUm.className = "tst"
}
divs("green")



function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.tst');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.tst');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();







function task(){
  let pai = document.querySelector(".task-list")
  let botao = document.querySelector("#btn-add")
  botao.addEventListener("click",() => {
    console.log("botão")
    let span = document.createElement("li")
    let texto = document.querySelector("#task-input")
    pai.appendChild(span)
    span.innerText = texto.value
    if(span.innerText === ""){
      alert("valor invalido")
    }
  })
}
task()



// function setDayColor() {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let days = document.querySelector('#days');
//   let taskDiv = document.querySelector('.task');
//   let taskColor = taskDiv.style.backgroundColor;
  
//   days.addEventListener('click', function(event){
//     let eventTargetColor = event.target.style.color;
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//       let color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//       event.target.style.color = 'rgb(119,119,119)';
//     }
//   });
// };

// setDayColor();