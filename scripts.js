// function my_alert(whatToAlert) {

// import { handleFormSubmit } from "./module.js";

//     alert(whatToAlert)

// }

// my_alert("Hello")

// function multiplication(a, b) {

//     return a*b

// }

// let result = multiplication(2,3)

// console.log(result)

// let multiplication = (a,b) => a*b

// console.log(multiplication(2,5))

// var my_object = {

//     name: 'my_object',
//     multiplication: function(a,b) {
//         return a*b
//     },
//     crazy_muliplication: function(a,b) {
//         console.log(this) //this - obiekt, który wywołał funkcję
//         return this.multiplication(a,b) *10
//     },
//     crazy_muliplication2: (a,b) => {
//         console.log(this) // this - właściciel funkcji anonimowej
//         return this.my_object.multiplication(a,b) *10
//     }

// }

// console.log(my_object.crazy_muliplication2(3,3))

// let ar = ["a", "b", "c"]
// console.log(ar.unshift('5'), ar)

// let new_array = ar.forEach((item, index)=> {
//     console.log(item)
// })

// let new_array = ar.map((item, index)=> {
//     // return item + '3'
//     return `${item}3`
// })
// console.log(new_array)

// let ar = [1,2,3]
// let result = ar.filter( (item) => {
//     return item > 1
// })
// console.log(result)

// let result = ar.reduce((previous, next) => previous + next)
// console.log(result)

// let age = 81
// let gender = 'male'
// let day = 'Sunday1'

// if(age < 18 || day == 'Sunday') {

//     console.log('You are not allowed to enter this website')
// }
// else if(age > 80 && gender == 'male') {
//     console.log('Inny komunikat')
// }
// else {
//     console.log('Welcome to website!')
// }
// age < 18 ? console.log('yes') : console.log('no') //ternary operator

// console.log('1' == 1) //true
// console.log('1' === 1) //false - === poza wartością sprawdza typ danych

// let age = 19

// if(age <= 19)
// console.log('You are very young')
// else console.log('You are older than 20')

// const person = {
//     name: "Adam"
// }
// console.log(person.age ?? 'age is not defined') // ?? - jeżeli wartość jest null to wykonaj drugą akcję

// switch(age) {

//     case 18:
//     case 19:
//         console.log('You are 19 years old')
//         break
//     case 20:
//         console.log('You are 20 years old')
//         break
//     default:
//         console.log("Inna wartość")
// }

// const arr = [14, 20, 15, 98, 67];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (index in arr) {
//   console.log(index);
// }

// for (value of arr) {
//   console.log(value);
// }

// const obj = {
//   name: "Adam",
//   email: "email@email.com",
//   age: 30,
// };

// for (value in obj) {
//   console.log(obj[value]);
// }

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getPersonData() {
//     return `${this.firstName} ${this.lastName} is ${this.age} years old`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, age, membership) {
//     super(firstName, lastName, age);
//     this.membership = membership;
//   }

//   getCustomerData() {
//     return `${this.getPersonData()}. He belongs to ${this.membership}`;
//   }
// }

// let person1 = new Person("Adam", "Smith", 30);

// console.log(person1.getPersonData());

// let customer = new Customer("Robert", "Daniels", 19, "Admin Area Group");

// console.log(customer.getCustomerData());

// setTimeout(() => {
//   console.log("email is being sent");
// }, 2000);
// console.log("email was sent");
// console.log("send notification to admin panel");

// let promise = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("email is being sent");
//     resolve();
//   }, 2000);

//   promise.then(() => {
//     console.log("email was sent");
//   });
// });
// console.log("send notification to admin panel");

// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("Resolve was called");
// });

// Promise.all([
//   "0",
//   "1",
//   //asyncFunction(),
//   new Promise((resolve, reject) => {
//     //resolve("resolved");
//     reject("rejected");
//   }),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function asyncFunction() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved2");
//       alert(2);
//     }, 2000);
//   });
// }

// // alert(1);
// // asyncFunction().then(() => {
// //   alert(3);
// // });

// async function asyncCall() {
//   alert(1);
//   await asyncFunction();
//   alert(3);
// }

// asyncCall();

// console.log(document.getElementById("articles"));

// document.getElementById("articles").innerHTML = "lalala";

// console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText = "Inny tekst";

// console.log(document.getElementsByClassName("supElement"));

// console.log(document.querySelectorAll(".supElement"));

// let element = document.getElementsByTagName("p")[1];
// element.style.color = "red";

// document.querySelectorAll(".supElement")[1].style.color = "green";

// let newParagraph = document.createElement("p");
// newParagraph.textContent = "Treść";
// let h3 = document.createElement("h3");
// h3.textContent = "Nowy tytuł artykułu";
// let newArticle = document.createElement("h3");
// newArticle.appendChild(h3);
// newArticle.appendChild(newParagraph);

// let articles = document.querySelector("#articles");
// articles.appendChild(newArticle);
// newParagraph.remove();

// function myFunction() {
//   alert("click event");
// }

// document.getElementById("submitButton").addEventListener("click", () => {
//   let form = document.querySelector("form");
//   let data = new FormData(form);

//   console.log(data.get("firstName"));
// });

// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];

// console.log(...ar1);
// console.log([...ar1, ...ar2]);

// let string = "ABCD";
// console.log(...string);

// let array1 = ["a", "b", "c", "d"];
// let array2 = { ...array1 };
// console.log(array2);

// let obj1 = {
//   name: "Robert",
// };

// let obj2 = {
//   last_name: "Smith",
// };

// console.log({ ...obj1, ...obj2 });

// function myFunction(...args) {
//   console.log(args);
// }

// myFunction(1, 2, 3, 4, 5, 6);

// let JohnSmith = ["John", "Smith", "email@email.com"];
// let [firstName, lastName, email] = JohnSmith
// let [, lastName, email] = JohnSmith;

// let obj = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "email@email.com",
// };

// let { firstName, lastName } = obj;
// console.log(firstName, lastName);

// import { data, mFun } from "./module.js"; // wymagane nawiasy klamrowe dla named export
// import cokolwiek from "./module.js";
// console.log(data);
// mFun();
// cokolwiek();

// document.getElementById("submitButton").addEventListener("click", async () => {
//   // console.log("clicked");
//   const { handleFormSubmit } = await import("./module.js");
//   handleFormSubmit("Handle form submitting");
// });

// if (true) {
//   (async () => {
//     console.log("Działa");
//     const { handleFormSubmit } = await import("./module.js");
//     handleFormSubmit("Handle form submitting");
//   })();
// }

//
// localStorage.removeItem("email");
// console.log(localStorage.getItem("email"));

// let obj = {
//   name: "Adam",
//   email: "email@email.com",
// };

// // let obj1 = localStorage.setItem("userData", JSON.stringify(obj));
// let obj2 = JSON.parse(localStorage.getItem("userData"));

// console.log(obj2.name);

// let data = fetch("./data.txt");
// data.then((data) => data.text()).then((data) => console.log(data));

// async function fetchSomething() {
//   let response = await fetch("data.txt");
//   let data = await response.text();
//   console.log(data);
// }

// fetchSomething();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data)));
