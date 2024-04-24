//Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і 
//виводить значення кольору в span.color.
//Для генерування випадкового кольору 
//використовуй функцію getRandomHexColor.



const refs = {
  body: document.body,
  span:document.querySelector(".color"),
  btn: document.querySelector(".change-color")
}
const OnClick = (evt) => {
  let randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${randomColor}`;
  refs.span.textContent = randomColor;
}

refs.btn.addEventListener("click", OnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

