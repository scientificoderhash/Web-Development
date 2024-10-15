console.log("Call Backs and Promises");

console.log("Harry is a hacker")
console.log("I am a hecker")

setTimeout(() => {
    console.log("This is an setTimeout function")
}, 3000);

console.log("I am a hacker")

const callback = (arg) =>{
    console.log(arg)
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src;
  sc.onload = callback("Harry")
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)