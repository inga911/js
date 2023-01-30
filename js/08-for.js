console.clear();
/*
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
            kartojama logika
}
darbas su masyvais daznai
*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;// suma is pradziu yra nulis
let index = 0;//pradedam nuo 0 elemento siuo atveju 10
//jei rasytume [++index] tada reiketu nurodyti LET INDEX = -1
//tai kad cia naudojom 5 kartus tai jau yra vadinamas ciklas
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

//5 kartus pakartok {
//    suma += marks[index];
//    index += 1;
//  }
console.log('Vidurkis:', sum / marks.length, '-->', '6');



console.log('------FOR--------');
//
// Isspausdinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i, '-->', '0, 1, 2, 3, 4, 5');
}

console.log('--------------');

// Isspausdinti nuo 100 iki 104.
for (let k = 100; k <= 104; k++) {
    console.log(k, '-->', '100, 101, 102, 103, 104');
}

console.log('--------------');

// Isspausdinti nuo 1000 iki 995.
for (let j = 1000; j >= 995; j--) {
    console.log(j, '-->', '1000, 999, 998, 997, 996, 995');
}

console.log('------paZYMIAI--------');

const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {//pazyiai.LENGTH kai masyvas gali kisti ir for ciklui tai neitakotu
    console.log(i, '-->', pazymiai[i]);//pazymiai[i] isspausdina visus esamus pazymius tokia tvarka kokia jie parasyti
}

console.log('----- nuo kazkelinto ir kas kazkelinta-----------');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// pradeda nuo (30)| |per visa masyvo ilgi| |kaip keisti i
for (let i = 2;     i < numbers.length;     i += 3) {//i +=3 tai reiskia paimti kas trecia 
    console.log(i, '-->', numbers[i]);
}

console.log('------isspausdinti  simbolius visus----------');

const abc = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);//ispausdina indexo vieta raide ir raidziu jungni
}

console.log('----------------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

// Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i]; //laikinas kintamasis kuris veikia tik viename cikle
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi); //isspausdina su visais vardais  4 sakinius - 'hi'.
}//kiekvienam vardui veikia naujas ciklas

  
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

