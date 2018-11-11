function aboutFunction(){
  document.getElementById("aboutus").style="display:block;";
  document.getElementById("banner").style="display:none;";
  document.getElementById("feedback").style="display:none;";
  document.getElementById("services").style="display:none;";
  window.scrollTo(0,0);

}

function homeFunction(){
  window.scrollTo(0,0);
  document.getElementById("aboutus").style.removeProperty('display');
  document.getElementById("banner").style.removeProperty('display');
  document.getElementById("feedback").style.removeProperty('display');
  document.getElementById("services").style.removeProperty('display');
}

function svcsFunction(){
  document.getElementById("services").style="display:block;";
  document.getElementById("banner").style="display:none;";
  document.getElementById("feedback").style="display:none;";
  document.getElementById("aboutus").style="display:none;";
  window.scrollTo(0,0);
}

window.onscroll = function() {shrinkNavBar()};

function shrinkNavBar() {
  if (document.body.scrollTop > 10  || document.documentElement.scrollTop > 10) {
    document.getElementById("logo").style.width = "18rem";
    document.getElementById("menubar").style = "height: 5.5rem; background-color: rgba(242,241,241,0.7);";
  } else {
    document.getElementById("menubar").style.removeProperty('height');
    document.getElementById("logo").style.removeProperty('width');
    document.getElementById("menubar").style = "background-color: white;";
  }
}


function onHover() {
  document.getElementById("ecomm").style = "background-color: gray;";
}
document.getElementById("ecomm").addEventListener("mouseover", onHover);
