console.log("Inserting and Removing Elements using Java Script")

let div = document.createElement("div")
div.innerHTML = "I have been inserted"
div.setAttribute("class", "created")
document.querySelector(".container").append(div)