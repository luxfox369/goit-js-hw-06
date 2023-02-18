//Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна 
//відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна
// перезавантажуватися.
// Якщо у формі є незаповнені поля, 
//виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, 
//збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості. 
//Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і 
//очисти значення полів форми методом reset.


var inputMailRef = document.querySelector("input[name=email]")
var inputPasswordRef = document.querySelector("input[name=password]")
var formNode = document.querySelector(".login-form");
var successRef = document.querySelector(".success");

const removeSuccess = () => { if (successRef) successRef.remove(); };
inputMailRef.addEventListener('input', removeSuccess);
inputPasswordRef.addEventListener('input', removeSuccess);

const validator =(event)=>{
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    console.log(event); //currentTarget null ???

if(email.value === "" || password.value === "") alert("Please fill all the fieds");
   else {
     formNode.insertAdjacentHTML("afterend","<p class ='success'style ='color: green;font-size: 25px;'>You are successfull have loged in!</p>");
    console.log(`{email: ${email.value},password: ${password.value}}`);
    successRef = document.querySelector(".success");
    // console.log('successRef ',successRef);
     event.currentTarget.reset();
    }
};

formNode.addEventListener('submit', validator);



    //elem.style.cssText ="background:red ;color:#fff;padding:10px"; //коли декілька властивостей
    //elem.style.border = "5px double red";                          //коли одна
    // elem.classlist.add("red-heart");                             //або добавити вже прописаний css
    //<p style ='color:green;font-size:40px;ext-align:center;'>    //В markup для insertAdjacebtHTML коли е-та ще нема в DOM
