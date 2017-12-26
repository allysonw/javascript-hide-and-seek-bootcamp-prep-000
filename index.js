function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll("div");
  console.log("Before loop, list is : " + list + " and it's typeof: " + typeof list);
  var i = 0;
  while (list[i])
  {
    console.log("List[i] in loop is: " + list[i]);
    console.log("List[i] inner HTML in loop is: " + list[i].innerHTML);
    i++;
    //list = document.getElementById(list[i]);
    console.log("After incrementing, List[i] in loop is: " + list[i]);
  }

  console.log("List[i] after loop is: " + list[i]);
  return list[i-1].innerHTML;
  //for (let i = 0; i < list.length; i++) {
    //  if
  //}
}

function increaseRankBy(n) {
}
