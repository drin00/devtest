function aboutFunction(){
  document.getElementById("aboutus").style="display:block;";
  document.getElementById("banner").style="display:none;";
  document.getElementById("feedback").style="display:none;";
}

function homeFunction(){
  document.getElementById("aboutus").style.removeProperty('display');
  document.getElementById("banner").style.removeProperty('display');
  document.getElementById("feedback").style.removeProperty('display');
}
