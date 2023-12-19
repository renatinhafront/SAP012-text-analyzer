import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//querySelector = Busca o elemento no HTML atraves do atributo data-testid

// Contador de palavras
let wordCount = document.querySelector('[data-testid="word-count"]');
let wordCountText = wordCount.textContent

// Contador de caracteres
let characterCount = document.querySelector('[data-testid="character-count"]');
let characterCountText = characterCount.textContent

//Contador excluindo caracteres
let characterExcluido = document.querySelector('[data-testid="character-no-spaces-count"]');
let characterExcluidoText = characterExcluido.textContent

// Contador de numeros
let numberCount = document.querySelector('[data-testid="number-count"]');
let numberCountText = numberCount.textContent

//Soma total de numeros
let somaCount = document.querySelector('[data-testid="number-sum"]');
let somaCountText = somaCount.textContent


//Comprimento medio das palavras
let comprimentoCount = document.querySelector('[data-testid="word-length-average"]');
let comprimentoCountText = comprimentoCount.textContent

//Retorna o primeiro elemento dentro do documento 
let textArea = document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('keyup', function() {
   
   wordCount.textContent = wordCountText + analyzer.getWordCount(textArea.value);
   characterCount.textContent = characterCountText + analyzer.getCharacterCount(textArea.value);
   numberCount.textContent = numberCountText + analyzer.getNumberCount(textArea.value);
   characterExcluido.textContent = characterExcluidoText + analyzer.getCharacterCountExcludingSpaces(textArea.value);
   somaCount.textContent = somaCountText + analyzer.getNumberSum(textArea.value);
   comprimentoCount.textContent = comprimentoCountText + analyzer.getAverageWordLength(textArea.value);

});   

//Retorna a referência do elemento através do seu ID.
let button = document.getElementById("reset-button");
button.addEventListener('click', function() {
    textArea.value = "";
}); 


function countWord() {
  
    // Get the input text value
    let words = document
        .getElementById("user-input").value;
    
}
