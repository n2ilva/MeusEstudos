/* 
  O QUE É O OBJETO MAP?
  Ele é uma coleção de pares chave-valor. Parece um objeto {}, mas é mais poderoso.
*/

const meuMapa = new Map();

// 1.(.set adicionar) (.get buscar) (.has verificar) (.delete remover) (.size tamanho)
meuMapa.set("id", 1);
meuMapa.set("nome", "Antigravity");
meuMapa.set("ativo", true);

// --- Como Unificar Mapas ---

// Mapa de dados básicos
const dadosBasicos = new Map([
  ["user_1", { nome: "Natanael", idade: 25 }],
  ["user_2", { nome: "Ana", idade: 30 }]
]);

// Mapa de permissões
const dadosPermissoes = new Map([
  ["user_1", "Gerente"],
  ["user_2", "Editor"]
]);

// Função que sincroniza e retorna um objeto completo
function getUsuarioCompleto(id) {
  const basico = dadosBasicos.get(id);
  const permissao = dadosPermissoes.get(id);

  if (!basico) return "Usuário não encontrado";

  // Retorna um objeto unificado
  return {
    ...basico,
    permissao: permissao || "Visitante" // Se não tiver permissão, assume Visitante
  };
}

console.log("\nUsuário Unificado:");
console.log(getUsuarioCompleto("user_1"));
console.log(getUsuarioCompleto("user_2"));
