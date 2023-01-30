console.clear();

function sudetis(pirmas, antras) {
    return pirmas + antras;
}

const s1 = sudetis(7, 5);
console.log(`7 + 5 = ${s1}`);

const s2 = sudetis(17, -8);
console.log(`17 + -8 = ${s2}`);

console.log('-------AR LYGINIS ------');

function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lyginis';
    }
    return 'ne lyginis';
}

const l1 = arLyginis(7);
console.log(`7 yra ${l1}`);

const l2 = arLyginis(88);
console.log(`88 yra ${l2}`);



console.log('-----VIDURKIS--------');

function average(marks) {
    let sum = 0;
// kai nezinai apimties tada geriau rinktis cikla
    for (let i = 0; i < marks.length; i++) { 
        sum += marks[i];
    }

    return sum / marks.length;
}

const petras = [10, 2, 8, 4, 6];
const maryte = [10, 9, 8, 7];
const jonas = [2, 3, 4, 5];
const ona = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

const petroVidurkis = average(petras);

console.log('Petras:', petroVidurkis, petras);
console.log('Maryte:', average(maryte), maryte);
console.log('Jonas:', average(jonas), jonas);
console.log('Ona:', average(ona), ona);

console.log('----------');

function skirtumas(a, b) {
    if (typeof a !== 'number') {
        return 'Klaida: pirmas parametras turi buti skaicius.';
    }

    if (typeof b !== 'number') {
        return 'Klaida: antras parametras turi buti skaicius.';
    }

    return a - b;
}

console.log(skirtumas(7, 5));
console.log(skirtumas(17, 5));
console.log(skirtumas(-17, 5));

console.log(skirtumas(true, 5)); // klaida...
console.log(skirtumas(8, false)); // klaida...

console.log(skirtumas('labas', 5)); // klaida...
console.log(skirtumas(8, 'ezys')); // klaida...