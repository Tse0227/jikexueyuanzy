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

$(document).ready(function() {
    $(".header .nav_park nav ul>li").mouseover(function() {
        $(this).find(".submenu").addClass('shousubmenu');
    });
       $(".header .nav_park nav ul>li").mouseout(function() {
        $(this).find(".submenu").removeClass('shousubmenu');
    });
    $(".lesson-list").find('.cf').find("li").mouseover(function() {
        $(this).css("z-index","1000000");
        $(this).find(".lesson-shoucang").show();
        $(this).find(".lessonplay").css("opacity", "1");
        $(this).find(".lesson-infor").removeClass("lesson-out");

        $(this).find(".lesson-infor").addClass("lesson-hover");
        $(this).find(".lesson-infor").find('p').css({
            "height": "52px",
            "opacity": "1",
            "display": "block"
        });
        $(this).find(".zhongji").show();
        $(this).find(".learn-number").show();
    });
    $(".lesson-list").find('.cf').find("li").mouseout(function() {

        $(this).find(".lesson-shoucang").hide();
        $(this).find(".lessonplay").css("opacity", "0")

        $(this).find(".lesson-infor").find('p').css({
            "height": "0",
            "opacity": "0",
            "display": "none"
        });
        $(this).find(".zhongji").hide();
        $(this).find(".learn-number").hide();
        $(this).find(".lesson-infor").removeClass("lesson-hover");
        $(this).find(".lesson-infor").addClass("lesson-out");
    })
})
