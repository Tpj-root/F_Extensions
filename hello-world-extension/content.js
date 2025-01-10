// Create a div element to show the message
let messageDiv = document.createElement("div");
messageDiv.style.position = "fixed";
messageDiv.style.top = "100px";
messageDiv.style.right = "10px";
messageDiv.style.padding = "10px";
messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
messageDiv.style.color = "white";
messageDiv.style.fontSize = "16px";
messageDiv.style.zIndex = "9999";
messageDiv.style.borderRadius = "5px";

// Set the content of the message
messageDiv.textContent = `Iamsab`;

// Append the div to the body of the page
document.body.appendChild(messageDiv);

