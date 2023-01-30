console.clear();


//kiekviena funkcija privalo priimti bent po viena reiksme
function reverseString (string) {
    if (typeof string !== 'string') { //apskritai paklausia jei tu nessi stringo tipas tada error
        return 'ERROR: reikalngas tekstas';
    }
    if (string === ''){//jeigu yra tuscias string
        return 'ERROR: reikalngas ne tuscias tekstas';
    }

    let atsakymas = '';// tipine pradine reiksme pvz jei busimas ats turetu buti masyva turetume rasyti [];


    
/*  0
    atsakymas = string.split(''); //pasimboliui iskaido masyva (su visais tarpeliais)
    atsakymas = string.split('').reverse(); //ispradziu isskaido. paskui apsuka
    
    atsakymas = string.split('').reverse().join(); // ir tada join sujungia viska kartu | cia yra 3 ciklai, jis maziau  efektyvus, nes daugiau kartu pereina per koda | kiekvienas metodas - naujas ciklas

    */

/*
    // 1  IMI IS GALO IR SUJUNGTI IS EILES
    for (let i = string.length -1; i >=0; i--){             //string beveik kaip masyvas, todel gamlima pereiti per pirminio teksto simbolius su ciklu
        console.log(i, string[i]);              //ispausdina kiekvieno simbolio indexo numeri su atitinkama raide
         console.log(i, string[i], atsakymas); // su situo pereiname per string is galo i prieki o atsakymas tik parodo kiekvieno zingsnio rezultata
    }
*/

    // 2  IMTI RAIDES IS PRIEKIO IR DETI PRIES TEKSTA
    for ( let i = 0; i < string.length; i++){
        atsakymas = string[i] + atsakymas; // tai reiskia kad string[i] = nauja raide yra dedama jau pries teksta
       
    }
    //IS GALO DETI PRIES TEKSTA
//01234
//abcde

// 0 a -> a
// 0 b -> ba
// 0 c -> cba
// 0 d -> dcba
// 0 e -> edcba

/*
    // 3  EITI IS PRIEKIO BET RAIDES IMTI IS GALO
    for ( let i = 0; i < string.length; i++){
        atsakymas += string[string.length - i -1];
    }
//01234
//abcde

// 0 -> 4 : e - a
// i-indexas    simbolis=string[string.length - i - 1]  // is teksto paimam teksto ilgi (kas yra 5) ir atimam i=0 (o 5tos raides negaliu paiimti tai atimam dar 1)
5-0-1=4 ima e | 5-1-1=3 ima d | 5-1-2=2 ima c | 5-1-3=1 ima b | 5-1-4= ima a
----------------------------
// 0            e - 4     itertatorius ima 4 
// 1            d - 3           --
// 2            c - 2 
// 3            b - 1 
// 4            a - 0      iteratorius ima 0
const lygus teksto ilgiui
*/

    return atsakymas
}

console.log(reverseString(), '-->', '');
console.log(reverseString(5), '-->', '');
console.log(reverseString(['asdbsbs']), '-->', '');
console.log(reverseString(''), '-->', '');
console.log(reverseString(true), '-->', ''); //buti vien tik stringu nepakanka, turi buti bent vienas simbolis
console.log(reverseString('abc'), '-->', 'cba');
console.log(reverseString('labas'), '-->', 'sabal');
// console.log(reverseString('alus'), '-->', 'sula');
// console.log(reverseString('x'), '-->', 'x');
