function darBoasVindas() {
    let nome = document.getElementById("nomeVisitante").value;
    let mensagem = document.getElementById("mensagemBoasVindas");

    if (nome === "") {
        mensagem.textContent = "Digite seu nome para entrar na loja.";
        mensagem.style.color = "#ff7675";
    } else {
        mensagem.textContent = "Bem-vindo à Pixel Store, " + nome + "!";
        mensagem.style.color = "#55efc4";
    }
}

function ativarPromocao() {
    let destaques = document.getElementById("destaques");
    let titulo = destaques.querySelector("h2");
    let cards = destaques.querySelectorAll(".card");

    destaques.style.backgroundColor = "#35204f";
    titulo.style.color = "#ffeaa7";

    for (let card of cards) {
        card.style.borderColor = "#fd79a8";
    }
}

function calcularTotal() {
    let preco = Number(document.getElementById("produto").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let resultadoCompra = document.getElementById("resultadoCompra");
    let resultadoFrete = document.getElementById("resultadoFrete");

    if (quantidade <= 0 || isNaN(quantidade)) {
        resultadoCompra.textContent = "Informe uma quantidade válida.";
        resultadoCompra.style.color = "#ff7675";
        resultadoFrete.textContent = "";
        return;
    }

    let total = preco * quantidade;
    let descontoAplicado = 0;

    if (quantidade >= 3) {
        descontoAplicado = total * 0.10;
        total = total - descontoAplicado;

        resultadoCompra.textContent =
            "Total: R$ " + total.toFixed(2) +
            " — desconto de 10% aplicado.";
    } else {
        resultadoCompra.textContent =
            "Total: R$ " + total.toFixed(2) +
            " — nenhum desconto foi aplicado.";
    }

    if (total >= 500) {
        resultadoFrete.textContent = "Frete grátis disponível.";
        resultadoFrete.style.color = "#55efc4";
        resultadoFrete.style.backgroundColor = "#173f3b";
        resultadoFrete.style.padding = "10px";
    } else {
        resultadoFrete.textContent = "Frete calculado separadamente.";
        resultadoFrete.style.color = "#ffeaa7";
        resultadoFrete.style.backgroundColor = "#4c4022";
        resultadoFrete.style.padding = "10px";
    }
}

function enviarMensagem() {
    let nome = document.getElementById("nomeCliente").value;
    let idade = Number(document.getElementById("idadeCliente").value);

    let respostaAtendimento =
        document.getElementById("respostaAtendimento");

    let respostaIdade =
        document.getElementById("respostaIdade");

    if (nome === "") {
        respostaAtendimento.textContent =
            "Digite seu nome antes de continuar.";
        respostaAtendimento.style.color = "#ff7675";
    } else {
        respostaAtendimento.textContent =
            "Obrigado, " + nome + "! Sua mensagem foi registrada.";
        respostaAtendimento.style.color = "#55efc4";
    }

    if (idade >= 18) {
        respostaIdade.textContent =
            "Você pode participar das promoções para maiores de 18 anos.";
        respostaIdade.style.color = "#55efc4";
    } else {
        respostaIdade.textContent =
            "As promoções gerais continuam disponíveis para você.";
        respostaIdade.style.color = "#ffeaa7";
    }
}

function destacarAtendimento() {
    let area = document.getElementById("areaAtendimento");

    area.style.backgroundColor = "#35204f";
    area.style.border = "3px solid #fd79a8";
    area.style.padding = "40px";
}