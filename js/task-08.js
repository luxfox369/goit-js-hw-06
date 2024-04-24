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


const refs = {
  form: document.querySelector(".login-form"),
 
}

refs.form.addEventListener('submit',(evt) => {
  evt.preventDefault();
  //elements це колекція всіх ел-тів(tags) refs.form тобто input-ів/button(інтерактивні елементи)
  //через деструктуризацію витягаємо елементи ,які потрібні
  // згідно name кожного 
  const { email, password } = evt.currentTarget.elements;
 // console.log(email," ",password);
  if (!email.value || !password.value) {
    return alert("Some of fields are empty!Let fill all of them");
  }
  else {
    const data = {
      email:email.value,
      password:password.value
    }
    refs.form.insertAdjacentHTML(
      "afterend",
      "<p style ='color: green;font-size: 25px;'>Successfull!You are have loged in!</p>");
    console.log("objForm ",data);
    refs.form.reset();
    return data;

    
  }
  
})
////ще варіант створення обєкта коли бпгато полів в формі
      //коли на форму вішають лісенера ,то в події утворюється:
      //event.currentTarget.elements => посилання на кожен інтеракт ел-т DOM в формі
      //можна  витягнути всі інтерактивні поля і що в них ввели в formData = new FormData(event.currentTarget)
      //можна відправити formData ,а також можна forEach витягнути кожну пару input(name,value)
    //formData - це обєкт -Скільки input в form = стільки keys,а  значення -entry of key:value з цим name //input.[name]:value
    //екземпляр класа FormData можна ітерувати по інтерактивних полях де key - name а значення - value
    //let formData = new FormData(event.currentTarget);
    //formData.forEach((value, name) => {
    //  objFromFormData[name] = value; //в [] стоїть змінна = ключ обєкта /якщо не змінна то ключ через крапку
    //});
