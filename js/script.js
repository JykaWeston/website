window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "20px";
      document.getElementById("navbar").style.height = "5px";
    } else {
      document.getElementById("header").style.fontSize = "30px";
    }
  } 