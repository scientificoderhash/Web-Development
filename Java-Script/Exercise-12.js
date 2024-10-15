console.log("Give random color and backgrond color to the boxes")

function getRandomColor() {
    // Define possible characters for a hex color code
    const letters = '0123456789ABCDEF';
    let color = '#'; // Start with the '#' character

    // Loop 6 times to generate a 6-digit hexadecimal number
    for (let i = 0; i < 6; i++) {
        // Pick a random character from the letters string and append to the color string
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color; // Return the generated color
}


document.body.querySelectorAll(".box").forEach((e) => {

    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});

