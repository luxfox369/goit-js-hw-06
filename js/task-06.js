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

const inputNode = document.querySelector("#validation-input");

inputNode.addEventListener("blur", CheckLenght);

function CheckLenght(event) {
   
    if (event.currentTarget.value.length === Number(inputNode.dataset.length)) {
        inputNode.classList.add('valid');
        if (inputNode.classList.contains('invalid')) inputNode.classList.remove('invalid');
    }
       
    else {
        inputNode.classList.add('invalid');
        if (inputNode.classList.contains('valid')) inputNode.classList.remove('valid');
    }
}