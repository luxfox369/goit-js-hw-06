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
    input:document.querySelector("#validation-input")
}
refs.input.addEventListener("blur", (evt) => {
    //console.log(evt.currentTarget.value.length);
    //console.log(evt.currentTarget.dataset.length);
    evt.currentTarget.classList.add("invalid");
    if (evt.currentTarget.value.trim().length === Number(evt.currentTarget.dataset.length)) {
       evt.currentTarget.classList.replace("invalid","valid");  
    }

})