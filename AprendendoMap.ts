/* 
  O QUE É O OBJETO MAP?
  Ele é uma coleção de pares chave-valor. Parece um objeto {}, mas é mais poderoso.
*/

import { numerosObjetos, nomesObjetos } from "./listaArrey.js";

// numerosObjetos é um Array (uma lista).
// Arrays não possuem os métodos .set(), .get(), .has() ou .delete(). 
// Esses métodos pertencem exclusivamente ao objeto "Map".

// Para usar esses métodos, precisamos criar um Map:
const meuMapa = new Map();

meuMapa.set("valor", 100); // Adiciona um par chave-valor

console.log(meuMapa.get("valor")); // Busca o valor da chave "valor" (vai retornar 100)

console.log(meuMapa.has("valor")); // Verifica se a chave existe (vai retornar true)

meuMapa.delete("valor"); // Remove a chave "valor"

// ----------------------------------------------------
// Se você quiser transformar o Array `numerosObjetos` em um Map:
// Podemos usar o "id" de cada item como a CHAVE, e o objeto inteiro como o VALOR.
const mapaDeNumeros = new Map(
  numerosObjetos.map(item => [item.id, item])
);

// Agora sim você pode usar os métodos do Map nessa nova variável:
console.log(mapaDeNumeros.get(1)); // Busca o objeto que tem o id 1
console.log(mapaDeNumeros.has(5)); // Verifica se existe alguém com id 5


// Unir dois Map

const mapaDeNomes = new Map(
  nomesObjetos.map(item => [item.id, item])
);

// Se você usar new Map([...map1, ...map2]), as chaves do map2 vão apenas 
// sobrescrever e apagar as chaves do map1 (porque ambas têm os mesmos IDs).
// Para unir o CONTEÚDO dos dois pelo ID, você deve combiná-los em um novo Map:

const mapaUnido = new Map();

for (const [id, dadosDeNome] of mapaDeNomes) {
  // Pega o objeto de número que tem o mesmo ID
  const dadosDeNumero = mapaDeNumeros.get(id);

  // Cria um novo registro juntando os dados de Nome + os dados de Número
  mapaUnido.set(id, {
    ...dadosDeNome, // Copia { nome: "Ana", idade: 20, id: 1 }
    ...dadosDeNumero // Copia { valor: 45, id: 1 } (vai sobrepor apenas o id, que é o mesmo)
  });
}

console.log("Exibindo todos juntos:", mapaUnido);
console.log("Apenas o usuário de ID 1:", mapaUnido.get(1));




 


