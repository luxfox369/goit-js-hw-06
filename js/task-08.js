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

const users = [
  { mail: "ivan@gmail.com", pass: "123" },
  { mail: "maria@gmail.com", pass: "321" },
];
const refs = {
  inputMail: document.querySelector("input[name=email]"),
  inputPassword: document.querySelector("input[name=password]"),
  form: document.querySelector(".login-form"),
};
const removeSuccess = () => {
  if (refs.success) refs.success.remove();
};
// console.log(refs.success);
refs.inputMail.addEventListener("input", removeSuccess);
refs.inputPassword.addEventListener("input", removeSuccess);

const onFormValidator = (event) => {
  event.preventDefault();
  //console.log('event.currentTarget.elements ',event.currentTarget.elements);

  const { email, password } = event.currentTarget.elements; //elements це колекція всіх всіх ел-тів refs.form input та button форми

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill all the fieds");
    return;
  } else {
    refs.form.insertAdjacentHTML(
      "afterend",
      "<p class ='success'style ='color: green;font-size: 25px;'>You are successfull have loged in!</p>"
    );
    refs.success = document.querySelector(".success");

    let formData = new FormData(event.currentTarget);
    console.log(formData);
    // formData.forEach((value,name) => {
    //     console.log('name:',name);
    //     console.log("value:",value);
    // });
    //console.log(`{email:${email.value},password:${password.value}}`);
    event.currentTarget.reset();
    return;
  }
};

refs.form.addEventListener("submit", onFormValidator);

//elem.style.cssText ="background:red ;color:#fff;padding:10px"; //коли декілька властивостей
//elem.style.border = "5px double red";                          //коли одна
// elem.classlist.add("red-heart");                             //або добавити вже прописаний css
//<p style ='color:green;font-size:40px;ext-align:center;'>    //В markup для insertAdjacebtHTML коли е-та ще нема в DOM
