const periodo = () => {
    const data = new Date();
    const hora = data.getHours();

    if (hora >= 5 && hora < 12) {
        return "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde!";
    } else {
        return "Boa Noite";
    }
}

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

const escolhas = [];

escolhas.push(prompt(`Olá, ${periodo()}, tudo bem?\nEstou aqui pela Rafaella Ballerini, para saber qual a sua àrea, Front-End ou Back-End?`));

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

if (escolhas[0].toLowerCase() == "front-end" || escolhas[0].toLowerCase() == "front end") {
    escolhas.push(prompt(`Vejo que você escolheu ${escolhas[0]}, gostaria de aprender React, ou Vue?`));
} else if (escolhas[0].toLowerCase() == "back-end" || escolhas[0].toLowerCase() == "back end") {
    escolhas.push(prompt(`Vejo que você escolheu ${escolhas[0]}, gostaria de aprender C#, ou Java?`));
} else {
    escolhas.push("");
    alert("Opção inválida!");
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

const cases = parseInt(prompt("Escolha entre:\n\n1. Seguir se especializando na área escolhida\n2. Seguir se desenvolvendo para se tornar Fullstack"));

switch (cases) {
    case 1:
        escolhas.push("Seguir se especializando na área escolhida");
        break;
    case 2:
        escolhas.push("Seguir se desenvolvendo para se tornar Fullstack");
        break;
    default:
        escolhas.push("");
        alert("Opção inválida!");
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const tecnologias = [];

tecnologias.push(prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?"));

let maisTecnologias = prompt("Deseja inserir mais alguma tecnologia? (S/N)");

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

while (maisTecnologias.toLowerCase() == "s") {
    tecnologias.push(prompt("Tecnologia: "));
    maisTecnologias = prompt("Deseja inserir mais alguma tecnologia? (S/N)");
}

alert(`As suas escolhas durante o programa foram: \n1. ${escolhas[0]}\n2. ${escolhas[1]}\n3. ${escolhas[2]}\n4. Tecnologias: ${[tecnologias.join(", ")]}`)