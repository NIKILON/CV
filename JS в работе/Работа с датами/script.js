'use strict';

const now = new Date('2020-10-16');
// new Date.parse('2020-10-16');

// console.log(now.setHours(18));
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMonth());
// console.log(now.getDate());
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end-start} миллисекунд`);