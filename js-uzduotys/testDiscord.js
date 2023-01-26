let parametras = [{
    name: 'A',
    marks: [3, 5, 7, 8, 10]
    },
    {
    name: 'B',
    marks: [3, 9, 7, 8, 10]
    },
    {
    name: 'C',
    marks: [3, 5, 7, 8, 2, 2, ]
    },
    {
    name: 'D',
    marks: [3, 5, 7, 3, 10]
    },
    {
    name: 'E',
    marks: [3, 4, 7, 8, 10]
    },
    {
    name: 'F',
    marks: [3, 5, 7, 8, 2]
    }
]


function test(parametras){
    console.log(parametras);
    for (let i=0; i < parametras.length; i++){
        console.log(a[i]);
        let sum = 0;
        console.log(`===`, parametras[i].marks.length);// a --> vieta kurioje yra visi objektai, o i -- > tai objekto vietos
        for (let j = 0; j < parametras[i].marks.length; j++){
            console.log(parametras[i].pas[j]);
            sum += parametras[i].pas[j];
        }
        console.log(parametras[i].name, `vidurkis :`, sum/parametras[i].marks.length);
    }
    return ;
}

console.log();

//kai i=0 dirbam su pirmu 
// let sum = 0; vieta kurioje kaupsim suma, 
//let sum = 0; jis turi buti butinai pries pradzio ciklo pradzia
// masyvui visada beveik reikes ciklo

console.clear();
console.log('----------->');

function invert(array) {
    if (array > 0){
      const array1 = array * -1;
      return array1;
    }if (array < 0){
      const array2 = array * -1;
      return array2;
    }
   
  }

console.log(invert([1,2,3,4,5]), '==>', [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), '==>', [-1,2,-3,4,-5]);



function reverseWords(str){
    if (str !== array){
      return [str]
    }
    let reversed = str.reverse();
    return reversed; 
  }

  console.log(reverseWords("The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"));