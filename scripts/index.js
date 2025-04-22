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
handleButtonClick('shopEase-btn', 'Board Updated successfully');
handleButtonClick('CloudSync-btn', 'Board Updated successfully');
handleButtonClick('SwiftPay-btn', 'Board Updated successfully');
handleButtonClick('Meta-btn', 'Board Updated successfully');
handleButtonClick('Google-btn', 'Board Updated successfully');
handleButtonClick('Glassdoar-btn', 'Board Updated successfully');
