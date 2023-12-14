import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//console log

//Retorna o primeiro elemento dentro do documento 
let element = document.querySelector('textarea[name="user-input"]');
console.log(element.value);

//Retorna a referência do elemento através do seu ID.
const button = document.getElementById("reset-button");
console.log(reset-button)
button.onclick = function(){
    alert(element.value);
}

