var n =document.querySelector(".btn");
n.addEventListener("click",function(){
n.classList.add("after");
myFunction();
})
function myFunction(){
setTimeout(function() {
  n.classList.remove("after")
 },4500)}