//Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і 
//виводить значення кольору в span.color.
//Для генерування випадкового кольору 
//використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
var bodyRef   = document.querySelector("body");
var divWidget = document.querySelector(".widget");
var spanRef   = divWidget.querySelector(".color");
var btnRef = divWidget.querySelector(".change-color");

const changeColor =()=>{
  var newColor = getRandomHexColor();
  console.log(newColor);
  bodyRef.style.cssText =`background-color:${newColor};`;
  spanRef.textContent = newColor;
};

btnRef.addEventListener('click',changeColor);