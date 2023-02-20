// Лічильник складається зі спану і кнопок, які по кліку 
//повинні збільшувати і зменшувати його значення на одиницю.

//Створи змінну counterValue, в якій буде зберігатися 
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const refs = {
     value :       document.querySelector('#value'),
     buttonMinus : document.querySelector('[data-action="decrement"]'),
     buttonPlus :     document.querySelector('[data-action="increment"]'), 
}

const onValueMinus  = () => {
    counterValue -=1;
    refs.value.textContent = counterValue;
};

const onValuePlus = () =>{
    counterValue +=1;
    refs.value.textContent = counterValue;
};

refs.buttonMinus.addEventListener("click",onValueMinus);
refs.buttonPlus.addEventListener("click",onValuePlus);