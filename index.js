function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll("div");

  var i = 0;
  while (list[i])
  {
    i++;
  }

  return list[i-1];
}

function increaseRankBy(n) {
}
