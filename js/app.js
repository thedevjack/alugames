let jogosAlugados = 0;

  function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
  }


function alterarStatus(id) {
  // -- variavel para pegar o valor referente ao Id
  let gameClicado = document.getElementById(`game-${id}`);

  // -- variavel para pegar a imagem referente ao Id
  let imagem = gameClicado.querySelector(".dashboard__item__img");

  // -- variavel responsavel para quando clicar no botao alterar o valor(nome) ALUGAR/DEVOLVER
  let botao = gameClicado.querySelector(".dashboard__item__button");

  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  // -- variavel para testar se esta retornando o nome
  //let nomeJogo = gameClicado.querySelector('.dashboard__item__name')

  // -- imprimir o nome do jogo quando clicado, textContent para pegar o valor do texto
  //alert(nomeJogo.textContent);

  

  // -- condicional que verifica se contem alguma classe dentro do elemento HTML
  // classList = devolve a lista de classes que tem dentro do elemento HTML
  // Adiciona uma confirmação antes de devolver o jogo
  if (imagem.classList.contains("dashboard__item__img--rented")) {
    // Adiciona uma confirmação antes de devolver o jogo
    if (
      confirm(
        `Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`
      )
    ) {
      // -- remove classe do elemento
      imagem.classList.remove("dashboard__item__img--rented");
      // -- remove o estilo de return do botao
      botao.classList.remove("dashboard__item__button--return");
      // -- inserir o valor Alugar caso o item esteja disponivel;
      botao.textContent = "Alugar";
      jogosAlugados--;
    }
  } else {
    // -- add classe ao elemento
    imagem.classList.add("dashboard__item__img--rented");
    // -- inserir o valor Devolver caso o item esteja indisponivel;
    botao.textContent = "Devolver";
    // -- insere o estilo de return do botao
    imagem.classList.add("dashboard__item__button--return");
    jogosAlugados++;
  }
  contarEExibirJogosAlugados();

  // Inicializa a contagem considerando que os jogos já começam alugados
  document.addEventListener("DOMContentLoaded", () => {
    jogosAlugados = document.querySelectorAll(
      ".dashboard__item__img--rented"
    ).length;
    contarEExibirJogosAlugados();
  });
}
