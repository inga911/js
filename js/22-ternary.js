console.clear();
/*
TERNARY operatorius

klausimas ? teigiama logika : neigiama logika

*/

let x = '';
if (4 > 2) {
    x = 'daugiau';
} else {
    x = 'maziau arba lygu';
}
console.log(x);

const laikas = 15;
let zodis = '';
if (laikas < 12) {
    zodis = 'ryta';
} else {
    zodis = 'diena';
}
console.log(`Laba ${zodis}`);

let y = 'maziau arba lygu';
if (4 > 2) {
    y = 'daugiau';
}
console.log(y);

const word = laikas < 12 ? 'ryta' : 'diena';
console.log(`Laba ${word}`);

const a = 0 > 1 ? 2 : 3;
console.log(a);

const b = 0 < 1
    ? 2 > 3
        ? 4
        : 5
    : 6;
console.log(b);

const c = 0 > 1
    ? 2
    : 3 < 4
        ? 5
        : 6;
console.log(c);

const d = 0 > 1
    ? 2 < 3
        ? 4
        : 5
    : 6 > 7
        ? 8
        : 9;
console.log(d);