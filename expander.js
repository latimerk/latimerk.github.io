
function collapseExpandLink(absID) {
  var absBlock = document.getElementById(absID);


  if (absBlock.style.display.toLowerCase() == 'block') {
    absBlock.style.display = 'none';
  }
  else {
    absBlock.style.display = 'block';
  }
  return false;
}



