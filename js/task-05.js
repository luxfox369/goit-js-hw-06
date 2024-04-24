//Напиши скрипт, який під час набору тексту 
//в інпуті input#name-input (подія input), підставляє
// його поточне значення в span#name-output. 
//Якщо інпут порожній, у спані повинен відображатися 
//рядок "Anonymous".

const refs = {
    inputName: document.querySelector('#name-input'),
    outputName:document.querySelector('#name-output')
}
refs.inputName.addEventListener("input", (evt) => {
     refs.outputName.textContent = evt.currentTarget.value;
       if (!evt.currentTarget.value) refs.outputName.textontent = "Anonymous";
});