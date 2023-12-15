//import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//váriavel pra usar dentro do bloco

//Retorna o primeiro elemento dentro do documento 
const element = document.querySelector('textarea[name="user-input"]');
element.addEventListener('keyup', function() {
    element.value = "";
}); 


//Retorna a referência do elemento através do seu ID.
let button = document.getElementById("reset-button");
button.addEventListener('click', function() {
    element.value = "";
}); 

