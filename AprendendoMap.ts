/**
 * AprendendoMap.ts
 * 
 * O Objeto Map no JavaScript/TypeScript foi introduzido no ES6+ para solucionar as deficiências 
 * do Objeto padrão ({}) quando usado como Dicionário (Hash Table).
 * 
 * Vantagens do Map Sênior:
 * 1. Chaves podem ser de QUALQUER tipo (Objetos, Funções, Primitivos), não só Strings.
 * 2. Garante a ORDEM de inserção na hora da iteração (Diferente do `{}`).
 * 3. Possui a propriedade iterável nativa (`.size`), sem precisar de `Object.keys().length`.
 * 4. Altíssima performance e alocação de memória (V8 Engine) para adições e remoções frequentes (O(1)).
 */

import { numerosObjetos, nomesObjetos } from "./listaArrey.js";

// ============================================================================
// 1. Instanciação e Métodos Primitivos O(1)
// ============================================================================
const meuMapa = new Map<string, string | number | boolean>();

meuMapa.set("valor", 100); // Aloca no Heap de forma otimizada
console.log("Get valor da chave:", meuMapa.get("valor")); // O(1) lookup
console.log("A chave existe?", meuMapa.has("valor")); // O(1) verify
meuMapa.delete("valor"); // Libera para Garbage Collection

// ============================================================================
// 2. Mapas Relacionais (Simulando uma Engine em Memória)
// ============================================================================

// Aqui utilizamos uma tupla `[chave, valor]` para injetar dados no construtor do Map.
const mapaDeNumeros = new Map(
  numerosObjetos.map(item => [item.id, item] as const)
);

// Consulta direta de forma extremamente veloz e segura
console.log("Busca rápida (Id 1):", mapaDeNumeros.get(1)); 

// ============================================================================
// 3. Estratégia Avançada de Merge (Inner/Hash Join)
// ============================================================================
const mapaDeNomes = new Map(
  nomesObjetos.map(item => [item.id, item] as const)
);

/**
 * Por que não podemos usar `new Map([...map1, ...map2])`?
 * Se os dois Maps compartilharem as mesmas chaves (Collision), a sintaxe do Spread (...) 
 * simplesmente aceita o último que entrou para sobrescrever (overwrite) e apaga o anterior.
 * 
 * A estratégia sênior para isso é iterar um deles e compor os objetos internamente.
 */
const mapaUnido = new Map();

for (const [id, dadosDeNome] of mapaDeNomes) {
  // Padrão de Data Aggregation
  const dadosDeNumero = mapaDeNumeros.get(id);

  // Deep clone indireto de propriedades do 1º nível usando Spread (...)
  // Evitando a mutação da fonte original dos dados.
  mapaUnido.set(id, {
    ...dadosDeNome,  
    ...dadosDeNumero 
  });
}

console.log("Head (ID 1) da Tabela Agregada:", mapaUnido.get(1));




 


