console.clear();
/*
TYPEOF (tipo nustatymas)
operatorius
*/

console.log(typeof 5, '-->', 'number');
console.log(typeof Infinity, '-->', 'number');
console.log(typeof NaN, '-->', 'number');
console.log(typeof -3.14, '-->', 'number');

console.log(typeof '', '-->', 'string');
console.log(typeof 'earsgf', '-->', 'string');

console.log(typeof true, '-->','boolean');
console.log(typeof false, '-->','boolean');

console.log(typeof function () { }, '-->','function');

console.log(typeof [], '-->', 'object');
console.log(typeof [5], '-->', 'object');
console.log(typeof ['dfsd'], '-->','object');
console.log(typeof [true], '-->','object');

console.log(typeof undefined, '-->', 'undefined');
console.log(typeof null, '-->', 'object');
console.log(typeof {}, '-->', 'object');

console.log('----------');
console.log(Array.isArray(5), '-->', 'false');
console.log(Array.isArray('sgeret'), '-->', 'false');
console.log(Array.isArray(true), '-->', 'false');
console.log(Array.isArray(function () { }), '-->', 'false');
console.log(Array.isArray(null), '-->', 'false');
console.log(Array.isArray({}), '-->', 'false');

console.log(Array.isArray([]), '-->', 'true');