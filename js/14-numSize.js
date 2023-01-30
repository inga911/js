console.clear();


function numSize(num){
    // if (!Number.isInteger(num)){   //!=jeigu nera sveikasis skaicius tada gausim return
    //     return 'ERROR: duok skaiciu';
    // } 
   //------------------ 

 /*  
    if (typeof num !== 'number' || num === Infinity || num === -Infinity || '' + num === 'NaN'){   //!=jeigu nera sveikasis skaicius tada gausim return || '' + num === 'NaN --> suciumpame NaN reiksme, ir neuzskaito jos kaip skaiciaus
        return 'ERROR: duok skaiciu';
    }
*/

// DESIMTAINIAMS SKAICIAMS
 if (typeof num !== "number" || !isFinite(num)){ //nera skaicius ir nera baigtinis (desimtainis skaicius)
    return 'ERROR: duok skaiciu';
 }
 

/*// ATPAZINTI KAD SKAICIUS TURI KABLELI
if (numAsText.includes('.')){ // jeigu turi tada ji pasalinam su dar vienu -1
    size--;
}
*/




    const numAsText = '' + num;//kadangi .length veikia tik su stringais(arba masyvais), siuo atveju num = 1 --> paverciam num = '1' --> ir ats 1
    let size = 0;

    size = numAsText.length;

    if (num < 0){ //kai skaicius yra su minusu, bet jo nereikia i traukti i bendra skaiciu
        size--;//tai isbendro skaiciaus atimti 1 (1=minuso zenklas)
    }

    if (num % 1 !== 0){ //nes liekana gali buti ir neigiamas skaicius; tik sveikasis(teigiamas ar neigiamas) skaicius dalinasi tvarkingai is vieno
        size--; //betkokia liekana isskyrus 0 yra liekana
    }


    return size;
}

    //[] -> num.length
    //'' -> num.length
    // number -> neturi tokios funkcijos

    //BLOGI VARIANTAI SIAI FUNCIJAI:
    console.log(numSize());
    console.log(numSize(true));
    console.log(numSize('true'));
    console.log(numSize([]));
    console.log(numSize(null));
    console.log(numSize(undefined));
    console.log(numSize(Infinity));
    console.log(numSize(-Infinity));
    console.log(numSize(NaN));


console.log(numSize(5), '-->', 1);
console.log(numSize(567), '-->', 3);
console.log(numSize(12345678901), '-->', 11);

console.log(numSize(-5), '-->', 1);
console.log(numSize(-567), '-->', 3);
console.log(numSize(-12345678901), '-->', 11);
console.log(numSize(0), '-->', 1);
console.log(numSize(-0), '-->', 1);

console.log(numSize(3.14), '-->', 3);