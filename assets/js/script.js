$(document).ready(function () {

  $('.as-slider').slick({
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });


  $('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });


});

const element = document.querySelector(".close-enquiry");
element.addEventListener("click", myFunction);
const sendElements = document.querySelector(".send-enquiry");
function myFunction() {
  sendElements.style.display = "none";
}

