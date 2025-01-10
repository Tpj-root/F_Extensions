// Create a button element to show the message
let messageButton = document.createElement("button");
messageButton.textContent = "Hello World"; // Button text
messageButton.style.position = "fixed";
messageButton.style.top = "10px";
messageButton.style.right = "10px";
messageButton.style.padding = "10px";
messageButton.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
messageButton.style.color = "white";
messageButton.style.fontSize = "16px";
messageButton.style.zIndex = "9999";
messageButton.style.borderRadius = "5px";
messageButton.style.cursor = "pointer";

// Create a div element to show the URL message
let messageDiv = document.createElement("div");
messageDiv.style.position = "fixed";
messageDiv.style.top = "50px";
messageDiv.style.right = "10px";
messageDiv.style.padding = "10px";
messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
messageDiv.style.color = "white";
messageDiv.style.fontSize = "16px";
messageDiv.style.zIndex = "9999";
messageDiv.style.borderRadius = "5px";
messageDiv.style.display = "none"; // Initially hidden

// Set the content of the message
messageDiv.textContent = `Hello World - ${window.location.href}`;

// Append the button and message div to the body of the page
document.body.appendChild(messageButton);
document.body.appendChild(messageDiv);

// Add click event listener to the button
messageButton.addEventListener("click", function() {
  // Toggle the visibility of the message
  if (messageDiv.style.display === "none") {
    messageDiv.style.display = "block";
  } else {
    messageDiv.style.display = "none";
  }
});

