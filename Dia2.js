const nome = prompt("Digite o seu nome")
const idade = prompt("Digite a sua idade")
const linguagem = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}!`)

const estudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

alert(estudar == 1 ? "Muito bom! Continue estudando e você terá muito sucesso" : "Ahh que pena... Já tentou aprender outras linguagens?")