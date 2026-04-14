const numeros: number[] = [1, 4, 2, 3, 5];
const pratos: string[] = ["Feijoada", "Macarrao", "Bife", "Arroz", "Feijao"];

/* Usamos o map para criar um novo array com os valores do array original
const cardapio = array.map((valor, index) => {
  return {
    number: valor,
    name: array2[index]
  };
});

const newCardapio = cardapio.sort((a, b) => a.number - b.number);
console.log(newCardapio); */


/* Juntando arreys em dois arreys na mesma lista.
const juntandoArrays = [[...numeros.sort((a, b) => a - b)], [...pratos.sort()]];
console.log(juntandoArrays); */


/* Ordenando o array e multiplicando cada valor por 2.
const numerosAlterados = numeros.sort((a, b) => a - b).map((numero) => {
  return numero * 2;
});

console.log(numerosAlterados); */


/* Encontrando um nome no array.
const encontrarNome = pratos.find((prato) => prato === "Bife");
console.log("Nome encontrado: ", encontrarNome); */



/* Encontrando o index de um nome no array.
const encontrarIndex = pratos.findIndex((prato) => prato === "Bife");
console.log("Index encontrado: ", encontrarIndex); */


/* Splice primeiro numero é o index, segundo é a quantidade de remoção,
terceiro item ou mais seria para substituir o item removido.
numeros.splice(0,1,7);
console.log(numeros);
*/


export {};
