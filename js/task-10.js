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

const refs ={
     inputAmount:document.querySelector('input'),
     btnCreate : document.querySelector('[data-create]'),
     btnDestroy: document.querySelector('[data-destroy]'),
     divBoxes:   document.querySelector('#boxes'),
};

function createBoxes() {
  let amount = Number(refs.inputAmount.value);
  const start = 30;
  const step = 10;
  let markup = '';

   for (let i = 0; i < amount; i += 1) {
     //let boxColor = getRandomHexColor();
     markup += `<div style = 'width:${start + step * i}px;height:${start + step * i}px;background-color:${getRandomHexColor()};'></div>`;
   }
   refs.divBoxes.innerHTML = markup;
   refs.inputAmount.value = 0;
  return markup;
 }
const onDivClear = () => refs.divBoxes.innerHTML = "";

refs.divBoxes.style.cssText = "margin:50px;align-items:center;display:flex;gap:10px;flex-wrap:wrap";

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click',onDivClear);