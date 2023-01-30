console.clear();
/*
IF - loginis palyginimas

Sablonas :
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else{}

{} zymi logikos dali

LOGINIAI OPERATORIAI:
-&& (AND)
-|| (OR)

palyginimo operatoriai:
-visi: >,   <,   ==,   !=,   <=,   >=, ===,  !==
-naudotini: >,   <,   <=,   >=,  ===,   !==   //saugiausia naudoti su grieztomis lygybemis
-nenaudotini: ==,   !=,

*/

if (4>22) { //terminale parasys tik tuo atveju kai tenkins salyga
    console.log('tiesa');
} else {
    console.log('melas');
}

if (7 == 7){
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 8){ //!=NE pvz nelygu
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 89){
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 <= 89){
    console.log('maziau arba lygu');
} else {
    console.log('daugiau');
}


if(4 == '4'){ //skirtingu tipu reiksmes, bet reiksmes yra lygios 4
    console.log('lygu');
}else {
    console.log('nelygu');
}

if(Infinity == 'Infinity'){ //skirtingu tipu reiksmes, bet reiksmes yra lygios 
    console.log('lygu');
}else {
    console.log('nelygu');
}


if(0 == false){ //skirtingu tipu reiksmes, bet reiksmes yra lygios nes false=0 o true=1
    console.log('lygu');
}else {
    console.log('nelygu');
}

console.log('-------------');

if(0 == ''){ //tuscia teksta priskiria kaip nuli taip pat jei butu false vietoje 0, ir atvirksciai su true kai yra jau koks tekstas
    console.log('lygu');
}else {
    console.log('nelygu');
}


if ('f' > 'b'){// bus daugiau, ziuri pagal abecele a bus daugiausia net uz A
    console.log('daugiau');
} else {
    console.log('maziau arba lygu'); // visada atkreipti demesi i ta < ar > =
}

if ('f' > 'bsfav'){ // f vistiek daugiau nes rikiuojasi pagal abecele
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if ('a' > 'A'){ //mazosios raides yra pirmesnes abeceleje, didziosios yra mazesnes uz mazasias
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if (7 === '7'){  // nelygus nes '7' skirtingas duomenu tipas, is pradziu tikrina tipa o paskui reiksmes
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}


console.log('-----ELSE IF--------');




const diena = 8;


if (diena ===1 ) {
    console.log('pirmadienis');
}else  if (diena ===2) {
    console.log('antradienis');
}else  if (diena ===3) {
    console.log('treciadienis');
}else  if (diena ===4) {
    console.log('ketvirtadienis');
} 
else  if (diena ===5) {
    console.log('penktadienis');
} 
else  if (diena ===6) {
    console.log('sestadienis');
} 
else  if (diena ===7) {
    console.log('sekmadienis');
} else {
    console.log('nezinau tokios dienos');
}

console.log('-----ELSE IF--- NESTING--------');

// CODE NESTING - nestinimas

const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('penktadienis');
                } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokios dienos savaiteje nera...');
                        }
                    }
                }
            }
        }
    }
}

console.log('--------------');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = true;

if (temperatura < nuoKadaSilta) {
    if (arLyja) {
        console.log('Nera silta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nera silta ir nelyja: reikia striukes');
    }
} else {
    if (arLyja) {
        console.log('Silta ir lyja: varom be maike');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

if (temperatura >= nuoKadaSilta && !arLyja) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log('Silta ir lyja: varom be maike');
} else if (temperatura < nuoKadaSilta && arLyja) {
    console.log('Nera silta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nera silta ir nelyja: reikia striukes');
}