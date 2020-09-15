window.onscroll = function() {scrollFunction()};
var checkbox = document.getElementById("changeTheme");
var root = document.documentElement;
checkbox.checked = false;

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "20px";
    } else {
      document.getElementById("header").style.fontSize = "30px";
    }
  }
  
checkbox.addEventListener( 'change',theme);

function theme() {
  if(this.checked) {
    root.style.setProperty("--bg-theme", "#212121");
    root.style.setProperty("--text-theme", "wheat");
    root.style.setProperty("--bg-theme-hover", "white");
    root.style.setProperty("--text-theme-hover", "#212121");      

} else {
    root.style.setProperty("--bg-theme", "#ffffff");
    root.style.setProperty("--text-theme", "#000000");
    //root.style.setProperty("--card-hover-color", "#212121");
    //root.style.setProperty("--card-hover-text-color", "wheat");
}
}