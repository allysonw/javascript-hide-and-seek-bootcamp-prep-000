function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll("div");
  console.log("list");
  while (list.[i] != 1)
  {
    list = document.getElementById('grand-node').querySelectorAll("div");
  }
  return list.[i];
  //for (let i = 0; i < list.length; i++) {
    //  if
  //}
}

function increaseRankBy(n) {
}
