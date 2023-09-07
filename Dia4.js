// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

function jogo() {
    let x, tentativas = 3;

    const start = prompt(`Jogo do número misterioso!\n\n1. Easy Mode\n2. Hard Mode\n\nEscolha uma dificuldade:`)
    start == "1" ? easyMode() : hardMode();

    function logica(numero) {

        while (tentativas > 0) {

            x = parseInt(prompt("Digite um número entre 0 e 10: "));

            if (x == numero) {
                alert(`Você acertou, o número misterioso era: ${numero}!`);
                tentativas = 0;
            } else {
                tentativas--;
                alert(`Você errou!\nTentativas restantes: ${tentativas}`);
                if (tentativas == 0) {
                    alert(`O número misterioso era: ${numero}`)
                }
            }
        }
    }

    function easyMode() {
        const numeroMisterioso = 5;

        logica(numeroMisterioso);
    }

    // Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

    function hardMode() {
        const numeroRandom = Math.floor(Math.random() * 11);

        logica(numeroRandom);
    }

    const playAgain = prompt("Você quer jogar mais uma vez? (S/N)")
    if (playAgain.toLowerCase() == "s" || playAgain == "sim") {
        jogo();
    } else {
        alert("Obrigado por participar! :)");
    }
}

jogo()