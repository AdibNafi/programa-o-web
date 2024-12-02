var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var setaesquerda = window.document.getElementById("setaesquerda")

function DeslizarParaDireita(){
Leonardo.style="display:none;"
Bruna.style="display:flex;"
Samantha.style="display:flex;"
setadireita.style="display:none;"
setaesquerda.style="display:flex;, margin-top=50px;"
}

function DeslizarParaEsquerda(){
    Leonardo.style="display:flex;"
    Bruna.style="desplay:none;"
    Samantha.style="display:flex;"
    setadireita.style="display:flex;, margin-top=50px;"
    setaesquerda.style="display:none;"
}