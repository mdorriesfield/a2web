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


/* following code inspired by: https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript , https://stackoverflow.com/questions/10709016/change-image-onmouseover, from https://stackoverflow.com/questions/44854570/implementing-mouseover-mouseout-for-many-images-in-an-external-javascript-file  */
(function(window, document, undefined))
{
  var images = document.getElementsByClassName('hoverImage');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', imageMouseOver, false);
    images[i].addEventListener('mouseout', imageMouseOut, false);
  }
})(window, window.document);


function imageMouseOver(event)
{
    event = event || window.event;

    var image = event.target;
    image.src = getNewImagePath(image.src);
    console.log(image);
}

function imageMouseOut(event)
{
  event = event || window.event;

  var image = event.target;
  image.src = getNewImagePath(image.src);
  console.log(image);
}

function getNewImagePath(path)
{
  var newPath;
  if (path.indexOf('_Hover') === -1) {
    newPath = path.replace('.jpg', '_Hover.jpg');
  } else {
    newPath = path.replace('_Hover', '');
  }
  
  return newPath;
}