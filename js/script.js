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
  if (document.body.scrollTop > 53  || document.documentElement.scrollTop > 53) {
    document.getElementById("logo").style.width = "18rem";
    document.getElementById("menubar").style = "height: 5.5rem; background-color: #F2F1F1;";
  } else {
    document.getElementById("menubar").style.removeProperty('height');
    document.getElementById("logo").style.removeProperty('width');
    document.getElementById("menubar").style = "background-color: white;";
  }
}
