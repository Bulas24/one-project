$(document).ready(function() {

//sticky-nav

var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) {
    if (direction == "down") {
    	$("nav").attr("id", "sticky-nav");
    } else {
    	$("nav").removeAttr("id");
    }
  },
  offset: 60 
});

//buttons click
$(".button-order").click(function() {
	$("html, body").animate({scrollTop: $("#how-to-order-section").offset().top}, 1000);
});

$(".button-more").click(function() {
	$("html, body").animate({scrollTop: $("#restaurant-description").offset().top}, 1000);
});


// Плавное перемещение по странице ссылок

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// animation 

var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) {
    $(".anime1").addClass("animated fadeIn");
  },
  offset: 200 
});

var waypoint = new Waypoint({
  element: document.getElementById('city-section'),
  handler: function(direction) {
    $(".anime2").addClass("animated fadeInRight");
  },
  offset: 200 
});

var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {
    $(".anime3").addClass("animated fadeInLeft");
  },
  offset: 100 
});

var waypoint = new Waypoint({
  element: document.getElementById('header-text'),
  handler: function(direction) {
    if (direction == "up") {
    	$(".anime4").addClass("animated rubberBand");
    } else {
    	$(".anime4").removeClass("animated rubberBand");
    }
  },
  offset: 20 
});

// Mobile nav

$(".mobile-nav-icon").click(function() {

	var icon = $(".mobile-nav-icon i");

	if (icon.hasClass("ion-ios-menu")) {
		icon.removeClass("ion-ios-menu");
		icon.addClass("ion-ios-close");
		$("nav").animate({height: "300px"}, 300);
	} else {
		icon.removeClass("ion-ios-close");
		icon.addClass("ion-ios-menu");
		$("nav").animate({height: "70px"}, 300);
	}


	$("#main-nav").slideToggle(300);
});



// Type Image - картинка без анимации
 // $('.image-popup').magnificPopup({
 // type: 'image'
 // });

// Type Image Zoom - картинка с анимацией
 $('.image-popup-zoom').magnificPopup({
 type: 'image',
 zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 }
 });

})












