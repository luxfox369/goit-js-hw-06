//Напиши скрипт створення і очищення колекції елементів. 
//Користувач вводить кількість елементів в input і 
//натискає кнопку Створити, після чого рендериться колекція.
//  Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр 
//- число. Функція створює стільки <div>, 
//скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим 
//від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  box: document.querySelector("#boxes"),
  amount: document.querySelector("input"),
  createBtn:document.querySelector("button[data-create]"),
  destroyBtn:document.querySelector("button[data-destroy]")
}
const createBoxes = (amount) => {
  amount = refs.amount.value;
  let start = 30;
  let markUp = '';
 
  for (let i = 1; i <= amount; i += 1,start += 10) {
      markUp += `<div style = 'padding :${start-5}px;width:${start}px; height:${start}px;background-color:${getRandomHexColor()};'></div>`;
     // start += 10;
    }
    console.log(markUp);
  refs.box.innerHTML = markUp;
  refs.box.style = "display:flex;flex-direction:column;gap:5px;align-items:center";
 // refs.amount.value.reset();
  
}

  refs.createBtn.addEventListener("click", createBoxes);

refs.destroyBtn.addEventListener("click", () =>{ refs.box.innerHTML = "";});