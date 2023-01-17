console.clear();
/*

ARRAY (sąrašas, list'as, masyvas, matrica)
- rekomenduotina laikyti homogenišką informaciją
- galima ir skirtingų tipų informaciją laikyti sąraše

*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ewreg', false, []];

console.log(empty);
console.log(marks);
console.log(names);
console.log(chaos);

const petroPazimys1 = 10;
const petroPazimys2 = 2;
const petroPazimys3 = 8;
const petroPazimys4 = 4;
const petroPazimys5 = 6;

const petroSuma = petroPazimys1 + petroPazimys2 + petroPazimys3 + petroPazimys4 + petroPazimys5;

const petroKiekis = 5;

const petroVidurkis = petroSuma / petroKiekis;
console.log('Petro pazimiu vidurkis:', petroVidurkis);

console.log('------------------');

//    index:  0, 1, 2, 3, 4, ....
const ona = [10, 2, 8, 4, 6];

const onosSuma = ona[0] + ona[1] + ona[2] + ona[3] + ona[4];
console.log(onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazimiu vidurkis:', onosVidurkis);

console.log('--------------');

// Reikia nupirkti: pomidoras, agurkas, svogunas, bulve.
const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];

let sakinys = 'Reikia nupirkti: ';
let index = 0;

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += '.';

console.log(sakinys);

const sakinys2 = 'Reikia nupirkti: ' + vegs.join(', ') + '.';
console.log(sakinys2);

const sakinys3 = `Reikia nupirkti: ${vegs.join(', ')}.`;
console.log(sakinys3);

console.log('------------------');

//  0, 1, 2
// 10, 2, 8
const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

const arTuri7 = jonas.includes(7);
console.log(arTuri7);

const arTuri2 = jonas.includes(2);
console.log(arTuri2);

const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);

const kelintas10 = jonas.indexOf(10);
console.log(kelintas10);

const kelintas8 = jonas.indexOf(8);
console.log(kelintas8);

const kelintas7 = jonas.indexOf(7);
console.log(kelintas7);

const kelintas777 = jonas.indexOf(777);
console.log(kelintas777);