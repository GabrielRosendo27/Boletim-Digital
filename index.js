const botao = document.querySelector(".botao");
const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");

botao.addEventListener("click", function () {
  // data from info1
  const nomeAluno = document.querySelector("#nome-aluno").value;
  const nomeEscola = document.querySelector("#nome-escola").value;
  const nomeTurma = document.querySelector("#nome-turma").value;
  const anoLetivo = document.querySelector("#ano-letivo").value;
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
const secondButton = document.querySelector(".second-button");
secondButton.addEventListener("click", function () {
  materias();
  arte.style.display = "none";
  biologia.style.display = "grid";
});
