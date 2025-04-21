// Go to index page to blog page
document.getElementById('discover-card').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "blogs.html";
});
// Theme change work 
document.getElementById("btn-theme").addEventListener('click',function(event){
    event.preventDefault();
    const bodyTheme = document.getElementById('body-theme')
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    bodyTheme.style.backgroundColor = randomColor;

})
