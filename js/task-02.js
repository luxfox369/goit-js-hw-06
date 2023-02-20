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
const listRef = document.querySelector("#ingredients");
const itemList = ingredients.map((item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  return element;
});
console.log(itemList);
listRef.append(...itemList);
console.log(listRef.innerHTML);