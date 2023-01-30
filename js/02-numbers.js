console.clear();
/*
KINTAMUJU INICIAVIMO BUDAI:
- const (default)
- let (jei reikes keisti/atnaujinti reiksme)
- var (niekada nenaudoti)

NUMBERS:
- teigiami/neigiami
- sveikieji/desimtainiai
- normalus/nenormalus skaiciai:
    - begalybe
    - NaN (not-a-number)

ARITMETINIAI OPERATORIAI: +, -, /, *, ** (laipsnis), % (liekana)
PRISKIRIMO OPERATORIAI: =, +=, -=, /=, *=, **=, %=

*/

const metai = 2023;
const PI = 3.1415;

console.log(metai);
console.log(PI);
console.log(PI, metai, PI, metai);

const neigiamas = -6.7;

console.log(neigiamas);

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

const a = 7;
const b = 5;

const suma = a + b;
console.log(suma);

const skirtumas = a - b;
console.log(skirtumas);

const dalmuo = a / b;
console.log(dalmuo);

const sandauga = a * b;
console.log(sandauga);

const dvejetai = 2 + 2 * 2;
console.log(dvejetai);

const dvejetaiSkliaustuose = (2 + 2) * 2;
console.log(dvejetaiSkliaustuose);

const kampas = 90 * 90;
const kampas2 = 90 ** 2;
const kampas3 = 90 ** 3;
const kampas3_2 = 90 * 90 * 90;
console.log(kampas, kampas2, kampas3, kampas3_2);

const liekana1 = a % b;
console.log(liekana1);

const liekana2 = 21 % 3;
console.log(liekana2);

const liekana3 = 31 % 3;
console.log(liekana3);

const liekana4 = -41 % 4;
console.log(liekana4);

const liekana5 = -51 % -5;
console.log(liekana5);

const liekana6 = 3.1415 % 3;
console.log(liekana6);

console.log(0.1 + 0.2);

console.log((1 + 2) / 10, '-->', '0.3');

const f = 0.1;
const g = 0.2;
const h = (f * 10 + g * 10) / 10;
console.log(h, '-->', '0,3');


console.log('------let-reiksme------------');
// console.clear();


let pinigine = 0;
console.log(pinigine,'-->', '0');

pinigine = pinigine + 1;
console.log(pinigine,'-->', '1');

pinigine = pinigine + 2;
console.log(pinigine,'-->', '3');

pinigine = pinigine - 3;
console.log(pinigine,'-->', '0');

pinigine = pinigine + 4;
console.log(pinigine,'-->', '4');

console.log('------PRISTYRIMO OPERATORIAI-------------');

let temperatura = 0;
console.log(temperatura);

temperatura = temperatura + 2;
console.log(temperatura,'-->', '2');

temperatura += 3;
console.log(temperatura,'-->', '5');

temperatura -= 1;
console.log(temperatura,'-->', '4');

temperatura *= 2;
console.log(temperatura,'-->', '8');

temperatura /= 2;
console.log(temperatura,'-->', '4');

temperatura **= 2;
console.log(temperatura,'-->', '16');

temperatura %= 3;
console.log(temperatura,'-->', '1');


console.log('Plius plius ------------------');

let svoris = 20;
console.log(svoris);

svoris = svoris + 1;
console.log(svoris);

svoris += 1;
console.log(svoris);

svoris++;
console.log(svoris);

++svoris;
console.log(svoris);

console.log('Minus minus------------------');

let ugis = 100;
console.log(ugis);

ugis = ugis - 1;
console.log(ugis);

ugis -= 1;
console.log(ugis);

ugis--;
console.log(ugis);

--ugis;
console.log(ugis);

console.log('Priekyje ------------------');

let gg = 0;
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);
console.log(++gg);

let hh = 0;
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);
console.log(hh++);



console.clear(); 



console.log('-------------- IS CODEWARS----------------');



function positiveSum(arr) {
    // console.log(arr);
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
            if (arr[i] > 0){
                sum += arr[i];
            }
       
    }
    return sum;
 
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);



console.log('---------BANDAU SAVARANKISKAI- sum tik teigiami---------');

function sudetisTikTeigiamu(masyvas){
    let sum = 0;
    for (let i = 0; i < masyvas.length; i++){
        if (masyvas[i] > 0){sum += masyvas[i]}
    }
    return sum;
}
console.log(positiveSum([1,7,3,2,2]),'-->', 15);
console.log(positiveSum([0,-2,3,3,6]),'-->', 12);
console.log(positiveSum([-1, 2, 3]),'-->', 5);
console.log(positiveSum([-5, 20, -18]),'-->', 6);
console.log(positiveSum([-9, 6, 10]),'-->', 16);


console.log('---------BANDAU SAVARANKISKAI- sum tik teigiami---------');

function sudetisTikNeigiam(teigiami){
    let sum = 0;
    for ( let i = 0; i <teigiami.length; i++){
        if (teigiami[i] >0){sum += teigiami[i]}
    }
    return sum;
}
console.log(sudetisTikTeigiamu([3, 5, 7, 8, 10]),'-->', 33);
console.log(sudetisTikTeigiamu([3, 9, 7, 8, 10]),'-->', 37);
console.log(sudetisTikTeigiamu([-1, 2, 3]),'-->', 5);
console.log(sudetisTikTeigiamu([-5, 20, -18]),'-->', 20);
console.log(sudetisTikTeigiamu([3, 4, -7, 8, -10]),'-->', 15);

console.log('---------BANDAU SAVARANKISKAI- sum tik teigiami---------');

function sudetis(teigiami){
    let sum =0;
    for (let i = 0; i < teigiami.length; i++){
        if(teigiami[i] > 0)
        {sum += teigiami[i]}
    }
    return sum;
}



console.log(sudetis([1,2,3,4,5]),15);
console.log(sudetis([1,-2,3,4,5]),13);
console.log(sudetis([]),0);
console.log(sudetis([-1,-2,-3,-4,-5]),0);
console.log(sudetis([-1,2,3,4,-5]),9);


function sumStr(a, b){
    const a = Number(a);
    const b = Number(b);
    console.log(sumStr('4', '8'));
}

console.log('--------------REVERSE STRING----------');

function solution(str){
    if (typeof string !== 'string') { 
        return 'ERROR: reikalngas tekstas';
    }
    if (string === ''){
        return 'ERROR: reikalngas ne tuscias tekstas';
    }


    let reverse = '';
    
    for (let i = 0; i < str.length; i++){
        reverse = str[i] + reverse;
    }
    return reverse;
  }

  console.log(solution('hello'));
  console.log(solution('labas'));
  console.log(solution('laba diena'));