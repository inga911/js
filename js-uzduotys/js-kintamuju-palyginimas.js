console.clear();
/*Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, 
o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
3. Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

// 1.
const pilnametis = 18;
const amzius = 25;

if (amzius > pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (amzius < pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (amzius === pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (amzius !== pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (amzius >= pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (amzius <= pilnametis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');


// 2. Išvesti teksto tipo kintamųjų ilgius
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

const pirmas = 'Lietuva';
const antras = 'Vilnius';

const pirmas1 = pirmas.length;
console.log(pirmas1);

const antras1 = antras.length;
console.log(antras1);


if (pirmas1 > antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (pirmas1 < antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (pirmas1 === antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (pirmas1 !== antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (pirmas1 >= antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (pirmas1 <= antras1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

// 3.
/*
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const drabuziai = ['megztinis', 'kelnes', 'marskiniai', 'kojines', 'salikas', 'paltas']
const drabuziai1 = drabuziai.length;
console.log(drabuziai1);


const miestai = ['Panevezys', 'Kaunas', 'Vilnius', 'Klaipeda']
const miestai1 = miestai.length;
console.log(miestai1); 

if (drabuziai1 > miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (drabuziai1 < miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (drabuziai1 === miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (drabuziai1 !== miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (drabuziai1 >= miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');

if (drabuziai1 <= miestai1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('-------------');




// ELSE IF  

if (8 > 10){
    console.log('tiesa');
} else {
    console.log('netiesa');
}


console.log('-------------');



const myNum = 20;

if (15 > myNum) {
    console.log('tiesa');
} else if (8 > myNum){
    console.log('melas');
} else {
    console.log('neturiu atsakymo');
}


const week = 4;

if (week === 7){
    console.log('Taip, siandien yra 4oji metu savaite');
} else if (week === 5){
    console.log('Ne, ne 7oji o 4oji savaite');
} else {
    console.log('Bandykite dar karta');
}