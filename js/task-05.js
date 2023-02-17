//Напиши скрипт, який під час набору тексту 
//в інпуті input#name-input (подія input), підставляє
// його поточне значення в span#name-output. 
//Якщо інпут порожній, у спані повинен відображатися 
//рядок "Anonymous".

const inputNode = document.querySelector('#name-input');
const outputNode= document.querySelector('#name-output');
//console.log(inputNode);
//console.log(outputNode);
inputNode.addEventListener('input',(event) =>{
    console.log(event.currentTarget.value);
    outputNode.textContent = event.currentTarget.value;
    if (event.currentTarget.value ==="")outputNode.textContent = 'Anonymous';
});
//value в input це введений контент/ а в події event.currentTarget.value