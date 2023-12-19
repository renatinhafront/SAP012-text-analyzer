const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
   
    // Criei uma variavel do tipo let e removi os espaços do final do texto usando a funçao trim
    let wordTrim = text.trim();
    // Criei uma variavel do tipo let e usei o split que quebra o texto com o separador e cria uma lista de palavras
    let split = wordTrim.split(' ');
    // Retornei o tamanho da lista usando length
    return split.length
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    // Criei uma variavel do tipo let e atribui o valor do tamanho do texto atraves do length e converti (parseInt) o valor de string para inteiro
    let countText = parseInt(text.length)
    return countText
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // replace substitui o caracter de acordo com o regex informado.  
    let numberCount = text.replace(/\D/gim, '');
    return numberCount.length
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
