//manupulando o DOM

const display = document.getElementById("resultado") as HTMLElement; //selecionando o elemento com o id resultado
const botoes = document.querySelectorAll<HTMLButtonElement>("button"); //selecionando botoes com a classe button

let expressao = ""; //variável que vai armazenar a expressão matemática

botoes.forEach((botao) => { //percorrendo o array de botoes
  botao.addEventListener("click", () => { //adicionando um evento de clique em cada botao
    const valor = botao.innerText; //pegando o valor do botao
    if (valor === "C") { //se o valor for C
      expressao = ""; //limpando a expressão
      display.innerText = "0"; //limpando o display
    } 
    else if (valor === "=") { //se o valor for =
      try { //tentando calcular a expressão
        const resultado = eval(expressao); //calculando a expressão
        display.innerText = resultado; //mostrando o resultado
        expressao = resultado.toString(); //convertendo o resultado para string
      } catch { //se der erro
        display.innerText = "Erro"; //mostrando erro
        expressao = ""; //limpando a expressão
      }
    } 
    else {
      expressao += valor; //adicionando o valor da expressão
      display.innerText = expressao; //mostrando a expressão
    }
  });
});

/* O InnerText usando com a variavel
Se usado apos o = ele pega o valor
Se usado antes, ele altera o valor, antes era "0" e depois "Erro"
 
const valor = botao.innerText; //pegando o valor do botao
display.innerText = "Erro"; //mostrando erro

 */

export {};
