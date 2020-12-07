// file created by Kazuto

// Owner: Kate

// function for dropdown navigation menu 
function dropMenu() {
  
    var x = document.getElementById("SmallNavBar");    // gets the small nav bar element by the id
    if (x.className.indexOf("show") == -1) {           // searches for "show" in the classes of the element
      x.className += " show";                          // if it doesn't exist, add to class name which allows the items to be shown in the "menu"
    } 
    else { 
      x.className = x.className.replace("show", "");
    }
  }

// owner: Kazuto
function dropdown() {
  document.getElementById("kateEmail").classList.toggle("show")
  document.getElementById("kateEmailSmall").classList.toggle("show")
}

// owner: Kazuto
// modified from https://www.w3schools.com/howto/howto_js_dropdown.asp
window.onclick = function(event) {
  if (!(event.target.matches('.dropContact') || event.target.matches('#kateEmail'))) {

    var dropdowns = document.getElementsByClassName("emailBox");
   
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
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
    document.getElementById("image2").src="images/surveyplan_hover.jpg";  // gets the element by the Id image2 and changes the image 
  }

function originalImage2() {
    document.getElementById("image2").src="images/surveyplan_400_252.jpg";  // gets the element by the Id image2 and changes the image back to the original
  }


function newImage3() {
    document.getElementById("image3").src="images/databasedesign_hover.jpg";  // gets the element by the Id image3 and changes the image 
  }

function originalImage3() {
    document.getElementById("image3").src="images/databasedesign_400_207.jpg";  // gets the element by the Id image3 and changes the image back to the original
  }

// End of Owner: Kate