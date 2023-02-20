const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery.<ul class="gallery"></ul>
//Використовуй масив об'єктів images для створення елементів <img>,
//вкладених в <li>. Для створення розмітки використовуй шаблонні рядки
//і метод insertAdjacentHTML().
//Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const refs = {
  ulGallery: document.querySelector(".gallery"),
  head: document.head,
};

const markupListImages = images
  .map(
    ({ url, alt }) =>
      `<li class="item" ><img class="pict" src=${url} alt =${alt} style='display:block; width:270px; height: 194px;'/></li>`
  )
  .join("");

let styleMarkUp =
  "<style>.pict {cursor: pointer;border: 3px dotted rgb(100, 100,100);border-radius: 10%;transition: transform 1s ease-in-out;} .pict:hover {border: 3px dotted rgb(149, 16, 16);transform: scale(1.5);}</style > ";

refs.head.insertAdjacentHTML("beforeend", styleMarkUp);

refs.ulGallery.style.cssText =
  "padding: 15px; margin: 15px; list-style: none; display: flex; gap: 30px;justify-content: center;";
refs.ulGallery.insertAdjacentHTML("afterbegin", markupListImages);



