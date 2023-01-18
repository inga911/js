console.clear();
/*
TYPEOF (tipo nustatymas)
operatorius
*/

console.log(typeof 5);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof -3.14);

console.log(typeof '');
console.log(typeof 'earsgf');

console.log(typeof true);
console.log(typeof false);

console.log(typeof function () { });

console.log(typeof []);
console.log(typeof [5]);
console.log(typeof ['dfsd']);
console.log(typeof [true]);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});

console.log('----------');
console.log(Array.isArray(5));
console.log(Array.isArray('sgeret'));
console.log(Array.isArray(true));
console.log(Array.isArray(function () { }));
console.log(Array.isArray(null));
console.log(Array.isArray({}));

console.log(Array.isArray([]));