/**
 * ArreyMap.ts
 * Demonstra as diferenças analíticas entre o uso de Array primitivo e o objeto Map
 * em cenários de agrupamento e contagem, focando no ganho de Performance (Big O).
 */

import { nomes, nomesObjetos, numerosObjetos } from "./listaArrey.js";

// =========================================================================
// 1. Abordagem Quadrática O(N^2) vs Abordagem Linear O(N) para Duplicatas
// =========================================================================

/**
 * Filter puro para achar nomes duplicados.
 * Time Complexity: O(N^2) porque filter percorre O(N) e indexOf percorre a string O(N).
 * Não escalável para listas com milhões de registros.
 */
const acharDuplicatasQuadratico = () => {
  return nomes.filter((nome, index) => nomes.indexOf(nome) !== index);
};
console.log("Duplicatas O(N^2):", acharDuplicatasQuadratico());

/**
 * Uso de Map como Hash Table/Dicionário para contabilizar ocorrências.
 * Time Complexity da inserção e busca num Map: O(1) na média.
 * Time Complexity global: O(N) porque passamos no array 1 vez só.
 */
const criarTabelaDeFrequencia = () => {
  const mapaDeFrequencia = new Map<string, number>();

  for (const nome of nomes) {
    // Se existir, incrementa. Se não, começa no 1.
    const contagemAtual = mapaDeFrequencia.get(nome) || 0;
    mapaDeFrequencia.set(nome, contagemAtual + 1);
  }
  return mapaDeFrequencia;
};

const nomesDuplicadosMap = criarTabelaDeFrequencia();
console.log("\nDicionário em memória O(N): ", nomesDuplicadosMap);

// =========================================================================
// 2. Buscas e Verificações em Hash (Tempo Constante)
// =========================================================================

/**
 * Funções utilitárias que aproveitam a indexação eficiente (hash) do Map
 * para buscar se o nome existe e quantas vezes sem precisar iterar a lista.
 */
const acharNome = (nome: string): string => {
  return nomesDuplicadosMap.has(nome) 
    ? `✅ O nome '${nome}' já foi indexado.` 
    : `❌ O nome '${nome}' não consta na tabela de hash.`;
};

const contarNome = (nome: string): string => {
  const contagem = nomesDuplicadosMap.get(nome);
  return contagem 
    ? `📊 O nome '${nome}' aparece ${contagem} vez(es).` 
    : `📊 O nome '${nome}' está zerado.`;
};

console.log(acharNome("Ana"));
console.log(contarNome("Ana"));

// =========================================================================
// 3. Data Mocking & Data Aggregation (Relational Map)
// =========================================================================

/**
 * Exemplo prático de agrupamento simulando tabelas relacionais de Banco de Dados.
 * Cria-se um Hash Map temporário usando o ID como chave (Indexação de BD simulada),
 * e se mapeia os usuários para embutir os dados financeiros.
 */

// 1. Cria a Tabela Hash Numérica indexada por ID (O(N) operations)
const tabelaFinanceira = new Map(numerosObjetos.map(obj => [obj.id, obj]));

// 2. Aplica um JOIN "Left Join" local utilizando map e a tabela hash
// Time Complexity global da operação junta: O(Nx + Ny) vs Array.find que seria O(Nx*Ny)
const relatorioUnificado = nomesObjetos.map(itemNome => {
  const itemFinanceiro = tabelaFinanceira.get(itemNome.id);
  
  return {
    ...itemNome,
    valor: itemFinanceiro?.valor || 0 // Elvis operator (?.) e fallback
  };
});

console.log("\n--- Relatório Unificado Hash Join (Head: 5 primeiros) ---"); 
console.table(relatorioUnificado.slice(0, 5)); // Console Table exibe melhor Arrays de Objetos