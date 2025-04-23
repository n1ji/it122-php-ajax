// Rotating array of Google Fonts
const fonts = [
  "Roboto", 
  "Open Sans", 
  "Lobster", 
  "Montserrat", 
  "Raleway", 
  "Playfair Display", 
  "Poppins", 
  "Merriweather", 
  "Dancing Script", 
  "Pacifico", 
  "Caveat", 
  "Abril Fatface"
];

// Function to fetch a random quote
function getRandomQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "random_quotes.php", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const quoteContainer = document.getElementById("quote-container");
      quoteContainer.innerHTML = xhr.responseText;

      // Apply a random font from the array
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      quoteContainer.style.fontFamily = randomFont;

      // Add fade-in effect
      quoteContainer.classList.remove("fade-in");
      void quoteContainer.offsetWidth; // Trigger reflow to restart animation
      quoteContainer.classList.add("fade-in");

      // Make the container visible
      quoteContainer.style.display = "block";
    } else {
      console.error("Failed to fetch quote:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("AJAX request failed.");
  };

  xhr.send();
}

// Fetch a random quote on page load
window.onload = getRandomQuote;