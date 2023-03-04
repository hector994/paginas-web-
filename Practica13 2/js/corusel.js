document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options={};
    var instances = M.Carousel.init(elems, options);

    instances = M.Carousel.init({
        fullWidth: true,
        indicators: true
    });

  });


  