/**
 * Encontra o item mais frequente em um array.
 * @param {Array} list - Lista de itens (strings ou números)
 * @returns {Object} Um objeto contendo o item e a quantidade, ou null se a lista estiver vazia.
 */
function findMostFrequent(list) {
  // 1. Validação: Proteção contra erros básicos
  if (!list || list.length === 0) return null;

  // 2. Normalização e Contagem (Otimizado)
  // Usamos Map em vez de Objeto para maior performance em grandes listas
  const frequencyMap = new Map();

  for (const item of list) {
    // Normalizamos para evitar erros de letra maiúscula/minúscula (opcional)
    const normalizedItem = typeof item === "string" ? item.trim() : item;
    
    const count = frequencyMap.get(normalizedItem) || 0;
    frequencyMap.set(normalizedItem, count + 1);
  }

  // 3. Busca do Campeão
  let winner = { item: null, count: 0 };

  for (const [item, count] of frequencyMap.entries()) {
    if (count > winner.count) {
      winner = { item, count };
    }
  }

  return winner;
}

// Exemplos de uso profissional:
const nomes = ["Ana", "ana", "Carlos", "Alice", "Alice", "Daniela"];
const resultado = findMostFrequent(nomes);

if (resultado) {
  console.log(`O campeão é: ${resultado.item} com ${resultado.count} aparições.`);
} else {
  console.log("A lista está vazia.");
}
