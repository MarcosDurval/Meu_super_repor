const estados = [
  " ",
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO"
]
const test = document.querySelector("#selec");
for (index = 0; index < estados.length; index += 1) {
  const cria = document.createElement("option");
  test.appendChild(cria).innerText = estados[index]

}

// You can get and set dates with moment objects

// var picker = new Pikaday(
//   {
//       field: document.getElementById('datepicker'),
//       firstDay: 1,
//       minDate: new Date(2000, 0, 1),
//       maxDate: new Date(2030, 12, 31),
//       yearRange: [2000,2030],
//       // onSelect: function() {
//       //     var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
//       //     document.getElementById('selected').appendChild(date);
//       // }
//   });

//   picker.setMoment(moment().dayOfYear(366));

let picker = new Pikaday({ field: document.getElementById('datepicker') });
