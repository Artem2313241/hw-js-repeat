// let square = (a,b) => a * b;
// console.log(square(30,20))


// let circle = (radius) => 1.54 * radius * radius
// console.log(circle(result))

// let cilinder = (radius,height) => 5 * 2.15 * radius * height
// console.log(cilinder(24,12));

// let userArray = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// };
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// userArray(users);

// const Author = (paragraf) => {
//     document.write(`<p>${paragraf}</p>`);
// };
// Author('Hello World');

// let f = (text) => {
//     document.write(
//         `<ul>
//           <li>${text}</li>
//           <li>${text}</li>
//           <li>${text}</li>
//         </ul>`
//     );
// };
//
// f("Hello World");

// let UlGenerator = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
//
// UlGenerator("Hello World", 10);

// const primitive = (primitiveArray) => {
//     for (const item of primitiveArray) {
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// };
//
// primitive([123, "Hello World", true]);

// let UsersArray = (users) => {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// UsersArray(
// [
//         {id:1,name:`Timmy`,age:21},
//         {id:2,name:`Tom`,age:23},
//         {id:3,name:`Toby`,age:22},
//         {id:4,name:`Stint`,age:29},
//       ]);

const MinValue = (num) => {
    let min = num[0];
    for (const number of num) {
        if (number < min) {
            min = number;
        }
    }
    return min;
};

console.log(MinValue([10, 5, 3, 8, 2]));

// let cash = (swapArray) => {
//     let count = 0;
//     for (const item of swapArray) {
//         count = count + item
//     }
//     return count;
// }
//
// console.log(cash([1, 2, 10]));

// let swap = (array, index1, index2) => {
//     [array[index1], array[index2]] = [array[index2], array[index1]];
//     return array;
// };
//
// console.log(swap([11, 22, 33, 44], 0, 1));

const exchange = (sumUAH, currencyValue, exchangeCurrency) => {
    for (const item of currencyValue) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
};

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));

