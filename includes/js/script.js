// fuchs.technology script.js

if (navigator.userAgent.indexOf('Edge') >= 0){
// ...code for Edge....

// Smooth Scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
// Preloader
    setTimeout(function(){
        $("body").addClass("body-loaded");
        $("#progress-ring").css("display","none");
        $("section").css("display","block");
        $("header").css("display","block");
    }, 2000);
});

} else {
// ...code for other browsers...

// Menu hr scroll 80

$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        $("header").addClass("hr");
    } else {
        $("header").removeClass("hr");
		$('nav a').removeClass("active");
    }
});


$(document).ready(function(){
// Set Active Menu Item 
  $('nav a').click(function(){
    $('nav a').removeClass("active");
    $(this).addClass("active");
});
// Preloader
    setTimeout(function(){
        $("body").addClass("body-loaded");
        $("#progress-ring").css("display","none");
        $("section").css("display","block");
        $("header").css("display","block");
    }, 2000);

    //Modal - Popup Window
	var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
	
});
}
