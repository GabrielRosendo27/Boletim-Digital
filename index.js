const botao = document.querySelector(".botao");
const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");
// --
let nomeAluno;
let nomeTurma;
let nomeEscola;
let anoLetivo;
// --
botao.addEventListener("click", function () {
  nomeAluno = document.querySelector("#nome-aluno").value;
  nomeEscola = document.querySelector("#nome-escola").value;
  nomeTurma = document.querySelector("#nome-turma").value;
  anoLetivo = document.querySelector("#ano-letivo").value;
  // --
  info1.style.display = "none";
  info2.style.display = "grid";
  // --
});
function materias() {
  const arte = document.querySelector("#arte");
  const biologia = document.querySelector("#biologia");
  const sociologia = document.querySelector("#sociologia");
  const historia = document.querySelector("#historia");
  const geografia = document.querySelector("#geografia");
  const portugues = document.querySelector("#portugues");
  const quimica = document.querySelector("#quimica");
  const matematica = document.querySelector("#matematica");
  const ingles = document.querySelector("#ingles");
  const filosofia = document.querySelector("#filosofia");
}
//
const b1 = document.querySelector(".b1");
b1.addEventListener("click", function () {
  materias();
  let arteNota = document.getElementById("arte-nota").value;
  let arteFalta = document.getElementById("arte-falta").value;
  arte.style.display = "none";
  biologia.style.display = "grid";
  console.log(arteNota);
});

// --
const b2 = document.querySelector(".b2");
b2.addEventListener("click", function () {
  materias();
  const biologiaNota = document.getElementById("biologia-nota").value;
  const biologiaFalta = document.getElementById("biologia-falta").value;
  biologia.style.display = "none";
  filosofia.style.display = "grid";
});
// --
const b3 = document.querySelector(".b3");
b3.addEventListener("click", function () {
  materias();
  const filosofiaNota = document.getElementById("filosofia-nota").value;
  const filosofiaFalta = document.getElementById("filosofia-falta").value;
  filosofia.style.display = "none";
  geografia.style.display = "grid";
});
// --
const b4 = document.querySelector(".b4");
b4.addEventListener("click", function () {
  materias();
  const geografiaNota = document.getElementById("geografia-nota").value;
  const geografiaFalta = document.getElementById("geografia-falta").value;
  geografia.style.display = "none";
  historia.style.display = "grid";
});
// --
const b5 = document.querySelector(".b5");
b5.addEventListener("click", function () {
  materias();
  const historiaNota = document.getElementById("historia-nota").value;
  const historiaFalta = document.getElementById("historia-falta").value;
  historia.style.display = "none";
  ingles.style.display = "grid";
});
// --
const b6 = document.querySelector(".b6");
b6.addEventListener("click", function () {
  materias();
  const inglesNota = document.getElementById("ingles-nota").value;
  const inglesFalta = document.getElementById("ingles-falta").value;
  ingles.style.display = "none";
  portugues.style.display = "grid";
});
// --
const b7 = document.querySelector(".b7");
b7.addEventListener("click", function () {
  materias();
  const portuguesNota = document.getElementById("portugues-nota").value;
  const PortuguesFalta = document.getElementById("portugues-falta").value;
  portugues.style.display = "none";
  matematica.style.display = "grid";
});
// --
const b8 = document.querySelector(".b8");
b8.addEventListener("click", function () {
  materias();
  const matematicaNota = document.getElementById("matematica-nota").value;
  const matematicaFalta = document.getElementById("matematica-falta").value;
  matematica.style.display = "none";
  quimica.style.display = "grid";
});
// --
const b9 = document.querySelector(".b9");
b9.addEventListener("click", function () {
  materias();
  const quimicaNota = document.getElementById("quimica-nota").value;
  const quimicaFalta = document.getElementById("quimica-falta").value;
  quimica.style.display = "none";
  sociologia.style.display = "grid";
});
// --
const b10 = document.querySelector(".b10");
b10.addEventListener("click", function () {
  materias();
  const sociologiaNota = document.getElementById("sociologia-nota").value;
  const sociologiaFalta = document.getElementById("sociologia-falta").value;
  sociologia.style.display = "none";
  info2.style.display = "none";
  const caixaInfo = document.querySelector(".caixa-info");
  caixaInfo.style.display = "block";
  let span1 = document.querySelector(".text-1");
  let span2 = document.querySelector(".text-2");
  let span3 = document.querySelector(".text-3");
  let span4 = document.querySelector(".text-4");
  span1.innerHTML += nomeAluno;
  span2.innerHTML += nomeEscola;
  span3.innerHTML += nomeTurma;
  span4.innerHTML += anoLetivo;
  //
});
