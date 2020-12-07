// file created by Kazuto

// Owner: Kate
function dropMenu() {
  
    var x = document.getElementById("SmallNavBar");
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } 
    else { 
      x.className = x.className.replace("show", "");
    }
  }

function newImage() {
    document.getElementById("image1").src="images/cartography_hover.jpg";
  }

function originalImage() {
    document.getElementById("image1").src="images/cartography_400_237.jpg";
  }