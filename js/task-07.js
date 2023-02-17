//Напиши скрипт, який реагує на зміну значення
// input#font-size-control (подія input) і змінює 
//інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const inputNode = document.querySelector("#font-size-control");
const textNode = document.querySelector("#text");

const ChangeFontSize =(event) =>{
     //console.log(event.currentTarget.value);//string
     //console.log(typeof(textNode.style.fontSize));//string
     textNode.style.fontSize = event.currentTarget.value+"px";

};

inputNode.addEventListener("input",ChangeFontSize);