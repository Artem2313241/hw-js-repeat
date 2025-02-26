// const block = document.createElement("block")
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// const clone = block.clone(true);
// document.body.append(block,clone)

// let arr = ['Main','Products','About us','Contacts']
//
// const home = document.createElement('ul');
// home.classList.add('home');
//
// for (const item of arr) {
//     const li = document.createElement('li')
//     li.innerText = item;
//     home.appendChild(li);
// }
// document.body.appendChild(home);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `${course.title} ${course.monthDuration}`
//     document.body.appendChild(div)
//
// }

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h1 = document.createElement("h1")
//     h1.innerText = course.title;
//     const p = document.createElement("p")
//     p.innerText = course.title;
//
//     div.append(h1,p)
//
//     document.body.appendChild(div)
// }