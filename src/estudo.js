const exibeMensagem = function () {
  if (true) {
    var escopoFuncao = 'Caelum';
    let escopoBloco = 'Alura';

    console.log(escopoBloco); // Alura

  }
  console.log(escopoFuncao); // Caelum
  //console.log(escopoBloco);
}
exibeMensagem();

const meuNome = function (text) {
  if (text === 'Renata')  {
    console.log('Renata');
  }else if (text === 'Pedro') {
    console.log('Pedro');
  }else {
    console.log(text)
  }
}

meuNome('Pedro');
