async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    const resposta = fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    return await resposta;
}

async function BuscarEndereco(cep) {

    // if (cep.trim().length < 8) {
    //     alert("O cep deve ter 8 digitos");
    //     return false;
    // }
    try {
        aguardarCampos();
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        // console.log(dados);

        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Rua").value = dados.logradouro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.estado;

    } catch (error) {
        console.log(error)
    }


}

function aguardarCampos() {

    document.getElementById("Bairro").value = "aguarde...";
    document.getElementById("Rua").value = "aguarde...";
    document.getElementById("Cidade").value = "aguarde...";
    document.getElementById("Estado").value = "aguarde...";
}

function validarFormulario() {

    let nome = document.getElementById("Nome").value;
    let sobrenome = document.getElementById("Sobrenome").value;
    let email = document.getElementById("Email").value;
    let nEstado = document.getElementById("NEstado").value;
    let ddd = document.getElementById("DDD").value;
    let telefone = document.getElementById("Telefone").value;
    let cep = document.getElementById("Cep").value;
    let rua = document.getElementById("Rua").value;
    let compremento = document.getElementById("Compremento").value;
    let apartamento = document.getElementById("Apartamento").value;
    let bairro = document.getElementById("Bairro").value;
    let cidade = document.getElementById("Cidade").value;
    let estado = document.getElementById("Estado").value;
    let anotacoes = document.getElementById("Anotacoes").value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("Nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatorio");

    } else {
        reiniciarBorda("Nome");
    }

    if (sobrenome.trim().length == 0) {
        formError("Sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatorio");

    } else {
        reiniciarBorda("Sobrenome");
    }

    // if (email.trim().length == 0) {
    //     formError("Email");
    //     quantidadeErros++;
    //     // alert("O campo email é obrigatorio");

    // } else {
    //     reiniciarBorda("Email");
    // }

    // if (nEstado.trim().length == 0) {
    //     formError("NEstado");
    //     quantidadeErros++;
    //     // alert("O campo Numero do Estado é obrigatorio");

    // } else {
    //     reiniciarBorda("NEstado");
    // }

    // if (ddd.trim().length == 0) {
    //     formError("DDD");
    //     quantidadeErros++;
    //     // alert("O campo DDD do Estado é obrigatorio");

    // } else {
    //     reiniciarBorda("DDD");
    // }

    // if (telefone.trim().length == 0) {
    //     formError("Telefone");
    //     quantidadeErros++;
    //     // alert("O campo Telefone é obrigatorio");

    // } else {
    //     reiniciarBorda("Telefone");
    // }

    // if (rua.trim().length == 0) {
    //     formError("Rua");
    //     quantidadeErros++;
    //     // alert("O campo Rua é obrigatorio");

    // } else {
    //     reiniciarBorda("Rua");
    // }

    // if (compremento.trim().length == 0) {
    //     formError("Compremento");
    //     quantidadeErros++;
    //     // alert("O campo compremento é obrigatorio");

    // } else {
    //     reiniciarBorda("Compremento");
    // }

    // if (apartamento.trim().length == 0) {
    //     formError("Apartamento");
    //     quantidadeErros++;
    //     // alert("O campo apartamento é obrigatorio");

    // } else {
    //     reiniciarBorda("Apartamento");
    // }

    // if (bairro.trim().length == 0) {
    //     formError("Bairro");
    //     quantidadeErros++;
    //     // alert("O campo bairro é obrigatorio");

    // } else {
    //     reiniciarBorda("Bairro");
    // }

    // if (cidade.trim().length == 0) {
    //     formError("Cidade");
    //     quantidadeErros++;
    //     // alert("O campo cidade é obrigatorio");

    // } else {
    //     reiniciarBorda("Cidade");
    // }

    // if (estado.trim().length == 0) {
    //     formError("Estado");
    //     quantidadeErros++;
    //     // alert("O campo estado é obrigatorio");

    // } else {
    //     reiniciarBorda("Estado");
    // }

    // if (anotacoes.trim().length == 0) {
    //     formError("Anotacoes");
    //     quantidadeErros++;
    //     // alert("O campo estado é obrigatorio");

    // } else {
    //     reiniciarBorda("Anotacoes");
    // }

    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário");
        quantidadeErros = 0;
    } else {
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            nEstado: nEstado,
            ddd: ddd,
            telefone: telefone,
            cep: cep,
            rua: rua,
            apartamento: apartamento,
            compremento: compremento,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            anotacoes: anotacoes

        }

        let cadastrado = cadastrarContato(objetoContato);
        // reiniciaTo   dasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red"

}

function reiniciarBorda(idCampo) {
    document.getElementById(idCampo).style.border = "none"
}