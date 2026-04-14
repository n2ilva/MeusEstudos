/**
 * ArreySimples.ts
 * Demonstração de métodos primitivos de Array (map, sort, find, splice)
 * com aplicação de boas práticas de organização e imutabilidade.
 */

const numeros: number[] = [1, 4, 2, 3, 5];
const pratos: string[] = ["Feijoada", "Macarrao", "Bife", "Arroz", "Feijao"];

// =========================================================
// 1. Transformação de Arrays (Imutável)
// =========================================================

/**
 * Criação de um menu formatado utilizando .map()
 * Time Complexity (Tempo): O(N) onde N é o tamanho do array.
 */
const cardapioFormatado = numeros.map((id, index) => ({
  id,                   // Shorthand syntax para id: id
  nome: pratos[index]   // Realiza o "match" entre o index da lista de números e pratos
}));

// Diferente do .map(), o método .sort() muta o array original em ES6-, 
// portanto usamos o Spread Operator [...array] para gerar uma cópia segura e imutável.
const cardapioOrdenado = [...cardapioFormatado].sort((a, b) => a.id - b.id);

console.log("Cardápio Ordenado:", cardapioOrdenado);


// =========================================================
// 2. Composição e Manipulação Numérica
// =========================================================

// Cria uma matriz bidimensional juntando os dois arrays, com ambas as listas já ordenadas.
const agrupamentoMatriz = [
  [...numeros].sort((a, b) => a - b), // Ordem Numérica ASC
  [...pratos].sort()                  // Ordem Alfabética ASC
];
console.log("Agrupamento de Matriz (Tupla/Array 2D):", agrupamentoMatriz);

// Chaining (Encadeamento) de Métodos Funcionais 
// Organiza, dobra os valores e retorna a nova lista limpa.
const numerosDobradosEOrdenados = [...numeros]
  .sort((a, b) => a - b)
  .map(numero => numero * 2);

console.log("Números em Cadeia:", numerosDobradosEOrdenados);


// =========================================================
// 3. Busca e Alteração Avançada
// =========================================================

const pratoBuscado = "Bife";

// .find() é eficiente porque retorna assim que acha o primeiro 'match' (Early return) O(N)
const pratoEncontrado = pratos.find(prato => prato === pratoBuscado);
console.log("Busca de prato:", pratoEncontrado || "Prato indisponível");

// .findIndex() acha a posição na memória no array.
const indexOfPrato = pratos.findIndex(prato => prato === pratoBuscado);

// Se existir no array (índice diferente de -1), deleta com Slice/Splice
if (indexOfPrato !== -1) {
  // ATENÇÃO: .splice() é destrutivo. Modifica o array 'pratos' na hora.
  const itemRemovido = pratos.splice(indexOfPrato, 1, "Sushi"); // Subsitui o Bife por Sushi
  console.log(`Prato removido pelo Chef: ${itemRemovido}. Substituído por Sushi.`);
  console.log("Menu atualizado:", pratos);
}

export {};
