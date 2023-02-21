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
//це щоб забрати< p  class="success" >You are succssful loged in</p>
const removeSuccess = () => {
  if (refs.success) refs.success.remove();
};
refs.inputMail.addEventListener("input", removeSuccess);
refs.inputPassword.addEventListener("input", removeSuccess);

const onFormValidator = (event) => {
  event.preventDefault();
  // console.log('event.currentTarget.elements ',event.currentTarget.elements);
  //elements це колекція всіх ел-тів(tags) refs.form тобто input(інтерактивні елементи)
  //через деструктуризацію витягаємо елементи поокремо згідно name кожного
  //  console.log("email ", email); //<input name="email"/>
  //  console.log("password ", password); // <input name="password"/>
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill all the fieds");
    return;
  } else {
    refs.form.insertAdjacentHTML(
      "afterend",
      "<p class ='success'style ='color: green;font-size: 25px;'>You are successfull have loged in!</p>"
    );
    refs.success = document.querySelector(".success");
    //1й варіант створення обєкта
    let formData = new FormData(event.currentTarget); //<form>...</form>
    let objFromFormData = {};
    //екземпляр класа FormData можна ітерувати по інтерактивних полях у яких key це name   а значення це value
    formData.forEach((value, name) => {
      objFromFormData[name] = value; //в [] стоїть змінна = ключ обєкта /якщо не змінна то ключ через крапку
    });
    console.log("objFromFormData: ", objFromFormData);
    //2й варіант вручну через elements
    let objFromElements = {
      email: email.value, // 1-ше поле
      password: password.value, //2-ге поле
    };
    console.log("objFromElements: ", objFromElements);
    event.currentTarget.reset(); //reset currentTarget це ксидання всіх value форми
    // console.log(event.currentTarget);
    return;
  }
};

refs.form.addEventListener("submit", onFormValidator);

//elem.style.cssText ="background:red ;color:#fff;padding:10px"; //коли декілька властивостей
//elem.style.border = "5px double red";                          //коли одна
// elem.classlist.add("red-heart");                             //або добавити вже прописаний css
//<p style ='color:green;font-size:40px;ext-align:center;'>    //В markup для insertAdjacebtHTML коли е-та ще нема в DOM
