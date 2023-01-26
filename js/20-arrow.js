console.clear();
const g = 7;
const h = 5;

// function declaration
function suma(a, b) {
    return a + b;
}
console.log(`${g} + ${h} = ${suma(g, h)}`);

// 
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${g} - ${h} = ${skirtumas(g, h)}`);

// arrow function
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${g} * ${h} = ${sandauga(g, h)}`);

// arrow function
// jei yra 1 statement'as, tai galim nerasyti {} ir return
const dalmuo = (a, b) => a / b;
console.log(`${g} / ${h} = ${dalmuo(g, h)}`);

// arrow function
// jei yra 1 parametras, tai galim nerasyti ()
const kvadratu = a => a ** 2;
console.log(`${g}^2 = ${kvadratu(g, h)}`);

const math = {
    sum: (a, b) => a + b,
    skirt: (a, b) => a - b,
    multi: (a, b) => a * b,
    div: (a, b) => a / b,
    laips: a => a ** 2,
}

console.log(math.sum(7, 5));
console.log(math.skirt(7, 5));
console.log(math.multi(7, 5));
console.log(math.div(7, 5));
console.log(math.laips(7));

const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b,
}

const x = 7;
const y = 5;
const op = '**';

const ats = matematika[op](x, y);
console.log(`${x} ${op} ${y} = ${ats}`);