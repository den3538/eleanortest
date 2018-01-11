	$('.multi-items').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 3000,
  autoplay: false,
	 responsive : [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});