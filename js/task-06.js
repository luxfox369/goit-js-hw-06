//Напиши скрипт, який під час втрати фокусу на інпуті
//(подія blur), перевіряє його вміст щодо правильної
//кількості введених символів.
//Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів,
//то border інпуту стає зеленим,
//якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи
//valid і invalid, які ми вже додали у вихідні файли
//завдання.

const refs = {
    input : document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputCheckLenght);


function onInputCheckLenght(event) {
    refs.input.classList.add('invalid');
    if (event.currentTarget.value.trim().length === Number(refs.input.dataset.length)) 
        refs.input.classList.replace('invalid', 'valid');
    
  
};
