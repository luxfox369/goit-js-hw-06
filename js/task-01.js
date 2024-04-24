//Напиши скрипт, який:
//Порахує і виведе в консоль кількість категорій в ul#categories,
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента
//(тегу <h2>) і кількість елементів в категорії (усіх <li>,
// вкладених в нього).

const refs = {
  mainList:document.querySelector('#categories')
}
//console.log(refs.mainList);
const items = refs.mainList.children; //масив головних li
console.log(items.length);
console.log(Array.from(items));
Array.from(items)
  .map((item) => {
    console.log(item.querySelector('h2').textContent); 
    console.log(item.querySelector('ul').children.length);
  
})
