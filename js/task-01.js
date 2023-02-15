//Напиши скрипт, який:
//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента 
//(тегу <h2>) і кількість елементів в категорії (усіх <li>,
// вкладених в нього).
const listRef = document.querySelector('#categories');
console.log("Number of categories: ",listRef.children.length);
console.log('');
const itemsAllCategoriesRef = listRef.children;

// for(let i = 0;i < itemsAllCategoriesRef.length;i+=1){
//   console.log('Category: ', itemsAllCategoriesRef[i].querySelector('h2').textContent);
//   console.log('Elements: ', itemsAllCategoriesRef[i].querySelector('ul').children.length);
//   console.log('');
// };
//forEach з псевдомасивом чомусь не працює!
const trueArrayRef = Array.from(itemsAllCategoriesRef);
trueArrayRef.forEach(function (element) {
    console.log('Category: ', element.querySelector('h2').textContent); 
    console.log('Elements: ', element.querySelector('ul').children.length);
  console.log('');
 });
