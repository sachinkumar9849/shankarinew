$(document).ready(function(){       
  $('#myModal').modal('show');
   }); 


popup = {
  init: function(){
    $('figure').click(function(){
      popup.open($(this));
    });
    
    $(document).on('click', '.popup img', function(){
      return false;
    }).on('click', '.popup', function(){
      popup.close();
    })
  },
  open: function($figure) {
    $('.gallery').addClass('pop');
    $popup = $('<div class="popup" />').appendTo($('body'));
    $fig = $figure.clone().appendTo($('.popup'));
    $bg = $('<div class="bg" />').appendTo($('.popup'));
    $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $('img', $fig).attr('src');
    $shadow.css({backgroundImage: 'url(' + src + ')'});
    $bg.css({backgroundImage: 'url(' + src + ')'});
    setTimeout(function(){
      $('.popup').addClass('pop');
    }, 10);
  },
  close: function(){
    $('.gallery, .popup').removeClass('pop');
    setTimeout(function(){
      $('.popup').remove()
    }, 100);
  }
}

popup.init()


// gallery end 
$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
// menu mobile end
$(function() {
  new WOW().init();
});
$(document).ready(function () {
    // animation start
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Function to add the "show" class with different delays
    function handleScroll() {
      const teamItems = document.querySelectorAll(".animation_custom");
      let delay = 0;
      
      teamItems.forEach((item, index) => {
        if (isInViewport(item) && !item.classList.contains("show")) {
          setTimeout(() => {
            item.classList.add("show");
          }, delay);
          delay += 9000; // Increase the delay for each item
        }
      });
    }
    
    // Listen for the scroll event and initially trigger the check
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load
    
    // animation end
  
  $(".slider_index")
    .slick({
      autoplay: true,
      speed: 800,
      lazyLoad: "progressive",
      arrows: true,
      dots: false,
    })
    .slickAnimation();

  // slider home end team_slider
  $(".team_slider").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 600,
    draggable: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".our_facilities_item").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });
  // our facilites slider end
  // animation start
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add the "show" class with different delays
  function handleScroll() {
    const teamItems = document.querySelectorAll(".animation_custom");
    let delay = 0;
    
    teamItems.forEach((item, index) => {
      if (isInViewport(item) && !item.classList.contains("show")) {
        setTimeout(() => {
          item.classList.add("show");
        }, delay);
        delay += 1000; // Increase the delay for each item
      }
    });
  }
  
  // Listen for the scroll event and initially trigger the check
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
  
  // animation end

  // button start
  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({ left: relX, top: relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });

  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({ left: relX, top: relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });
});

// sticky start
// Get the header element
const header = document.querySelector(".header");

// Get the initial offset position of the header
const headerOffset = header.offsetTop;

// Function to handle scroll events
function handleScroll() {
  if (window.pageYOffset > headerOffset) {
    // Add the 'sticky' class to the header when scrolling down
    header.classList.add("sticky-bar");
  } else {
    // Remove the 'sticky-bar' class when scrolling back to the top
    header.classList.remove("sticky-bar");
  }
}

// Listen for scroll events and call the handleScroll function
window.addEventListener("scroll", handleScroll);
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
