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
