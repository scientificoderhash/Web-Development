console.log("Exercise-11 => Calculate the factorial")

let arr = []
function factorial(a) {
   for (let i = a; i > 0; i--) {
    // console.log(arr.push(i))
    arr.push(i)
   }
}
console.log(factorial(10))
// console.log(arr)

const red = (a, b)=>{
    return a*b
}

console.log(arr.reduce(red))

