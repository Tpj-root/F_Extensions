// Create a round button ("H")
let messageButton = document.createElement("button");
messageButton.textContent = "H"; // Button text
messageButton.style.position = "fixed";
messageButton.style.top = "100px";
messageButton.style.right = "100px"; // Left //right
messageButton.style.padding = "20px";
messageButton.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
messageButton.style.color = "white";
messageButton.style.fontSize = "16px";
messageButton.style.zIndex = "9999";
messageButton.style.borderRadius = "50%"; // Round button
messageButton.style.cursor = "pointer";

// Create the A button (hidden initially)
let buttonA = document.createElement("button");
buttonA.textContent = "A"; // Button text
buttonA.style.position = "fixed";
buttonA.style.padding = "20px";
buttonA.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
buttonA.style.color = "white";
buttonA.style.fontSize = "16px";
buttonA.style.borderRadius = "50%"; // Round button
buttonA.style.cursor = "pointer";
buttonA.style.zIndex = "9999";
buttonA.style.display = "none"; // Hidden initially


// Append the main button and the button A to the page
document.body.appendChild(messageButton);
document.body.appendChild(buttonA);

// Function to update the position of the A button based on the H button
function updateButtonPosition() {
  // Calculate the angle (30 degrees in radians)
  const angle = 30 * Math.PI / 180; // Convert 30 degrees to radians

  // Calculate the new position for button A
  const radius = 80; // Radius of the circle around the H button
  const centerX = messageButton.offsetLeft + messageButton.offsetWidth / 2;
  const centerY = messageButton.offsetTop + messageButton.offsetHeight / 2;

  // Set the position of button A based on the angle
  buttonA.style.left = `${centerX + radius * Math.cos(angle) - buttonA.offsetWidth / 2}px`;
  buttonA.style.top = `${centerY + radius * Math.sin(angle) - buttonA.offsetHeight / 2}px`;
}

// Toggle the visibility of the A button when the H button is clicked
messageButton.addEventListener("click", function() {
  if (buttonA.style.display === "none") {
    buttonA.style.display = "block"; // Show the A button
    updateButtonPosition(); // Set initial position for button A
  } else {
    buttonA.style.display = "none"; // Hide the A button
  }
});

// When the A button is clicked, print "Hello A"
buttonA.addEventListener("click", function() {
  let messageDiv = document.createElement("div");
  messageDiv.style.position = "fixed";
  messageDiv.style.top = "50%";
  messageDiv.style.left = "50%";
  messageDiv.style.transform = "translate(-50%, -50%)";
  messageDiv.style.padding = "20px";
  messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  messageDiv.style.color = "white";
  messageDiv.style.fontSize = "20px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.zIndex = "9999";
  messageDiv.textContent = "Hello A"; // Display "Hello A"

  // Append the message to the page
  document.body.appendChild(messageDiv);

  // Remove the message after 5 seconds
  setTimeout(function() {
    messageDiv.remove();
  }, 5000); // Remove after 5 seconds
});

// Move button A when the H button moves
function updateAButtonPositionOnDrag() {
  updateButtonPosition(); // Update the position of button A based on new position of H
}

// Listen for mouse movement on the "H" button to drag it and update "A" position
let isDragging = false;
let offsetX, offsetY;

messageButton.addEventListener("mousedown", function(event) {
  isDragging = true;
  offsetX = event.clientX - messageButton.offsetLeft;
  offsetY = event.clientY - messageButton.offsetTop;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    messageButton.style.top = `${event.clientY - offsetY}px`;
    messageButton.style.left = `${event.clientX - offsetX}px`;

    // Update the position of the "A" button to follow "H"
    updateAButtonPositionOnDrag();
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});

