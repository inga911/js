console.clear();


/*Veiksmai su kintamaisiais

1. Susumuoti visus skaičiaus tipo kintamuosius
    Rezultatą išvesti į console
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    Rezultatą išvesti į console
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    1-2+3-4+5
4. Rezultatą išvesti į console
    Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

// 1.

const a = 1;
const b = 5;
const c = 9;
const d = 10;
const e = 15;

const sum = a + b + c + d + e;
console.log(sum);

// 3.
const rezultatas = a - b + c - d + e;
console.log(rezultatas);


console.log('-------------------');

// 2.
const vardas = 'Petras';
const pavarde = 'Petraitis';
const miestas = 'Vilnius';
const salis = 'Lietuva';

const apiePetra = vardas + ' ' + pavarde + ' ' + miestas + ' ' + salis + '.'
console.log(apiePetra);


// 4.

const food1 = 'spinatu';
const food2 = 'agurku';
const food3 = 'pomidoru';
const food4 = 'citrinos sulciu';
const food5 = 'prieskoniu';

const salad = `Salotoms reikes: ${food1}, ${food2}, ${food3}, ${food4} bei ${food5}.`;
console.log(salad);

