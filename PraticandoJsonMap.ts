/* 
  EXERCÍCIO: Unificando Dados de JSON com Map
  
  Objetivo: 
  1. Ler o arquivo 'dados.json'.
  2. Criar um Map de salários usando o ID como chave.
  3. Usar o método .map() no array de usuários para criar uma lista final 
     que contenha o nome e o salário de cada um.
*/

// No Node.js com ES Modules (type: module), usamos import assim:
import dados from './dados.json' with { type: 'json' };

// 1. Criar o Map para busca rápida de salários
// Chave: ID, Valor: O valor do salário
const mapaSalarios = new Map(
  dados.salarios.map(s => [s.id, s.valor]) // s é cada objeto do array salarios
);

// 2. Unificar os dados usando o método .map() do Array
const usuariosComSalarios = dados.usuarios.map(usuario => { // usuario é cada objeto do array usuarios
  return {
    id: usuario.id, // Copia o id do objeto usuario
    nome: usuario.nome, // Copia o nome do objeto usuario
    salario: mapaSalarios.get(usuario.id) || 0 // Busca no Map pelo ID e retorna o valor do salário se existir, senão 0
  };
});

// 3. Exibir o resultado
console.log("--- Lista de Usuários e Salários ---");
console.table(usuariosComSalarios);

// Desafio: Tente filtrar apenas quem ganha mais de 4000 usando .filter() depois do .map()
const acimaDe4000 = usuariosComSalarios.filter(u => u.salario > 4000); // u é cada objeto do array usuariosComSalarios
console.log("\n--- Ganham mais de 4000 ---");
console.table(acimaDe4000);
