console.log("Exercise-10, Generate a business name generator without using arrays")


function getrandomstring1() {
    
let combinedstrings = "Crazy |Amazing |Fire "
let string = combinedstrings.split("|")

let randomstring = Math.floor(Math.random()*string.length)

return string[randomstring]
}

function getrandomstring2() {
    
let combinedstrings = "Engine |Foods |Garments "
let string = combinedstrings.split("|")

let randomstring = Math.floor(Math.random()*string.length)

return string[randomstring]
}

function getrandomstring3() {
    
let combinedstrings = "Bros|Limited|Hub"
let string = combinedstrings.split("|")

let randomstring = Math.floor(Math.random()*string.length)

return string[randomstring]
}

console.log(getrandomstring1() + getrandomstring2() + getrandomstring3())