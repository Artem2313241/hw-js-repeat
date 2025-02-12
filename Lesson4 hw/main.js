// function square(a,b) {
//     const result = 30 * 20;
//     console.log(result);
//     return result
//
// }
// square()

// function circle(rad) {
//   let result = 1.54 * rad * rad
//     console.log(result);
//     return result;
// }
//
// circle()

// function Cilinder(radius,height) {
//     return 5 * 2.15 * radius * height
// }
// console.log(Cilinder(24,12));

// function userArray(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
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
// userArray(users)

// function Author(paragraf) {
//     document.write(`<p>${paragraf}</p>`);
// }
//
// Author('Hello World')

// function f(text) {
//     document.write(
//         `<ul>
//           <li>${text}</li>
//           <li>${text}</li>
//           <li>${text}</li>
//         </ul>`
//     )
// }
//
// f("Hello World")

// // function UlGenerator(text,num) {
// //         document.write(`<ul>`)
// //     for (let i = 0; i < num; i++){
// //         document.write(`<li>${text}</li>`)
// //     }
// // }
// //         document.write(`</ul>`)
// // UlGenerator("Hello World",50)

// function primitive(primitiveArray) {
//     for (const item of primitiveArray) {
//         document.write(`<ul><li>${item}</li></ul>`)
//     }
// }
//
// primitive([123,`Hello World`,true]);

// function UsersArray(users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//
//     }
//
// }
//
// UsersArray(
// [
//         {id:1,name:`Timmy`,age:21},
//         {id:2,name:`Tom`,age:23},
//         {id:3,name:`Toby`,age:22},
//         {id:4,name:`Stint`,age:29},
//       ]);

// function MinValue(num) {
//     let min = num[0];
//     for (const number of num) {
//         if (number < min){
//             min =  number
//         }
//
//     }
//     return min
// }

// function sum(swapArray) {
//     let count = 0;
//     for (const item of swapArray) {
//         count = count + item
//     }
//     return count;
// }
//
// console.log(cash([1, 2, 10]));

// function swap(array,index1,index2) {
//         let temp = array[index1];
//         array[index1] = array[index2];
//         array[index2] = temp;
//         return array;
// }
// console.log(swap([11,22,33,44],0,1  ));

// function exchange(sumUAH, currencyValue, exchangeCurrency) {
//     let chosenCurrency;
//     for (const item of currencyValue) {
//         if (item.currency === exchangeCurrency){
//             chosenCurrency = item;
//
//             let result = sumUAH/chosenCurrency.values
//             return result;
//         }
//
//     }
//
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));