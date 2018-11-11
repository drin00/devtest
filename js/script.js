function aboutFunction(){
  document.getElementById("aboutus").style="display:block;";
  document.getElementById("banner").style="display:none;";
  document.getElementById("feedback").style="display:none;";
  window.scrollTo(0,0);

}

function homeFunction(){
  window.scrollTo(0,0);
  document.getElementById("aboutus").style.removeProperty('display');
  document.getElementById("banner").style.removeProperty('display');
  document.getElementById("feedback").style.removeProperty('display');

}

window.onscroll = function() {shrinkNavBar()};

function shrinkNavBar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menubar").style.height = "5.5rem";
    document.getElementById("logo").style.width = "18rem";
  } else {
    document.getElementById("menubar").style.removeProperty('height');
    document.getElementById("logo").style.removeProperty('width');
  }
}
