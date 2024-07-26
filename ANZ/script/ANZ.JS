// const hambuger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// 
// hambuger.addEventListener("click", () => {
  // hambuger.classList.toggle("active");
// });
// 
// hambuger.addEventListener("click", () => {
  // navMenu.classList.toggle("active");
// });
// 

$(document).ready(function(){
  $(".active").click(function(){
  $(".search-box").toggle();
  });
});