function nice(name) {
    console.log("Hey " + name + " you are brilliant")
    console.log("Hey " + name + " you are fantastic")
    console.log("Hey " + name + " you are majestic")
    console.log("Hey " + name + " you are mind-blowing")
    console.log("Hey " + name + " you are pure")
}

nice("Prithvi")

function sum(a, b) {
    // console.log(a+b)
    return a+b
}

// sum(11,15)
result = sum(11,15)
console.log("The result is ", result)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1(34);
func1(66);
func1(84);