export function scrolldiv(domId) {
  window.scroll(0,
    findPosition(document.getElementById(domId)));
}
function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop - 100];
  }
}
