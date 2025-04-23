// Go to index page to blog page
document.getElementById('discover-card').addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = "blogs.html";
});
// Theme change work 
document.getElementById("btn-theme").addEventListener('click', function (event) {
  event.preventDefault();
  const bodyTheme = document.getElementById('body-theme')
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  bodyTheme.style.backgroundColor = randomColor;
})
//Display date 
const dateElement = document.getElementById("display-date");
const today = new Date();
const options = {
  weekday: 'short',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};
let formattedDate = today.toLocaleDateString('en-US', options);
formattedDate = formattedDate.replace(',', '');
dateElement.textContent = formattedDate;

// Completed button work
handleButtonClick('shopEase-btn', 'fix-mobile-title');
handleButtonClick('CloudSync-btn', 'dark-mode-title');
handleButtonClick('SwiftPay-btn', 'home-page-title');
handleButtonClick('Meta-btn', 'new-emoji-title');
handleButtonClick('Google-btn', 'openAI-title');
handleButtonClick('Glassdoar-btn', 'improve-title');
