console.clear();
/*
OOP <--> class (siejasi)

new Class() --> sukuria tos Class'es objekta

||  --> arba  (dirba kaip if) 0 ir undenfied kaip negatyvi reiksme tai sie || nepakeis
??  --> arba atfiltruoja nenormalias reiksmes, jautriau reaguoja i keiciamas reiksmes tarp new Class
*/

//class - neturi parametru tarp ()
//class pavadinimas turi buti is didziuju raidziu
//class js failas turi prasideti didziaja raide 
//vardas, amzius.. yra funkcijos lokalus kintamieji
//klases savo viduje turi metodus: CONSTRUCTOR (){}; 
//jei nori pakeisti pvz varda, geriausia per funkcija/metoda



class Person { 
// #name = ''; ir tada reikia prirasyti prie this.#age = 
// #age = 0; privacia info pasiekia tik metodai
    constructor(vardas, amzius, options = {}) { // cia galima pasilikti tik privaloma informacija, o options{}- bus extra bet jie rasomi tarp NEW | constructor - yra konkretus parametru funkcijos metodas
        this.name = vardas; // raktazodziui NAME  = priskiriamas vardas, kad atsimintu eigoje
        this.age = amzius; 
        this.period = options.laikasPilve || 9; //laiaksPilve prirasom kada default reiksme gali kisti tarp new Person // kiek laiko buvo pilve // default reiksme
        this.teethCount = options.dantu || 0;  //jeigu tarp new ir yra 0 tai nebutina ten rasyti, priskirs si 0 // default reiksme
        console.log(options); //galim iisispausdinti kas matoma is tu prirasytu options
    } 

            // pridedam funkcija/metoda ir tarp ju galime sukokretinti validacijas pvz vardas butu is didziosios raides
    sayHi () {
        return `Labas, as ${this.name}!`; // tarp backticku
    }
    

    updateTeeth(newCount) {           // arba
        if (!Number.isInteger(newCount) || newCount < 0 || newCount > 100){
        // if (typeof newCount !== 'number'){
            return 'ERROR:.. '
        }
        this.teethCount = newCount;
        return 'OK'; // kad jei pavyko kad negrazintu undefiend
    }

    printTeethSentence() {
        return `Labas, as vardu ${this.name} ir turiu ${this.teethCount} dantu!`
        }


    updateName(newName){ //arba setName
        if (typeof newName !== 'string' || newName === ''){
            return 'Error:..';
        }
        this.name = newName;
        return 'Ok';

    }

}

const petras = new Person('Petras', 99, {laikasPilve: 8});
const maryte = new Person('Maryte', 88, {dantu: 1});
const jonas = new Person('Jonas', 77);
const ona = new Person('Ona', 66, {laikasPilve: 7, dantu: 2}); 
//{rasome kai nera default reiksmiu o kazkas extra}
//butina prirasyti NEW kuriant nauja tos klases objekta
//kuriant nauja jau duodami parametrai tarp ('')
//kai kuriam nauja new ... tada jau perduodam tai i construktor parametru bloka.


console.log(petras);
console.log(maryte);
console.log(jonas);
console.log(ona);
console.log(petras, '-->', 'Person { name: "Petras", age: 99 }');
console.log(petras.age, '-->', '99');
console.log(petras.name, '-->', 'Petras');
console.log(maryte, '-->', 'Person { name: "Maryte", age: 88 }');
console.log(maryte.age, '-->', '88');
console.log(maryte.name, '-->', 'Maryte');

console.log(petras.sayHi());
console.log(maryte.sayHi());
console.log(ona.sayHi());

petras.updateName('Petriukas');
petras.updateTeeth(2);
petras.updateName('Petriukas');
console.log(petras.teethCount);
console.log(petras.printTeethSentence());


console.log(ona.age);
ona.age = 20; // taip galime priskirti nauja reiksme,o tarp metodo nustatyti kad reiksme butu ivesta tinkamai, pvz butu skaiciai o ne string
console.log(ona.age);