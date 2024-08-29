// Get the line element
const line = document.getElementById('line');

// Initialize the rotation angle
let angle = 0;

// Function to update the rotation of the line
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`; // Apply the rotation
}

// Rotate the line every 20 milliseconds
setInterval(rotateLine, 20);

