 $(document).ready(function(){
     $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if (scroll > 800) {
           $(".navbar").css("background" , "whitesmoke");  
           $('.navbar-brand').css("color", "#333")
           $('.icon-bar').css("background", "#333")

         } else {
           $(".navbar").css("background" , "rgba(255, 255, 255, 0.146)");
           $('.navbar-brand').css("color", "white")
           $('.icon-bar').css("background", "white")
         }
     })
   })

  //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



