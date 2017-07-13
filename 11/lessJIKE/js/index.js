window.onload = function() {
    document.documentElement.scrollTop = 0
    var nav = document.querySelector('.jk-app');
    var navTop = nav.offsetTop;
    console.log(navTop);
    document.addEventListener("scroll", Scroll, false);
    console.log(window.pageYOffset);

    function ScrollStart(ev) {
        //ev.preventDefault()
        if (window.pageYOffset >= navTop) {

            $(".top").css("display", 'block');
        } else {

            $(".top").css("display", 'none');

        }
    }

    function Scroll() {
        if (window.pageYOffset >= navTop) {
            $(".top").css("display", 'block');
        } else {

            $(".top").css("display", 'none');

        }
    }
}

$(".search_icon").click(function(event) {
    /* Act on the event */
    $(".searchbox").addClass("search_show");
});
$(".close-icon").click(function() {
    $(".searchbox").removeClass("search_show");
})
$(".top").click(function(event) {
    /* Act on the event */
    $(document).scrollTop($(".header").offset().top)
});
