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

const formNode = document.querySelector(".login-form");
//console.log(formNode);

const validator =(event)=>{
  
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    console.log(event); //currentTarget null ???

if(email.value === "" || password.value === "") alert("Please fill all the fieds");
   else {
   
     formNode.insertAdjacentHTML("afterend","<p style ='color: green;font-size: 25px;'>You are succesfull have loged in!</p>");
     console.log(`{email: ${email.value},password: ${password.value}}`);
     event.currentTarget.reset();
    }
};

formNode.addEventListener('submit',validator);

    //elem.style.cssText ="background:red ;color:#fff;padding:10px"; //коли декілька властивостей
    //elem.style.border = "5px double red";                          //коли одна
    // elem.classlist.add("red-heart");                             //або добавити вже прописаний css
    //<p style ='color:green;font-size:40px;ext-align:center;'>    //В markup для insertAdjacebtHTML коли е-та ще нема в DOM
