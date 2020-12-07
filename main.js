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


/* following code inspired by: https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript */
function imageChange1() {
    var image = document.getElementById("image1");
    
    image.addEventListener('mouseover', function(){
      image.src = "images/surveyplan_400_252.jpg"
    })
    image.addEventListener('mouseout', function(){
        image.src = "images/cartography_400_237.jpg"
    })