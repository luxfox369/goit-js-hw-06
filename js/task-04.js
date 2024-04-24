// Лічильник складається зі спану і кнопок, які по кліку 
//повинні збільшувати і зменшувати його значення на одиницю.

//Створи змінну counterValue, в якій буде зберігатися 
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const refs = {
    minusBut: document.querySelector('[data-action="decrement"]'),
    plusBut:  document.querySelector('[data-action="increment"]'),
    val: document.querySelector("#value"),
}

const onMinus = () => {
    counterValue -= 1;
    refs.val.textContent = counterValue;
};
const onPlus = () => {
    counterValue += 1;
    refs.val.textContent = counterValue;
};


refs.minusBut.addEventListener("click",onMinus);
refs.plusBut.addEventListener("click",onPlus);

