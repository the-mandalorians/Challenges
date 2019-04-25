// function highAndLow(numbers){
//     numbers = numbers.split(" ");
//     for (var i = 0; i < numbers.length; i++){
//         numbers[i] = parseFloat(numbers[i]);
//     }
//     console.log(numbers);
//     return(Math.max(...numbers)).toString() + " " + (Math.min(...numbers)).toString();
// }
//
// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
//
// var numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";




// * define a function that takes in an arr.length and returns this progression
// length: 1 output= A: [t, f]
// length: 2 output= A: [t]*2, [f]*2] B: [t, f]*2
// length: 3 output= A: [t*4, f*4] B: [[t*2, f*2]*2] C: [[t,f]*8]
// length: 4 output= A: [t*8, f*8] B: [[t*4, f*4]*2] C: [t*2, f*2]*4] D: [t,f]*16
// etc.


// a    a b   a b c   a b c d
// -    ---   -----   -------
//     t    t t   t t t   t t t t
// f    t f   t t f   t t t f
// f t   t f t   t t f t
// f f   t f f   t t f f
// f t t   t f t t
// f t f   t f t f
// f f t   t f f t
// f f f   t f f f
// f t t t
// f t t f
// f t f t
// f t f f
// f f t t
// f f t f
// f f f t
// f f f f


truthtable = [];
function somefunction(num) {
    for (var i = 1; i < num; i++){
        if (i % 2 === 0){
            truthtable.push([false]);
        }else{
            truthtable.push([true]);
        }
    }
    console.log(truthtable);
}

somefunction(1);

// var table = [  [true ,true],
//                     [true ,false],
//                     [false,true ],
//                     [false,false ] ];
// table[0] = table[0].toString();