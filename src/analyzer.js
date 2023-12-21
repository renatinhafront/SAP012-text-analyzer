const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e removi os espaços do final do texto usando a funçao trim
    const wordTrim = text.trim();
    // Criei uma variavel do tipo let e usei o split(lista) que quebra o texto com o separador e cria uma lista de palavras
    const lista = wordTrim.split(' ');

    //Criei uma lista vazia para armazenar as palavras maiores que um caracter
    const wordList = []
    //for é o looping / para capturar somente palavras do texto
    for (let i = 0; i < lista.length; i++) {
      //if SE o valor aramazenado for maior que um é considerado uma palavra
      if (lista[i].length > 1) {
        //if para verificar se há alguma palavra armazenada na lista no indice 0
        if (wordList.length === 0) {
          //adicionando a palavra no indice 0 da lista
          wordList[0] = lista[i]
          //else caso contrario
        } else {
          //adiciono no ultimo bloco disponivel da lista a palavra
          wordList[wordList.length] = lista[i]
        }
      }
    }
    // Retornei o tamanho da lista usando length(tamanho da lista)
    return wordList.length
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e atribui o valor do tamanho do texto atraves do length e converti (parseInt) o valor de string para inteiro
    const countText = parseInt(text.length)
    //retorna a quantidade de caracteres
    return countText
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    //no regex usei o ^ como negação tudo que não for caracteres especiais e espaços ele remove
    const characterExcluido = text.replace(/[^0-9a-zA-Z]/gim, '');
    //retorna a quantidade de caracteres excluindo espacos e pontos na lista
    return characterExcluido.length
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e removi os espaços do final do texto usando a funçao trim
    const wordTrim = text.trim();
    // Criei uma variavel do tipo let e usei o split que quebra o texto com o separador e cria uma lista de palavras
    const split = wordTrim.split(' ');
    // criei uma variavel com o valor de 0, que vai armazenar a média
    let totalCaracteres = 0;
    //FOR para somar a quantidade de caracteres digitados, i=indice da lista, splite.length=retorna o tmanho da lista
    for (let i = 0; i < split.length; i++) {
      //totalcaracteres é do tipo inteiro(numero) + o tamanho da lista
      totalCaracteres = totalCaracteres + split[i].length;
    }
    //Criei uma constante media = numero da lista dividido pelo tamanho da lista
    const media = totalCaracteres / split.length;
    //converte em decimal com dois digitos e retorna
    return parseFloat(media.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    // replace substitui o caracter de acordo com o regex informado(extrai somente numeros e pontos).
    const numberCount = text.replace(/\D/gim, '');
    //retorna a quantidade de numeros digitados
    return numberCount.length
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberCount = text.replace(/\D/gim, '');
    //
    const split = numberCount.split('');
    //criei  uma variavel total com o valor de 0 que vai armazenar o valor total da lista
    let total = 0;
    //FOR para somar a quantidade de caracteres digitados, i=indice da lista, splite.length=retorna o tmanho da lista
    for (let i = 0; i < split.length; i++) {
      //criei uma constante para armazenar o tamanho da palavra
      const valor = split[i];
      //parseFloat ele converte string(conjunto de caracteres) para numeros decimais.
      total = total + parseFloat(valor);
    }
    //retorno total da tela
    return total;
  },
};

export default analyzer;
