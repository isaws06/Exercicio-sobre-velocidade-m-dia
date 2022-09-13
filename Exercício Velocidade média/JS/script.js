respostas = [];

function limpar() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    })
}

function calcular() {
var deslocamento = document.getElementById("deslocamento").value;
var tempo = document.getElementById("tempo").value;
z = deslocamento / tempo 
document.getElementById('resultado').value = z
}

// function calcular() {
//     let deslocamento = Number.parseFloat(document.getElementById("deslocamento").value);
//     let tempo = Number.parseFloat(document.getElementById("tempo").value);
//     let vm = deslocamento / tempo
//     document.getElementById("vm").value = vm
// }

console.log(resultado);