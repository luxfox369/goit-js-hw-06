const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Напиши скрипт, який для кожного елемента масиву ingredients:
//Створить окремий елемент <li>. Обов'язково використовуй 
//метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listRef = document.querySelector('#ingredients');
let itemListRef = [];
 itemListRef = ingredients.map((item,index) => {
  itemListRef[index]= document.createElement('li');
  itemListRef[index].textContent = item;
  itemListRef[index].classList.add('item');
   return itemListRef[index];
 }
 
);
//console.log(itemListRef);

listRef.append(...itemListRef);