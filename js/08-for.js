console.clear();
/*
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}

*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;
let index = 0;

sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log('Vidurkis:', sum / marks.length);

console.log('--------------');

// Isspausdinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('--------------');

// Isspausdinti nuo 100 iki 104.
for (let k = 100; k <= 104; k++) {
    console.log(k);
}

console.log('--------------');

// Isspausdinti nuo 1000 iki 995.
for (let j = 1000; j >= 995; j--) {
    console.log(j);
}

console.log('--------------');

const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-->', pazymiai[i]);
}

console.log('----------------');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 2; i < numbers.length; i += 3) {
    console.log(i, '-->', numbers[i]);
}

console.log('----------------');

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);
}

console.log('----------------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}


function issirinktiRaides(text,a) {
    if (typeof text !== 'string') {
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if (typeof text !== '' && text <= [100]) {
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio."
    }
    if (typeof a !== "number") {
        return "Antrasis kintamasis yra netinkamo tipo."
    }
    if (typeof a > 0){
        return "Antrasis kintamasis turi būti didesnis už nulį."
    }
    if (a < text.length) {
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
    }
}
console.log(issirinktiRaides('abcdefg', 2));


const abcd = 'abcdefghijklmnopqrstuvwxyz';
let textt = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);
}
