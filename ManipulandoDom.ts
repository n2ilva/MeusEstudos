/**
 * ManipulandoDom.ts
 * Demonstração de interação com o DOM (Document Object Model) via TypeScript.
 * Foca em tipagem estrita de elementos web e cuidados de Segurança/Performance.
 */

// Cache de Elementos DOM: 
// Selecionar os elementos fora do Event Listener evita o custo (overhead)
// de pesquisar a árvore do DOM (DOM traverse) a cada clique.
const display = document.getElementById("resultado") as HTMLElement; 
const botoes = document.querySelectorAll<HTMLButtonElement>("button"); 

// Estado local da calculadora.
// Idealmente isso viveria dentro de uma Classe, Closure ou State Manager (em React/Angular)
// para não poluir o escopo global do módulo.
let expressao = ""; 

/**
 * Registra os ouvintes (listeners) em todos os botões.
 * OBS Sênior: Em listas imensas de botões, uma tática melhor é usar "Event Delegation", 
 * escutando o clique no 'container pai' e filtrando pelo `event.target`.
 */
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.innerText;

    if (valor === "C") {
      expressao = ""; 
      display.innerText = "0"; // Aciona o reflow/repaint do navegador APENAS quando muda de fato
    } 
    else if (valor === "=") {
      try {
        // [AVISO DE SEGURANÇA SÊNIOR]: 
        // Nunca use 'eval' direto em sistemas reais onde o input venha do usuário. 
        // Isso abre portas para vulnerabilidades de XSS (Cross-Site Scripting).
        // Aqui usamos um ambiente isolado via Function de forma puramente acadêmica.
        
        // Forma (um pouco mais segura) acadêmica para calcular matemática via string:
        const construtorMatematico = new Function('return ' + expressao);
        const resultado = construtorMatematico(); 

        // Garante que não mostramos 'undefined' na tela
        const resultadoFinal = resultado !== undefined ? resultado.toString() : "0";
        
        display.innerText = resultadoFinal; 
        expressao = resultadoFinal; 
      } catch (error) {
        display.innerText = "Erro Matemático"; 
        expressao = ""; 
        console.error("Expressão Inválida:", error);
      }
    } 
    else {
      expressao += valor; 
      display.innerText = expressao; 
    }
  });
});

export {};
