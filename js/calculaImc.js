var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imcPagina = paciente.querySelector(".info-imc");

    var pesoEhValido = isPesoValido(peso);
    var alturaEhValida = isAlturaValida(altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        imcPagina.textContent = imc;
    } else {
        imcPagina.textContent = "Altura e/ou peso inválidos!"
    }
}

function isPesoValido(peso){
    return peso > 0 && peso < 1000;
}

function isAlturaValida(altura){
    return altura > 0 && altura < 3.0;
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

