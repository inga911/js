console.clear();

function nthLetter(str, step) {
    if (typeof str !== 'string' || str === '') {
        return 'ERROR: pirmasis parametras turi buti ne tuscias tekstas';
    }
    if (!Number.isInteger(step)) {
        return 'ERROR: antrasis parametras turi buti normalus skaicius';
    }

    if (str.length < step) {
        return 'ERROR: tekstas per trumpas lyginant su norimu zingsniu';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti lygus nuliui (0)';
    }

    let text = '';

    if (step > 0) {
        for (let i = step - 1; i < str.length; i += step) {
            text += str[i];
        }
    } else {
        for (let i = str.length + step; i >= 0; i += step) {
            text += str[i];
        }
    }

    return text;
}

// pirmas param
console.log(nthLetter());
console.log(nthLetter(1456, 2));
console.log(nthLetter(true, 2));
console.log(nthLetter(null, 2));
console.log(nthLetter(undefined, 2));
console.log(nthLetter([], 2));
console.log(nthLetter('', 1));

// antras param
console.log(nthLetter('abc'));
console.log(nthLetter('abc', 'adsf'));
console.log(nthLetter('abc', true));
console.log(nthLetter('abc', false));
console.log(nthLetter('abc', null));
console.log(nthLetter('abc', undefined));
console.log(nthLetter('abc', []));
console.log(nthLetter('abc', NaN));
console.log(nthLetter('abc', Infinity));
console.log(nthLetter('abc', -Infinity));
console.log(nthLetter('abc', 3.14));
console.log(nthLetter('abc', -3.14));

console.log(nthLetter('abc', 4));
console.log(nthLetter('abc', 0));

console.log(nthLetter('abcdefg', 2), '-->', 'bdf');
console.log(nthLetter('abcdefghijkl', 3), '-->', 'cfil');
console.log(nthLetter('abcdefghijkl', 4), '-->', 'dhl');

console.log(nthLetter('abcdefg', -2), '-->', 'fdb');
console.log(nthLetter('abcdefghijkl', -3), '-->', 'jgda');
console.log(nthLetter('abcdefghijkl', -4), '-->', 'iea');


/*

for (let i = step - 1; i < str.length; i += step) {
    text += str[i];

}

STEP = -2

i = -3; -3 < 8 = true
i = -5; -5 < 8 = true
i = -7; -7 < 8 = true
i = -9; -9 < 8 = true
i = -11; -11 < 8 = true
i = -13; -13 < 8 = true
i = -15; -15 < 8 = true



i = -Infinity; -Infinity < 8 = true



*/