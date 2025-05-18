// Exercicio 1
let numeros = [1,2,3,4,5,6,7,8,9,10];
function somar(numeros){
    let soma = 0;
    numeros.forEach(i => {
    soma += i;
    });
    return soma
}

let resultado = somar(numeros)
console.log("Exercício 1: ", resultado, "\n")

// Exercicio 2
let string = ["abc","def"]
function juntar(string){
    let Maiuscula = string.map(item => item.toUpperCase());
    let frase = "";
    Maiuscula.forEach(i => {
        frase += i;
    });
    return frase
}

let frase = juntar(string)
console.log("Exercício 2: ", frase, "\n")

// Exercico 3
let itens = ["caneta"]
function adicionarFim(itens){
    itens.push("lapis")
    return itens
}

let adicionadoFim = adicionarFim(itens)
console.log("Exercício 3: ", adicionadoFim, "\n")

// Exercicio 4
function removerP(numeros){
    numeros.shift()
    return num = numeros
}

let nremovido = removerP(numeros)
console.log("Exercício 4: ", nremovido, "\n")

// Exercicio 5
function filtrarPares(numeros) {
  const pares = [];
  numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  });
  return pares;
}

const npar =filtrarPares(numeros)
console.log("Exercício 5: ", npar, "\n")

// Exercicio 6
function contarPalavrasG(palavras) {
  let contador = 0;
  for (const palavra of palavras) {
    if (palavra.length > 5) {
      contador++;
    }
  }
  return contador;
}

const listaDePalavras = ["casa", "carro", "elefante", "bicicleta", "sol", "computador", "lua"];
const palavrasGrandes = contarPalavrasG(listaDePalavras);
console.log("Exercício 6: ", palavrasGrandes, "\n");

// Exercico 7 
function encontrarMaiorN(numeros) {
  return Math.max(...numeros);
}

const maiorNumero = encontrarMaiorN(numeros);
console.log("Exercício 7: ", maiorNumero, "\n");

// Exercico 8
const listaDeNomes = ["Ana", "Pedro", "Maria", "João", "Sofia"];
function formatarNomes(nomes) {
  return nomes.join(', ');
}

const nomesFormatados = formatarNomes(listaDeNomes)
console.log("Exercício 8: ", nomesFormatados, "\n")

// Exercico 9
function inverterArray(numeros){
    numeros.reverse()
    return numeros
}

const arrayInvertido = inverterArray(numeros)
console.log("Exercício 9: ", arrayInvertido, "\n")

// Exercico 10
function calcularQuadrados(numeros) {
  return numeros.map(numero => numero * numero);
}

const quadradoN = calcularQuadrados(numeros)
console.log("Exercício 10: ", quadradoN)