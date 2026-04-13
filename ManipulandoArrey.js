
import { nomes, numeros, nomesObjetos, numerosObjetos } from "./listaArrey.js";

/*
//Filter para achar nomes duplicados (Modo Simples)

const nomesDuplicados = nomes.filter((nome, index) => nomes.indexOf(nome) !== index);
console.log(nomesDuplicados);

//Usando Map para achar nomes duplicados (Modo mais robusto)

const nomesDuplicadosMap = new Map();

for (const nome of nomes) {
  if (nomesDuplicadosMap.has(nome)) {
    nomesDuplicadosMap.set(nome, nomesDuplicadosMap.get(nome) + 1);
  } else {
    nomesDuplicadosMap.set(nome, 1);
  }
}

console.log(nomesDuplicadosMap);

// Verificar se um nome existe no Map
const acharNome = (nome) => {
  if (nomesDuplicadosMap.has(nome)) {
    return `O nome ${nome} existe no Map`;
  } else {
    return `O nome ${nome} não existe no Map`;
  }
}

console.log(acharNome("Ana"));

// Verificar quantas vezes um nome existe no Map
const contarNome = (nome) => {
  if (nomesDuplicadosMap.has(nome)) {
    return `O nome ${nome} existe no Map ${nomesDuplicadosMap.get(nome)} vezes`;
  } else {
    return `O nome ${nome} não existe no Map`;
  }
}

console.log(contarNome("Ana")); */

// Juntando Map nomesObjetos e numerosObjetos

// 1. Criar um Map com os números
const mapaNumeros = new Map(numerosObjetos.map(obj => [obj.id, obj]));

// 2. Criar a lista unificada mapeando os nomes e buscando o valor correspondente
const listaUnificada = nomesObjetos.map(itemNome => { // itemNome é cada objeto do array nomesObjetos
  const itemNumero = mapaNumeros.get(itemNome.id); // itemNumero é o objeto correspondente no mapaNumeros
  
  return {
    ...itemNome, // Copia todas as propriedades de itemNome
    valor: itemNumero ? itemNumero.valor : 0 // Adiciona a propriedade valor se existir, senão 0
  };
});

console.log("--- Lista Unificada (Nome + Valor pelo ID) ---"); 
console.log(listaUnificada.slice(0, 5)); //Mostrar os 5 primeiros resultados





  