function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll("div");
  console.log(list + "typeof: " + typeof list);
  var i = 0;
  while (list[i] !== 1)
  {
    i++;
    console.log("List[i] in loop is: " + list[i]);
    list = document.getElementById(list[i]).querySelectorAll("div");
  }
  return list;
  //for (let i = 0; i < list.length; i++) {
    //  if
  //}
}
