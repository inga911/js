console.clear();
console.log('------------.contact()---------------');

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1, 5, 6, ...array2];//iskleidzia turini i viena
console.log(array4);

const array5 = [...array1, ...array1, ...array1];
console.log(array5);

console.log('------------.push()---------------');

array1.push(777);//prijungs prie to array 777
console.log(array1);
console.log(array3);//kadangi tas3 yra junginys 2 ir 1 tai trecias nepasikeis su tais 777

array1[0] = 99999;
console.log(array1);
console.log(array3);
console.log(array4);
console.log(array5);


console.log('------apie blogiausia kopija---------');

const a = [1, 1, 1];
const b = a;//tai nelygu kopijai, tai tiesiog nuoroda i ta -a
//kompleksinis duomenu tipas b=a
const c = [...a];

console.log(a);
console.log(b);
console.log(c);

a[0] = 22;

console.log(a);
console.log(b);
console.log(c);

b[1] = 33;

console.log(a);
console.log(b);
console.log(c);

console.log('-----------');

function copyArray(list) {
    const list2 = [];

    for (let i = 0; i < list.length; i++) {
        list2.push(list[i]);
    }

    return list2;
}

const k = [1, 2, 3];
const l = copyArray(k);

k[0] = 111;
console.log(k);
console.log(l);



console.log('---------array.MAP()-------------');
//orginalus masyvas yra nepakeiciamas, is jo sukuriamos tik kopijos

const marks = [10, 2, 8, 4, 6];

function double(n) {
    return n * 2;
}

const marks2x = marks.map(double);//ieitu per orginalu sarasa ir ji modifikutotu pagal tokia funkcija kokia parasyta skliaustuose
console.log(marks);
console.log(marks2x);


const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];

function abbr(str) {
    return str[0];
}

const namesAbbr = names.map(abbr);

console.log(names);
console.log(namesAbbr);


