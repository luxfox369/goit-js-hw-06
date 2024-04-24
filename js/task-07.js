//Напиши скрипт, який реагує на зміну значення
// input#font-size-control (подія input) і змінює 
//інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.
const refs = {
   size: document.querySelector("#font-size-control"),
   text:document.querySelector("#text"),
}
refs.size.addEventListener('input', (ewt) => {
    refs.text.style.fontSize  = `${refs.size.value}px`;  
})
