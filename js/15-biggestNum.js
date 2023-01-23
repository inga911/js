console.clear();

// 1 ETAPAS, KAI FUNKCIJA YRA ATEJUSI SU PIRMINIU PARAMETRU VALIDACIJA
function biggestNum(list){
    if(!Array.isArray(list) || list.length === 0){ //jeigu list yra ne arrejus, ismes error
        return 'ERROR: duok ne tuscia skaiciu sarasa'
    }
// 2 ETAPAS- LOGIKA, KAI BANDOMA SUSKAICIUOTI BUSIMA REZULTATA
    let biggest = -Infinity; // imam -infinity kad apimtu visus galimus skaicius
    //let biggest = list[0]; //paima pirmaji skaitmeni masyve, ir eina toliau per visus skaicius, jeigu tas 0 nera didziausias tada iesko antro ir t.t.

    for (let i=0; i < list.length; i++){ //i=biggest=0 | i maziau uz saraso apimti | 
        const num = list[i]; //num=skaicius --> saraso i-narys
        //console.log(i, num); //isspauzdinam terminale i=pozicija ir num=koks ksaicius yra po ta pozicija
        if (typeof num !=='number' || !isFinite(num)){
            continue;//statement
        }
        if ( num > biggest){//jeigu tas num yra didesnis uz jau zinoma -biigest- reiksme
            biggest = num; // tai tada tas biggest jau tampa didesnis uz num jau pries tai zinoma skaiciu
        } 

    }
// 3 ETAPAS  REZULTATO VALIDACIJA, AR TAI KAS SUSKAICIUOTA YRA LOGISKAS DALYKAS
   if (biggest === -Infinity){ // jei mano biggest reiksme dar vis -infinity tada meta klaida
    return 'ERROR: sarase nerastas nei vienas snormalus skaicius'
   }


// 4 ETAPAS - REZULTATO GRAZINIMAS
    return biggest;
}





//NETINKAMI
console.log(biggestNum());
console.log(biggestNum(true));
console.log(biggestNum('awsdf'));
console.log(biggestNum(undefined));
console.log(biggestNum(null));


console.log(biggestNum([0]),'-->', 0);
console.log(biggestNum([1, 2, 3]), '-->', 3);
console.log(biggestNum([1, 2, 3, 4, 5, 6]), '-->', 6);
console.log(biggestNum([0, 5, 9, 7, 3, 4]), '-->', 9);
console.log(biggestNum([ -5, -9, -7, -3, -4]), '-->', -3);
console.log(biggestNum([ -5, -9, Infinity, -7, -3, -4]), '-->', -3);
console.log(biggestNum([ -5, -9, -7, -3, -4, Infinity]), '-->', -3);
console.log(biggestNum([Infinity -5, -9, -7, -3, -4]), '-->', -3);

console.log(biggestNum([], false, true, null, undefined, 'dvgvx'),);//Turetu mesti klaida, nes nera normalaus skaiciaus


