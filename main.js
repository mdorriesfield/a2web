// file created by Kazuto

// function created by Kate
function dropMenu() {
  
    var x = document.getElementById("SmallNavBar");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } 
    else { 
      x.className = x.className.replace("w3-show", "");
    }
  }