document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var options = {};
    var instances = M.Carousel.init(elems, options);

    instances = M.Carousel.init({
        fullWidth: false,
        indicators: false
    });

});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var options = {
        indicators: false,
        height: 600
    };
    var instances = M.Slider.init(elems, options);


});


