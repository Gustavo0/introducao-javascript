var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);

    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var ulErro = document.querySelector(".mensagens-erro");
    ulErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaPacienteTr(paciente);
    incluiPacienteNaTabela(pacienteTr);
}

function obtemPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Nome não pode estar em branco");
    }

    if(!isPesoValido(paciente.peso)){
        erros.push("Peso inválido");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode estar em branco");
    }

    if(!isAlturaValida(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode estar em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode estar em branco");
    }

    return erros;
}

function exibeMensagensErro(erros){
    var ulErro = document.querySelector(".mensagens-erro");
    ulErro.innerHTML = "";
    erros.forEach(function(erro){
        var liErro = document.createElement("li");
        liErro.classList.add("mensagem-erro");
        liErro.textContent = erro;
        ulErro.appendChild(liErro);
    });
}
function montaPacienteTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function incluiPacienteNaTabela(pacienteTr){
    var tBody = document.querySelector("#tabela-pacientes");
    tBody.appendChild(pacienteTr);
}