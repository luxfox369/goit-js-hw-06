const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery.<ul class="gallery"></ul>
//Використовуй масив об'єктів images для створення елементів <img>, 
//вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
//і метод insertAdjacentHTML().
//Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const ulGalleryNode =document.querySelector('.gallery');

const markupListImage = images
                      .map(({url,alt}) =>`<li class="item"><img class="img" src=${url} alt =${alt}/></li>`)
                      .join('');
//console.log(markupListImage);
ulGalleryNode.insertAdjacentHTML("afterbegin", markupListImage); 
ulGalleryNode.style.cssText ='padding: 15px; margin: 15px; list-style: none; display: flex; gap: 30px;justify-content: center;';
//console.log(ulGalleryNode); 

const itemsNode = document.querySelectorAll('.item');//масив лішок item - [<li.item>,<li.item>,<li.item>]
//console.log(itemsNode);
const itemsArray = Array.from(itemsNode);
//console.log(itemsArray);
const liRef = itemsArray.map((element) => {
 // console.log(element); 
  element.style.cssText = ':hover{transform: scale(1.5)};';
  element.firstElementChild.style.cssText = "display:block; width:370px; height: 294px;"; //img
  return element;
});


 
