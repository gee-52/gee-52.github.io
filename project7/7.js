$(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 744,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  });