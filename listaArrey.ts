/**
 * listaArrey.ts
 * Repositório central de dados (Mocks).
 * Utilização de Tipagem Estrita (Interfaces) para garantir a consistência do contrato de dados.
 */

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

export interface Financeiro {
  id: number;
  valor: number;
}

// Retornando a lista de nomes puros (restaurada para uso nos cálculos de complexidade O(N))
export const nomes: string[] = [
  "Ana", "Carlos", "Alice", "Beatriz", "Ana", 
  "Daniela", "Alice", "Eduardo", "Beatriz", "Ana", 
  "Gabriel", "Helena", "Alice", "Igor", "Julia"
];

export const nomesObjetos: Pessoa[] = [
  { nome: "Ana", idade: 20, id: 1 },
  { nome: "Carlos", idade: 25, id: 2 },
  { nome: "Alice", idade: 30, id: 3 },
  { nome: "Beatriz", idade: 22, id: 4 },
  { nome: "Ana", idade: 20, id: 5 },
  { nome: "Daniela", idade: 28, id: 6 },
  { nome: "Alice", idade: 30, id: 7 },
  { nome: "Eduardo", idade: 35, id: 8 },
  { nome: "Beatriz", idade: 22, id: 9 },
  { nome: "Ana", idade: 20, id: 10 },
  { nome: "Gabriel", idade: 19, id: 11 },
  { nome: "Helena", idade: 24, id: 12 },
  { nome: "Alice", idade: 30, id: 13 },
  { nome: "Igor", idade: 27, id: 14 },
  { nome: "Julia", idade: 21, id: 15 }
];

export const numerosObjetos: Financeiro[] = [
  { valor: 45, id: 1 },
  { valor: 12, id: 2 },
  { valor: 89, id: 3 },
  { valor: 34, id: 4 },
  { valor: 45, id: 5 },
  { valor: 67, id: 6 },
  { valor: 12, id: 7 },
  { valor: 90, id: 8 },
  { valor: 11, id: 9 },
  { valor: 45, id: 10 },
  { valor: 78, id: 11 },
  { valor: 33, id: 12 },
  { valor: 21, id: 13 },
  { valor: 56, id: 14 },
  { valor: 89, id: 15 }
];