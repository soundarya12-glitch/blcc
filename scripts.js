
// Function to show the corresponding page content
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active-page'));

  // Show the clicked page
  document.getElementById(pageId).classList.add('active-page');
}



const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
menuToggle.addEventListener('click', () => {
navbarLinks.classList.toggle('active');
});

// Select all elements with the class "counter"
const counters = document.querySelectorAll('.counter');
// Function to increment the counters
function incrementCounters() {
counters.forEach(counter => {
const target = +counter.getAttribute('data-target'); // Get the target value
const speed = 200; // Adjust the speed (lower is faster)
const increment = Math.ceil(target / speed);
const updateCounter = () => {
const current = +counter.innerText; // Current value in the counter
if (current < target) {
  counter.innerText = current + increment; // Increment the value
  setTimeout(updateCounter, 10); // Call again after 10ms
} else {
  counter.innerText = target; // Set to the target value
}
};
updateCounter();
});
}
// Trigger the counters when the page loads
window.addEventListener('load', incrementCounters);

// Toggle chat box visibility
function toggleChat() {
const chatBox = document.getElementById('chatBox');
chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}
// Send a chat message
function sendMessage() {
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
if (chatInput.value.trim() !== "") {
// Add the message to the chat box
const userMessage = document.createElement('p');
userMessage.textContent = `You: ${chatInput.value}`;
chatMessages.appendChild(userMessage);
// Scroll to the latest message
chatMessages.scrollTop = chatMessages.scrollHeight;
// Clear the input
chatInput.value = "";
}
}
// Handle Enter key for sending messages
function handleEnter(event) {
if (event.key === "Enter") {
sendMessage();
}
}

// Function to show the corresponding page content
function showPage(pageId) {
// Hide all pages
const pages = document.querySelectorAll('.page');
pages.forEach(page => page.classList.remove('active-page'));
// Show the clicked page
document.getElementById(pageId).classList.add('active-page');
}

function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('active');
}

// Function to load content from another page into the content div
function loadContent(page) {
const xhr = new XMLHttpRequest();
xhr.open('GET', page, true);

// When the request completes
xhr.onload = function () {
if (xhr.status === 200) {
  document.getElementById('content').innerHTML = xhr.responseText;
} else {
  document.getElementById('content').innerHTML = '<p>Sorry, there was an error loading the content.</p>';
}
};

// Send the request
xhr.send();
}

