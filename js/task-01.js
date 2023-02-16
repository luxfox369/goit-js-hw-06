//Напиши скрипт, який:
//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента 
//(тегу <h2>) і кількість елементів в категорії (усіх <li>,
// вкладених в нього).
const ulNode = document.querySelector('#categories'); //ul #categories
console.log("Number of categories: ",ulNode.children.length); //li діти ul #categories
console.log('');

const listCategoryNodes = ulNode.children;
//forEach з псевдомасивом  не працює!
const trueArrayNodes = Array.from(listCategoryNodes);
trueArrayNodes.forEach(function (element) {
    console.log('Category: ', element.querySelector('h2').textContent); //прочитали h2 кожної категорії
    console.log('Elements: ', element.querySelector('ul').children.length);//в кожній категорії дітей
  console.log('');
 });
