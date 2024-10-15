console.log("Tutorial on Loops")

/*let a=1;

for (let i = 0; i < 6; i++) {
    console.log(a+i)
}

let obj = {
    name: "Prithvi",
    role: "Programmer"
}

for (const key in obj) {
    console.log(key) 
}

for (const c of "Prathvi") {
    console.log(c)
}

i=3
while (i<6) {
    console.log(i)
    i++;
}

{
let i=3;
do {
    console.log(i)
    i++;
} while (i<6);
}*/

let obj = {
    harry: "90",
    Rohan: "70",
    aakash: "7"
};

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    let student = keys[i];
    console.log(student + ": " + obj[student]);

};

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}