// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

const listaCompras = {};

function adicionarItem(item, categoria) {
    if (!listaCompras[categoria]) {
        listaCompras[categoria] = [];
    }

    listaCompras[categoria].push(item);
}

function exibirLista() {
    const agruparCategorias = [];

    for (const categoria in listaCompras) {
        const itens = listaCompras[categoria].join(", ");
        agruparCategorias.push(`${categoria}: ${itens}`)
    }

    alert(`Lista de compras:\n\n${agruparCategorias.join("\n")}`);
}

function menu() {
    while (true) {
        const pergunta = prompt("Deseja adicionar um item? (S/N)");

        if (pergunta.toLowerCase() == "s") {
            const categoria = ["Frutas", "Laticinios", "Congelados", "Doces", "Outros"];
            const item = prompt("Digite um item:");

            let selectCategoria = parseInt(prompt(`Selecione a categoria que o item "${item}" se encaixa:\n\n1. Frutas\n2. Laticínios\n3. Congelados\n4. Doces\n5. Outro`));
            selectCategoria = categoria[selectCategoria - 1];

            adicionarItem(item, selectCategoria);
        } else {
            exibirLista();
            break;
        }
    }
}

menu();