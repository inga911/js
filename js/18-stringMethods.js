console.clear();

const abc = 'abcdefg';

console.log('---------.at()------------------');

console.log(abc.at(2), abc[2]);
console.log(abc.at(-2), abc[abc.length - 2]);

console.log('----------.charAt()-/-.charCodeAt()---------------');

console.log(abc.charAt(2));
console.log(abc.charCodeAt(0));

console.log('a', 'A', 'a' > 'A');
console.log('a'.charCodeAt(0), 'A'.charCodeAt(0));

console.log('---------.indexOf()------------------');

console.log(abc.indexOf('b'));
console.log(abc.indexOf('B'));// bus -1 nes tokio simbolio neranda
console.log(abc.indexOf('de')); //bus 3 nes prasideda nuo 3

console.log('------------.repeat()---------------');

console.log('a'.repeat(5), '-->', 'aaaaa' );
console.log('abc'.repeat(5), '-->', 'abcabcabcabcabc');

let str = '';
for (let i = 0; i < 5; i++){
    str += 'abc';
}
console.log(str, '-->', 'abcabcabcabcabc');

console.log('----------.replace()-----------------');

console.log('Labas rytas'.replace('rytas', 'vakaras') , '-->', 'Labas vakaras');
console.log('Labas rytas'.replace('Katu', 'vakaras'), '-->', 'Labas rytas');//nepakeis nes neranda 'kattu'

//replace
console.log('lalalalalala'.replace('la','ma'), '-->', 'lamalalalalala');
//replaceAll
console.log('lalalalalala'.replaceAll('la', 'ma'), '-->', 'lamamamamama');

console.log('----------.split()-----------------');

const abcArray = abc.split('f')
console.log(abcArray); //parasys viska iki f raides [jos nepaims] ir tada viska kas po f raides
//siuo atveju kiekviena raide bus tarp ''

const sakinys = 'Labas rytas tau';
const zodynas = sakinys.split(' ');
console.log(zodynas, '-->', );// kiekvienas zodis atskirs tarp kabuciu ir tarpu


console.log('---------CASE()------------------');

console.log('Labas'.toUpperCase());
console.log('LaBas'.toLowerCase());
console.log('Labas'.toLocaleLowerCase());

// vardas -> Vardas
// vARDAS -> Vardas
// Vardas -> Vardas

function formatName(name) {
 return name[0].toUpperCase() + name.slice(1).toLowerCase();//0-pirma raide. 1-nuo antros raides mazosios
}


console.log(formatName('vardas'), '-->', 'Vardas');
console.log(formatName('Vardas'), '-->', 'Vardas');
console.log(formatName('vARDAS'), '-->', 'Vardas');
console.log(formatName('VARDAS'), '-->', 'Vardas');


console.log('---------.toString()------------------');

const num = 5;
console.log(num.toString()); //taps string terminale[bet be kabuciu bus]
console.log('' + num);

console.log('' + 777); // variantas kai nereikia kintamojo nurodyti
console.log((777).toString());//777 turi buti tarp skliausteliu


console.log('-------.trim()-------------------');

const gg = 'Good game            ';
console.log(gg.trim().length);// pasalina tarpus[priekio ir galo bet ne vidurio] - nepaima i bendra ilgio skaiciu tu tarpu
//yra su end ir start sitas trim


