console.log("Hello I am conditional tutorial");

{
    let age = 45;

    if (age > 18) {
        console.log("You can Drive");
    }

    else {
        console.log("You cannot drive");
    }
}

{
    let age = 17;
    let grace = 2;

    console.log(age + grace)
    console.log(age - grace)
    console.log(age * grace)
    console.log(age / grace)
    console.log(age % grace)
    console.log(age ** grace)

    if ((age + grace) > 18) {
        console.log("You can drive")
    }

    else {
        console.log("You cannot Drive")
    }
}

{
    let age = 10;
    let grace = 1

    console.log("Am I eligible?");

    // if (age > 10 && age < 20) {
    //     console.log("Yes")
    // }
    // else if ((age + grace) > 10 && (age - grace) < 20) {
    //     console.log("Yes")
    // }
    // else {
    //     console.log("No")
    // }
    let c = (age > 10 && age < 20) ? "yes" :
    ((age + grace) > 10 && (age - grace) < 20)?"yes":"No"
    

    console.log(c)
}

{
    let input= 248
    let a=2
    let b=3
    let x=input%a
    let y=input%b

    console.log("Whether the no. is divisible by 2 and 3")
    let ans= (x==0 && y==0)?"yes":"no"
    console.log(ans)
}