console.clear();

function daznis(str) {
    const abc = {};

    for (const symbol of str) {
        if (symbol in abc) {
            abc[symbol]++;
        } else {
            abc[symbol] = 1;
        }
    }

    let max = 0;
    for (const symbol in abc) {
        if (abc[symbol] > max) {
            max = abc[symbol];
        }
    }

    const maxSymbols = [];
    for (const symbol in abc) {
        if (abc[symbol] === max) {
            maxSymbols.push(symbol);
        }
    }

    return { symbols: maxSymbols, max };
    // return [maxSymbols, max];
}

console.log(daznis('vasara'));
console.log(daznis('cipolinas'));
console.log(daznis('savas'));
console.log(daznis('mama'));