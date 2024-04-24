const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Напиши скрипт, який для кожного елемента масиву ingredients:
//Створить окремий елемент <li>. Обов'язково використовуй
//метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const list = document.querySelector('#ingredients');
const items = ingredients.map((item) => {
  const element = document.createElement('li');
  element.textContent= item ;
  element.classList.add('item');
  return element;
})
console.log(items);
list.append(...items);
console.log(list.innerHTML);