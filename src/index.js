import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//querySelector = Busca o elemento no HTML atraves do atributo data-testid

// Contador de palavras
const wordCount = document.querySelector('[data-testid="word-count"]');
const wordCountText = wordCount.textContent

// Contador de caracteres
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterCountText = characterCount.textContent

//Contador excluindo caracteres
const characterExcluido = document.querySelector('[data-testid="character-no-spaces-count"]');
const characterExcluidoText = characterExcluido.textContent

// Contador de numeros
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberCountText = numberCount.textContent

//Soma total de numeros
const somaCount = document.querySelector('[data-testid="number-sum"]');
const somaCountText = somaCount.textContent


//Media das palavras
const mediaCount = document.querySelector('[data-testid="word-length-average"]');
const mediaCountText = mediaCount.textContent

//Retorna o primeiro elemento dentro do documento 
const textArea = document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', function () {

  wordCount.textContent = wordCountText + analyzer.getWordCount(textArea.value);
  characterCount.textContent = characterCountText + analyzer.getCharacterCount(textArea.value);
  numberCount.textContent = numberCountText + analyzer.getNumberCount(textArea.value);
  characterExcluido.textContent = characterExcluidoText + analyzer.getCharacterCountExcludingSpaces(textArea.value);
  somaCount.textContent = somaCountText + analyzer.getNumberSum(textArea.value);
  mediaCount.textContent = mediaCountText + analyzer.getAverageWordLength(textArea.value);

});

//Retorna a referência do elemento através do seu ID.
const button = document.getElementById("reset-button");
button.addEventListener('click', function () {
  textArea.value = "";
});
