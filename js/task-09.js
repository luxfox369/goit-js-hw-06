//Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і 
//виводить значення кольору в span.color.
//Для генерування випадкового кольору 
//використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.body,
  divWidget : document.querySelector(".widget"),
  span : document.querySelector(".color"),
  btn  : document.querySelector(".change-color")
};
const changeColor =()=>{
  let newColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${newColor}`;
  refs.span.textContent = newColor;
};

refs.btn.addEventListener('click',changeColor);