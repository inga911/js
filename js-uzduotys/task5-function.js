console.clear();
// Funkcija pavadinimu “tusciaFunkcija”:
    // a. nepriima jokių kintamųjų
    // b. neatlieka jokios vidinės logikos
    // c.gražina boolean tipo reikšmę “false”
        // TESTAS:
        //  i. console.log( tusciaFunkcija() );
        //  ii. rezultatas: false

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());



console.log('-------------------------------------------');


// 2. Funkcija pavadinimu “daugyba”:
    // priima du skaičiaus tipo kintamuosius
    // atskirame kintamajame įsimena sandaugos reikšmę
    // gražina saudaugos rezultatą
        // TESTAI:
        // console.log( daugyba( skaicius1, skaicius2 ) );
        // console.log( daugyba( skaicius3, skaicius2 ) );
        // console.log( daugyba( skaicius1, skaicius3 ) );
        // rezultatas: teisingos reikšmės;




function daugyba(a, b) {
   return a * b;
}
console.log(daugyba(8, 2));
console.log(daugyba(15, 2));
console.log(daugyba(8, 15));


console.log('-------------');



// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    // priima vieną kintamąjį
    // jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    // priešingu atveju, funkcija tęsia darbą
    // į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    // gražina skaitmenų kiekį
        // TESTAI:
            // console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            // rezultatas: 1
            // console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            // rezultatas: 3
            // console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            // rezultatas: 11
            // console.log( skaitmenuKiekisSkaiciuje( true ) );
            // rezultatas: “Pateikta netinkamo tipo reikšmė.”
            // console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            // rezultatas: “Pateikta netinkamo tipo reikšmė.”
            // console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            // rezultatas: “Pateikta netinkamo tipo reikšmė.”

function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== "number") {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    let skaitmenuKiekis = skaicius.toString().length;
    return skaitmenuKiekis;
}
 console.log(skaitmenuKiekisSkaiciuje(5));
 console.log(skaitmenuKiekisSkaiciuje(781));
 console.log(skaitmenuKiekisSkaiciuje(37060123456));
 console.log(skaitmenuKiekisSkaiciuje(true));
 console.log(skaitmenuKiekisSkaiciuje("asd"));
 console.log(skaitmenuKiekisSkaiciuje(NaN)); //// kodel rodo 3?

 console.log('---------------------------------------');


 
// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
    // TESTAI:
    // console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
    // rezultatas: 1
    // console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
    // rezultatas: 3
    // console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
    // rezultatas: 78
    // console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
    // rezultatas: 69
    // console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
    // rezultatas: -1
    // console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
    // rezultatas: “Pateikta netinkamo tipo reikšmė.”
    // console.log( didziausiasSkaiciusSarase( [] ) );
    // rezultatas: “Pateiktas sąrašas negali būti tuščias.”

    
    function didziausiasSkaiciusSarase(list) {
        if (!Array.isArray(list)) {
          console.log("Pateikta netinkamo tipo reikšmė.");
          return;
        }
        if (list.length === 0) {
          console.log("Pateiktas sąrašas negali būti tuščias.");
          return;
        }
        
        let max = list[0];
        for (let i = 1; i < list.length; i++) {
          if (list[i] > max) {
            max = list[i];
          }
        }
        return max;
      }

    console.log(didziausiasSkaiciusSarase([1]));
    console.log(didziausiasSkaiciusSarase([1, 2, 3]));
    console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
    console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
    console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
    console.log(didziausiasSkaiciusSarase(['pomidoras']));
    console.log(didziausiasSkaiciusSarase([]));

    console.log('---------------------------------------');

    // Funkcija pavadinimu “isrinktiRaides”:
    // priima du kintamuosius:
    // pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
    // antrasis nurodo kas kelintą raidę išrinkti
    // patikrinti, ar pirmasis kintamasis yra teksto tipo:
    // jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
    // priešingu atveju tęsiame darbą
    // patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
    // jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
    // priešingu atveju tęsiame darbą
    // patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
    // jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
    // priešingu atveju tęsiame darbą
    // patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
    // jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
    // priešingu atveju tęsiame darbą
    // patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
    // jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
    // priešingu atveju tęsiame darbą
    // išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
    // išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
    // gražina rezultatą
    // TESTAI:
    // console.log( isrinktiRaides( “abcdefg”, 2 ) );
    // rezultatas: “bdf”
    // console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
    // rezultatas: “cfil”
    // console.log( isrinktiRaides( “abc”, 0 ) );
    // rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
    // console.log( isrinktiRaides( “abc”, 4 ) );
    // rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
    // console.log( isrinktiRaides( 1561, 2 ) );
    // rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
    
    function issirinktiRaides(text,a) {
        if (typeof text !== 'string') {
            return "Pirmasis kintamasis yra netinkamo tipo.";
        }
        if (typeof text !== '' && text <= [100]) {
            return "Pirmojo kintamojo reikšmė yra netinkamo dydžio."
        }
        if (typeof a !== "number") {
            return "Antrasis kintamasis yra netinkamo tipo."
        }
        if (typeof a >= 0){
            return "Antrasis kintamasis turi būti didesnis už nulį."
        }
        if (a < text.length) {
            return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
        }
        for (let i = 0; i < abc.length; i += a) {
            text += abc[i];
            console.log(i, abc[i], text);
        }
    }
    console.log(issirinktiRaides('abcdefg', 2));