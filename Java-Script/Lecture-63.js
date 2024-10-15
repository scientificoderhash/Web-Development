// console.log("This is tutorial for Arrays");

// let a = ["Krishna", 1896, true]
// //index=    0          1    2


// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a.length)
// //Arrays are mutable(can be changed)
// a[1] = 1926
// console.log(a)
// //Arrays are objects in javascript
// console.log(typeof a)
// console.log(a.toString())
// //need to add a separator in join function
// console.log(a.join("-"))
// console.log(a.pop())
// console.log(a.push("Chaitanya"))
// console.log(a)
// console.log(a.shift())
// console.log(a.unshift("Nityanand"))
// console.log(a)
// delete a[1]

// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [7, 8, 9]

// console.log(a1.concat(a2, a3))

// let b = [6,2,9,5]
// console.log(b.sort() + " This is the sorted array")

// console.log(b.splice(1,9, 16, 25, "Harry"))
// console.log(b + " spliced Array")

// console.log(a2.slice(0,3))
// console.log(a2)

// console.log(a.reverse())

let x = [1,6,98,65,77]

for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element)
}

x.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        const element = x[key];
        console.log(element)
    }
}

for (const iterator of x) {
    console.log(iterator)
}

let y = x.map((e, index, arr)=>{
    return e**2
})
console.log(y)


{
    let arr = [1,2,3,4,5,6,7,8,9,10]
    const greaterthanseven = (e)=>{
        if (e>7) {
            return true
        }

        return false
    }
    console.log(arr.filter(greaterthanseven))
}


{
    let arr = [1,2,3,4,5,5]

    const red = (a, b)=>{
        return a*b
    }

    console.log(arr.reduce(red))
}