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
  var list = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i < list.length; i++)
  {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  } 
}
