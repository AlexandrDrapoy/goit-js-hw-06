// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const innerList = (element) => {
  element.innerHTML = ingredients
    .map((elemOfList) => `<li class = "item" >${elemOfList}</li>`)
    .join("");
};
innerList(list);
// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
// const people1 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Alex"],
//   },
// ];
// //Not found
// const people2 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ];

// // jhon
// const people3 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ];

// const findNarcis = (arr) => {
//   const varNarcis = arr.filter((people) => {
//     if (people.know.length === 0) {
//       return people;
//     }
//   });
//   if (varNarcis.length !== 1) {
//     return console.log("error");
//   }

//   const narcis = varNarcis[0].name;

//   const resalt = arr.some(
//     ({ know, name }) => !know.includes(narcis) && name !== narcis
//   );
//   return !resalt ? console.log(narcis) : console.log("error");
// };
// findNarcis(people1);
// findNarcis(people2);
// findNarcis(people3);

// Потрібно створити функцію яка буде приймати 2 параметра.
// 1)Масив студентів.
// 2)Ту мову програмування яку потрібно знайти.
// 3)Функція повинна повертати масив імен які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     langunage: `html`,
//   },
//   {
//     name: `Anton`,
//     langunage: `css`,
//   },
//   {
//     name: `Andriy`,
//     langunage: `js`,
//   },
//   {
//     name: `Vova`,
//     langunage: `html`,
//   },
//   {
//     name: `Alina`,
//     langunage: `css`,
//   },
//   {
//     name: `Egor`,
//     langunage: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     langunage: `css`,
//   },
//   {
//     name: `Ivan`,
//     langunage: `js`,
//   },
//   {
//     name: `Make`,
//     langunage: `html`,
//   },
// ];

// const findLanguage = (arr, lan) =>
//   arr.filter(({ langunage }) => langunage === lan).map(({ name }) => name);
// console.log(findLanguage(students, "js"));
