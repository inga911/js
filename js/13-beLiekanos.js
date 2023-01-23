console.clear();

function beLiekanos (start, end, divide){
    let count = 0; // kiekis kurie skaiciai  dalinasis, o kurie ne

    // for (let i = start; i <= end; i++){
    //     console.log(i, i % divide, i % divide === 0);//i=skaicius kuri ketiname dalinti | i % divide = padalinto skaiciaus liekana | i % divide === 0 nustato true ar false
    //     if (i % divide ===0 ){ //isspausdina skaiciu, kiek turi liekanu jei 0 tai neturi, ir true ar false (true jei neturi liekanu)

    //     }
    // }
/*
    //NORINT SUMAZINTI SKAICIAVIMU SKAICIU
    for (let i = start; i <= end; i+=divide){
        count++; //sspausdina tik tuos variantus kurie neturi liekanos
    }
*/





    for (let i = start; i <= end; i++){
        if (i % divide === 0){ // jei i dalinant is divide liekana yra 0, dalijasi be liekanos
            count++; //tada count galime padidinti 1vnt --> ++
        }
       // console.log(i, i % divide);
        //jei naudosime paprtasta dalybos zenka "/" tai gausime tikruosius skaicius po kablelio
        //todel norint nustatyti liekanas reikia naudoti "%"
    }
  
    return count;

}

console.log(beLiekanos(0, 11, 3), '-->', 4); //nuo 0 iki 11 dalinasi is 3 be liekanos bus 4 skaitmenys
console.log(beLiekanos(0, 11, 5), '-->', 3);
console.log(beLiekanos(0, 11, 7), '-->', 2);

console.log('--------------');
// console.log(beLiekanos(0, 11), '-->', 12); //jei neduodame kokios reiksmes tada by default jis bus = 1

console.log(beLiekanos(8, 31, 3), '-->', 8);
console.log(beLiekanos(8, 31, 5), '-->', 5);
console.log(beLiekanos(8, 31, 7), '-->', 3);

console.log('--------------');
console.log(beLiekanos(-18, 18, 3), '-->', 13);
console.log(beLiekanos(-18, 18, 5), '-->', 7);
console.log(beLiekanos(-18, 18, 7), '-->', 5);

console.log('--------------');