function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll("div");
  var length = list.length;
  return list[length-1];
}

function increaseRankBy(n) {
}
