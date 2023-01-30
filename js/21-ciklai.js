console.clear();

/*
ciklai : fod, for-of, while, do-while, foreach, map, filter, sort, reduce, for-in, ...
*/

const marks = [10, 2, 8, 4, 6];
//vidurkis

//FOR - susumuoti ir dalinti is kiekio
let sumFor = 0; 
for (let i =0; i< marks.length; i++){//nuo 0 iki pabaigos pridedam po 1
    const mark = marks[i]// sitai imama kaskart is naujo ir is naujo sitame cikle
    sumFor += mark;// --,,--
}
console.log(sumFor/marks.length);


//FOR-OF
//jeigu zinai kad einant per masyva ir imti kieviena nari ir su juo kazka daryti
let sumForOf = 0;
for (const mark of marks){//pavadinima sukurti koki nori "mark"
    sumForOf += mark;
}
console.log(sumForOf / marks.length);


//WHILE
//daryk kol darai
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length){ //()- rasosi " i< marks.length;" sitas klausimas
    sumWhile += marks[iWhile++];
}
console.log(sumWhile / marks.length);

//DO-WHILE- padaryk bent viena karta
let sumDoWhile = 0;
let iDoWhile = 0; 
do {

} while () // tol kol nepasieksi saraso galo

//FOREACH - eina per masyva gauna masyvo nari ir su juo kazka daro
//marsk.forEach(priima kokia logika/funkcija)
//tinka rodykline => funkcija
//


//is destytojo 
console.clear();
/*
Ciklai: for, for-of, while, do-while, foreach,
        map, filter, sort, reduce,
        for-in,
        ...
*/

const marks = [10, 2, 8, 4, 6];

// FOR
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}
console.log('FOR vidurkis:', sumFor / marks.length);

// FOR-OF
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
console.log('FOR-OF vidurkis:', sumForOf / marks.length);

// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
console.log('WHILE vidurkis:', sumWhile / marks.length);

let sumWhile2 = 0;
let iWhile2 = marks.length;
while (iWhile2) {
    sumWhile2 += marks[--iWhile2];
}
console.log('WHILE vidurkis:', sumWhile2 / marks.length);

// DO-WHILE
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length);
console.log('DO-WHILE vidurkis:', sumDoWhile / marks.length);

// FOREACH
let sumForeach = 0;
marks.forEach(mark => {
    sumForeach += mark;
});
console.log('FOREACH vidurkis:', sumForeach / marks.length);

// MAP
const doubleMarks = marks.map(mark => mark * 2);
console.log(doubleMarks);

// FILTER
const goodMarks = marks.filter(mark => mark >= 4);
console.log(goodMarks);

// SORT
console.log('------------------');
const marksAsc = marks.sort();
console.log(marks);
console.log(marksAsc);

const dic = ['Petras', 'petras', 'Maryte', 'Jonas', 'Ona'];
dic.sort();
console.log(dic);

const numbers = [11, 10, 1, 5, 15, 25, 22, 0, 2, 50, 51, -11, -10, -1, -5, -15, -25, -22, -0, -2, -50, -51];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const students = [
    {
        name: 'Petras',
        age: 99,
    },
    {
        name: 'Maryte',
        age: 88,
    },
    {
        name: 'Jonas',
        age: 55,
    },
    {
        name: 'Ona',
        age: 77
    },
];

students.sort();
console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);

const luckyNumbers = [666, 6, 13, 9, 999, 4];

luckyNumbers.sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
console.log(luckyNumbers);

luckyNumbers.sort((a, b) => a < b ? 1 : a === b ? 0 : -1);
console.log(luckyNumbers);

luckyNumbers.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(luckyNumbers);

// REDUCE
const nums = [1, 2, 3, 4];

// 1 + 2 + 3 + 4 = 10
const reduceSum = nums.reduce((sum, mark) => sum + mark);
console.log('REDUCE:', reduceSum);

// 1 - 2 - 3 - 4 = -8
const reduceMinus = nums.reduce((sum, mark) => sum - mark);
console.log('REDUCE:', reduceMinus);

// 1 * 2 * 3 * 4 = 24
const reduceMultiply = nums.reduce((sum, mark) => sum * mark);
console.log('REDUCE:', reduceMultiply);

// 1 / 2 / 3 / 4 = 24
const reduceDiv = nums.reduce((sum, mark) => sum / mark);
console.log('REDUCE:', reduceDiv);

const reduceSum2 = nums.reduce((sum, mark) => sum + mark, 0);
console.log('REDUCE:', reduceSum2);

// 1000 - 1 - 2 - 3 - 4 = 990
const reduceMinus2 = nums.reduce((sum, mark) => sum - mark, 0);
console.log('REDUCE:', reduceMinus2);

const reduceMulti2 = nums.reduce((sum, mark) => sum * mark, 1);
console.log('REDUCE:', reduceMulti2);

const reduceDiv2 = nums.reduce((sum, mark) => sum / mark, 0);
console.log('REDUCE:', reduceDiv2);

console.log('-----------------------');

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}

person.car = 'Volvo';
person['favorite-color'] = 'red';
delete person.isMarried;

const keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(person[key]);
}

for (const key of keys) {
    console.log(person[key]);
}

for (const key of Object.keys(person)) {
    console.log(person[key]);
}

console.log('--------------');

// FOR-IN
for (const key in person) {
    console.log(key, '-->', person[key]);
}

for (const key in [11, 22, 33]) {
    console.log(key);
}

const a1 = [11, 22, 33];
const a2 = {
    0: 11,
    1: 22,
    2: 33,
};