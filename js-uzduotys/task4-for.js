console.clear();
// 1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    // a. 0 … 0
    // b. 0 … 4
    // c. 0 … 100
    // d. 574 … 815
    // e. -50 … 50
    // f. -70 … 30
// 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    // a.pvz.: “abcdef” -> “fedcba”
// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    // a. 0 - 11
    // b. 8 - 31
    // c. -18 - 18
    // d. rezultatą pateikti tokiu formatu:
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

// 1.

function sumInterval(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumInterval(0, 0));
console.log(sumInterval(0, 4));
console.log(sumInterval(0, 100));
console.log(sumInterval(574, 815));
console.log(sumInterval(-50, 50));
console.log(sumInterval(-70, 30));


console.log('2----------------------------------------');

// 2.

function reverse(str){
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--){
       reversedString = reversedString + str[i];
}
return reversedString;
}

console.log(reverse('hello'));
console.log(reverse('Laba diena!'));



console.log('3----------------------------------------');

// 3.

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    // a. 0 - 11
    // b. 8 - 31
    // c. -18 - 18
    // d. rezultatą pateikti tokiu formatu:
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

        function skaiciuIntervalas(start, end, divisor) {
            let count = 0;
            for (let i = start; i <= end; i++) {
              if (i % divisor === 0) {
                count++;
              }8
            }
            return count;
          }
    
          console.log(skaiciuIntervalas(0, 11, 3));
          console.log(skaiciuIntervalas(0, 11, 5));
          console.log(skaiciuIntervalas(0, 11, 7));
          console.log('----------');

          console.log(skaiciuIntervalas(-18, 18, 3));
          console.log(skaiciuIntervalas(-18, 18, 5));
          console.log(skaiciuIntervalas(-18, 18, 7));
          console.log('----------');
          
          console.log(skaiciuIntervalas(8, 31, 3));
          console.log(skaiciuIntervalas(8, 31, 5));
          console.log(skaiciuIntervalas(8, 31, 7));