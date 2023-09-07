// Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

// Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

// Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

// As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

function entradaDeDados() {
    const quantidadeNumeros = parseInt(prompt("Quantos valores serão inseridos para realizar a operação?"));;
    const numeros = [];

    for (let i = 0; i < quantidadeNumeros; i++) {
        const input = prompt("Número:");
        const numero = parseFloat(input);

        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, insira um número válido.");
        }
    }

    return numeros;
}

function calcular(operacao, numeros) {
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
            break;
        case "subtracao":
            numeros[0] *= (-1);
            resultado = numeros.reduce((acumulador, numeroAtual) => acumulador - numeroAtual, 0);
            break;
        case "multiplicacao":
            resultado = numeros.reduce((acumulador, numeroAtual) => acumulador * numeroAtual, 1);
            break;
        case "divisao":
            resultado = numeros.reduce((acumulador, numeroAtual) => acumulador / numeroAtual);
            break;
        default:
            alert("Operação inválida!");
            return;
    }

    alert(resultado);
}

function menu() {
    while (true) {
        const tipoOperacao = parseInt(prompt("Que operação você deseja realizar?\n\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair"));

        if (tipoOperacao === 5) {
            alert("Calculadora encerrada!")
            break;
        }

        if (tipoOperacao >= 1 && tipoOperacao <= 4) {
            const operacoes = ["soma", "subtracao", "multiplicacao", "divisao"];
            const operacaoSelecionada = operacoes[tipoOperacao - 1];
            const numeros = entradaDeDados();
            calcular(operacaoSelecionada, numeros)
        } else {
            alert("Opção inválida.");
        }
    }
}

menu();