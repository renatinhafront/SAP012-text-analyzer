const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e removi os espaços do final do texto usando a funçao trim
    const wordTrim = text.trim();
    // Criei uma variavel do tipo let e usei o split que quebra o texto com o separador e cria uma lista de palavras
    const split = wordTrim.split(' ');
    // Retornei o tamanho da lista usando length(tamanho da lista)
    return split.length
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e atribui o valor do tamanho do texto atraves do length e converti (parseInt) o valor de string para inteiro
    const countText = parseInt(text.length)
    return countText
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    //no regex usei o ^ como negação tudo que não for caracteres especiais e espaços ele remove
    const characterExcluido = text.replace(/[^0-9a-zA-Z]/gim, '');
    return characterExcluido.length
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e removi os espaços do final do texto usando a funçao trim
    const wordTrim = text.trim();
    // Criei uma variavel do tipo let e usei o split que quebra o texto com o separador e cria uma lista de palavras
    const split = wordTrim.split(' ');
    // criei u
    let media = 0;

    for (let i = 0; i < split.length; i++) {
      media = media + split[i].length;
    }

    const resultado = media / split.length;
    return resultado;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    // replace substitui o caracter de acordo com o regex informado.  
    const numberCount = text.replace(/\D|./gim, '');
    return numberCount.length
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberCount = text.replace(/\D|./gim, '');
    //
    const split = numberCount.split('');
    let total = 0;
    for (let i = 0; i < split.length; i++) {
      const valor = split[i];
      total = total + parseFloat(valor);
    }
    return total;
  },
};

export default analyzer;
