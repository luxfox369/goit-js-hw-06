//Напиши скрипт, який:
//Порахує і виведе в консоль кількість категорій в ul#categories,
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента
//(тегу <h2>) і кількість елементів в категорії (усіх <li>,
// вкладених в нього).

const refs ={
  
  ulMain : document.querySelector('#categories'),
 
 };
const  liMain = refs.ulMain.children;
   
console.log("Number of categories: ",refs.ulMain.children.length); //li діти ul #categories
console.log('');

//forEach з псевдомасивом  не працює!
Array.from(liMain).forEach(function (item) {
    console.log('Category: ', item.querySelector('h2').textContent); //прочитали h2 кожної категорії
    console.log('Elements: ', item.querySelector('ul').children.length);//в кожній категорії дітей
  console.log('');
 });
