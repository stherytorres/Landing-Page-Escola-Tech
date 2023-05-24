
var setaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:100%"
}

function rolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none; margin-top:100%"
}

