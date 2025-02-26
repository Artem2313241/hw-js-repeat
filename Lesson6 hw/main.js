// const wordOne ='hello world';
// const wordTwo = `lorem ipsum`;
// const wordThree = 'java is cool';
//
// console.log(wordOne.length)
// console.log(wordTwo.length)
// console.log(wordThree.length)

// const string = "hello world";
// const lorem = 'lorem ipsum';
// const word = 'javascript is cool';
//
// const wordOne = string.toUpperCase()
// console.log(wordOne)
// const wordTwo = lorem.toUpperCase()
// console.log(wordTwo)
// const wordThree = word.toUpperCase()
// console.log(wordThree)

// const string = 'HELLO WORLD';
// const lorem = 'LOREM IPSUM';
// const word = 'JAVASCRIPT IS COOL';
//
// const wordOne = string.toLowerCase()
// console.log(wordOne)
// const wordTwo = lorem.toLowerCase()
// console.log(wordTwo)
// const wordThree = word.toLowerCase()
// console.log(wordThree)

// let string = ' dirty string   ';
// const s = string.trim();
// console.log(s)

// function  stringToArray(str){
// if (str){
//     const split = str.split(' ');
//     return split;
// }
// return '';
// }
//
// console.log(stringToArray('Ревуть воли як ясла повні'));

// const nums = [10,8,-7,55,987,-1011,0,1050,0];
// nums.map(nums =>{
//     return nums + '';
// });

// function sortNums(arrayOfNums, direction) {
//     if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'descending') return arrayOfNums.sort((a,b) => b - a);
// }'

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sort = coursesAndDurationArray
// .sort((durationA, durationB)=>durationA.monthDuration - durationB.monthDuration);
// const filter = sort.filter(value => value.monthDuration);
// const map = filter.map((value, index) => {
//  value.id  = index + 1;
//  return value;
// })
// console.log(map)

// const suits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const Cards = [];
//
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         Cards.push(card);
//     }
// }
//
// console.log(Cards);
//
// Cards.find(card => card.value === 'ace' && )
//
//
// console.log(Cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
//
// console.log(Cards.filter(card => card.value === '6'));
//
// console.log(Cards.filter(card => card.color === 'red'));
//
// console.log(Cards.filter(card => card.cardSuit === 'diamond'));
//
// console.log(Cards.filter(card => card.cardSuit === 'clubs' && (card.value === '10' || card.value !== '11' || card.value !== 'jack' || card.value !== 'queen' || card.value !== 'king' || card.value !== 'ace')));


 // const suits = ['spade', 'diamond', 'heart', 'clubs'];
//  const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
//  const cards = [];
//
//  for (const suit of suits) {
//      for (const value of values) {
//          const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//          cards.push(card);
//     } }
//
//  console.log(cards);
//
// const reduce = cards.reduce((previousValue, card) => {
//     switch (card.cardSuit) {
//         case'spade':
//             previousValue.spades.push(card);
//             break;
//         case'diamond':
//             previousValue.diamonds.push(card);
//             break;
//         case'club':
//             previousValue.clubs.push(card);
//             break;
//         case'heart':
//             previousValue.hearts.push(card);
//             break;
//     }
//     return previousValue
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
//
// console.log(reduce)

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// console.log(coursesArray.filter(course =>{
//     return course.modules.includes('docker')
// }))
// console.log(coursesArray.filter(course =>{
//     return course.modules.includes('sass')
// }))