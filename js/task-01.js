// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
///var2////////////////
const listOfCategories = document.querySelectorAll(`.item`);
const statCategoriesNum = () =>
  console.log(`Number of categories: ${listOfCategories.length}`);

Array.from(listOfCategories).map((item) => {
  console.log(`Catergory: ${item.querySelector(`h2`).textContent}`);
  console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
});

//////////////////////var1--truy use maximum tehnic skill ))
// const listOfCategories = document.querySelectorAll(`.item`);
// const statCategoriesNum = () =>
//   console.log(`Number of categories: ${listOfCategories.length}`);

// const setStatisticArr = (arr) => {
//   const list = [...arr].reduce((acc, item) => {
//     acc.push({
//       Catergory: item.querySelector(`h2`).textContent,
//       Elements: item.querySelectorAll(`li`).length,
//     });

//     return acc;
//   }, []);
//   return list;
// };

// const viewStat = (arr, setStatisticArr) => {
//   setStatisticArr(arr).map((item) => {
//     const keys = Object.keys(item);
//     for (const key of keys) {
//       console.log(`${key} : ${item[key]}`);
//     }
//   });
// };

// statCategoriesNum();
// viewStat(listOfCategories, setStatisticArr);
