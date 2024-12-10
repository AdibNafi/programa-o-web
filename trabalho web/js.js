var setadireita = document.getElementById("setadireita");
var leonardo = document.getElementById("leonardo");
var bruna = document.getElementById("bruna");
var samantha = document.getElementById("samantha");
var setaesquerda = document.getElementById("setaesquerda");

function DeslizarParaDireita() {
    leonardo.style.display = "none";
    bruna.style.display = "flex";
    setadireita.style.display = "none";
    setaesquerda.style.display = "flex";
}

function DeslizarParaEsquerda() {
    leonardo.style.display = "flex";
    bruna.style.display = "none";
    setaesquerda.style.display = "none";
    setadireita.style.display = "flex";
}
