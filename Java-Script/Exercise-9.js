console.log("This is Exercise-9, video- 59 with the task of making Faulty Calculator")
let random = Math.random()
// function faultycalc(a, operation, b){

//     if (random>0.1) {
//         if (operation === "+") {
//             return a+b
//         }
//         else if(operation === "-"){
//             return a-b
//         }
//         else if(operation === "*"){
//             return a*b
//         }
//         else if(operation === "/"){
//             return a/b
//         }
//     }

//     else {
//         if (operation === "+") {
//             return a*b
//         }
//         else if(operation === "-"){
//             return a/b
//         }
//         else if(operation === "*"){
//             return a-b
//         }
//         else if(operation === "/"){
//             return a+b
//         }
//     }
// }

// console.log(random)
// console.log(faultycalc(2, "+", 3))

let a = prompt("Type first number");
let b = prompt("Write the operation");
let c = prompt("Type second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

console.log(random);
console.log(a);
console.log(b);
console.log(c);


if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
    // eval($(a) + $(b) + $(c))
}
else {
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
    // eval($(a) + $(b) + $(c))
}

