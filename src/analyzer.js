const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const words = text.trim().split(/\s+/);
    const filteredWords = words.filter(word => word.length > 1);
    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    const characterExcluido = text.replace(/[^0-9a-zA-Z]/gim, '');
    return characterExcluido.length
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const words = text.trim().split(/\s+/);
    const totalCharacters = words.reduce((acc, word) => acc + word.length, 0);
    const average = totalCharacters / words.length || 0;
    return parseFloat(average.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const numberCount = text.match(/\b\d+(\.\d+)?\b/g);
    return numberCount ? numberCount.length : 0;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);

    if (numerosEncontrados) {
      let total = 0;

      for (let i = 0; i < numerosEncontrados.length; i++) {
        total += Number(numerosEncontrados[i]);
      }

      return total;
    } else {
      return 0;
    }
  }
}


export default analyzer;
