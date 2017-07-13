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
    $(".header .nav_park nav ul>li").stop(true, true).hover(function() {
        // $(this).find(".submenu").addClass('shousubmenu');
        $(this).find(".submenu").show();
        $(this).find(".submenu").stop(true, true).animate({
            opacity: "1"
        }, 1000, "easeOutBack");
    }, function() {

        $(this).find(".submenu").hide();
        $(this).find(".submenu").stop(true, true).animate({
            opacity: "0"
        }, 1000, "easeOutBack");
    });
    $(".lesson-list").find('.cf').find("li").stop(true, true).hover(function() {
            $(this).css("z-index", "1000000");
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
        },
        function() {
            $(this).parent().find(".lesson-shoucang").hide();
            $(this).parent().find(".lessonplay").css("opacity", "0")

            $(this).parent().find(".lesson-infor").find('p').css({
                "height": "0",
                "opacity": "0",
                "display": "none"
            });
            $(this).parent().find(".zhongji").hide();
            $(this).parent().find(".learn-number").hide();
            $(this).parent().find(".lesson-infor").removeClass("lesson-hover");
            $(this).parent().find(".lesson-infor").addClass("lesson-out");
        }

    );
    //     $(".lesson-list").find('.cf').find("li").stop(true,true).find('.lesson-infor').hover(function() {
    //     $(this).parent().css("z-index","1000000");
    //     $(this).parent().find(".lesson-shoucang").show();
    //     $(this).parent().find(".lessonplay").css("opacity", "1");
    //     $(this).parent().find(".lesson-infor").removeClass("lesson-out");

    //     $(this).parent().find(".lesson-infor").addClass("lesson-hover");
    //     $(this).parent().find(".lesson-infor").find('p').css({
    //         "height": "52px",
    //         "opacity": "1",
    //         "display": "block"
    //     });
    //     $(this).parent().find(".zhongji").show();
    //     $(this).parent().find(".learn-number").show();
    // });
    // $(".lesson-list").find('.cf').find("li").find('.lessonimg-box').stop(true,true).mouseout(function() {

    //     $(this).parent().find(".lesson-shoucang").hide();
    //     $(this).parent().find(".lessonplay").css("opacity", "0")

    //     $(this).parent().find(".lesson-infor").find('p').css({
    //         "height": "0",
    //         "opacity": "0",
    //         "display": "none"
    //     });
    //     $(this).parent().find(".zhongji").hide();
    //     $(this).parent().find(".learn-number").hide();
    //     $(this).parent().find(".lesson-infor").removeClass("lesson-hover");
    //     $(this).parent().find(".lesson-infor").addClass("lesson-out");
    // })
    //     $(".lesson-list").find('.cf').find("li").find('.lesson-infor').stop(true,true).mouseout(function() {

    //     $(this).parent().find(".lesson-shoucang").hide();
    //     $(this).parent().find(".lessonplay").css("opacity", "0")

    //     $(this).parent().find(".lesson-infor").find('p').css({
    //         "height": "0",
    //         "opacity": "0",
    //         "display": "none"
    //     });
    //     $(this).parent().find(".zhongji").hide();
    //     $(this).parent().find(".learn-number").hide();
    //     $(this).parent().find(".lesson-infor").removeClass("lesson-hover");
    //     $(this).parent().find(".lesson-infor").addClass("lesson-out");
    // })
})
