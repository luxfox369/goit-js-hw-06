// Лічильник складається зі спану і кнопок, які по кліку 
//повинні збільшувати і зменшувати його значення на одиницю.

//Створи змінну counterValue, в якій буде зберігатися 
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue=0;
const valueRef = document.querySelector('#value');
const buttonMinusNode = document.querySelector('[data-action="decrement"]');
const buttonPlusNode  = document.querySelector('[data-action="increment"]');
// console.log(valueRef);
// console.log(buttonMinusNode);
// console.log(buttonPlusNode);

const decrement  = () => {
    counterValue -=1;
    valueRef.textContent = counterValue;
};

const increment = () =>{
    counterValue +=1;
    valueRef.textContent = counterValue;
};

buttonMinusNode.addEventListener("click",decrement);
buttonPlusNode.addEventListener("click",increment);