$(".responsive").slick({
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 744,
        settings: {
            slidesToScroll: 1,
            slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 400
  });
