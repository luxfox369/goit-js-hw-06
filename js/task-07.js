//Напиши скрипт, який реагує на зміну значення
// input#font-size-control (подія input) і змінює 
//інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.
const refs = {
     input : document.querySelector("#font-size-control"),
     text : document.querySelector("#text"),
}
let startSize = refs.input.value = 25;
refs.text.style.fontSize = startSize + "px";
    
const onFontSizeRange =(event) =>{
   refs.text.style.fontSize = event.currentTarget.value+"px";
};

refs.input.addEventListener("input",onFontSizeRange);