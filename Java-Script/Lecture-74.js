let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

// button.addEventListener("mouseleave", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

button.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})