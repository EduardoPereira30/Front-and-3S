function validarFormulario(value) {

    let nome = document.getElementById("Nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;
    let nEstado = document.getElementById("NEstado").value;
    let ddd = document.getElementById("DDD").value;
    let telefone = document.getElementById("Telefone").value;
    // let endereco = document.getElementById("Endereco").value;
    let cep = document.getElementById("Cep").value;
    let rua = document.getElementById("Rua").value;
    // let compremento = document.getElementById("Compremento").value;
    // let apertamento = document.getElementById("Apertamento").value;
    // let bairro = document.getElementById("Bairro").value;
    // let cidade = document.getElementById("Cidade").value;
    // let estado = document.getElementById("Estado").value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("Nome");
        quantidadeErros++;
        alert("O campo nome é obrigatorio");

    } else {
        reiniciarBorda("Nome");
    }

    if (sobrenome.trim().length == 0) {
        formError("Sobrenome");
        quantidadeErros++;
        alert("O campo sobrenome é obrigatorio");

    } else {
        reiniciarBorda("Sobrenome");
    }

    if (email.trim().length == 0) {
        formError("Email");
        quantidadeErros++;
        alert("O campo email é obrigatorio");

    } else {
        reiniciarBorda("Email");
    }

    if (nEstado.trim().length == 0) {
        formError("NEstado");
        quantidadeErros++;
        alert("O campo Numero do Estado é obrigatorio");

    } else {
        reiniciarBorda("NEstado");
    }

    if (ddd.trim().length == 0) {
        formError("DDD");
        quantidadeErros++;
        alert("O campo DDD do Estado é obrigatorio");

    } else {
        reiniciarBorda("DDD");
    }

    if (telefone.trim().length == 0) {
        formError("Telefone");
        quantidadeErros++;
        alert("O campo Telefone é obrigatorio");

    } else {
        reiniciarBorda("Telefone");
    }

    // if (endereco.trim().length == 0) {
    //     formError("Endereco");
    //     quantidadeErros++;
    //     alert("O campo endereço é obrigatorio");

    // } else {
    //     reiniciarBorda("Endereco");
    // }

    if (cep.trim().length == 0) {
        formError("Cep");
        quantidadeErros++;
        alert("O campo Cep é obrigatorio");

    } else {
        reiniciarBorda("Cep");
    }

    if (rua.trim().length == 0) {
        formError("Rua");
        quantidadeErros++;
        alert("O campo Rua é obrigatorio");

    } else {
        reiniciarBorda("Rua");
    }


    if (quatidadeErros > 0) {
        alert("Existem" + quantidadeErros + " erros no formulario!");
        quantidadeErros = 0;
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red"

}

function reiniciarBorda(idCampo) {
    document.getElementById(idCampo).style.border = "none"
}