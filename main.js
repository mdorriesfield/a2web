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

// functions for mouseover and mouseout events to change images on index page 

function newImage1() {
    document.getElementById("image1").src="images/cartography_hover.jpg";  // gets the element by the Id image1 and changes the image 
  }

function originalImage1() {
    document.getElementById("image1").src="images/cartography_400_237.jpg";  // gets the element by the Id image1 and changes the image back to the original
  }


function newImage2() {
    document.getElementById("image1").src="images/cartography_hover.jpg";  // gets the element by the Id image1 and changes the image 
  }

function originalImage2() {
    document.getElementById("image1").src="images/cartography_400_237.jpg";  // gets the element by the Id image1 and changes the image back to the original
  }


function newImage3() {
    document.getElementById("image1").src="images/cartography_hover.jpg";  // gets the element by the Id image1 and changes the image 
  }

function originalImage3() {
    document.getElementById("image1").src="images/cartography_400_237.jpg";  // gets the element by the Id image1 and changes the image back to the original
  }