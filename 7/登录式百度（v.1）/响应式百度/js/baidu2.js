$(document).ready(function() {
    // onload时执行checkCookie()
    checkCookie();
    $(".productuls").css("height", $(window).height() * 0.999);
    // $(".allblock").css("height", $(window).height());
    // 
    $(".addcontent").click(function(event) {
        /* Act on the event */
        if ($(this).find("i").hasClass('morerotae')) {
            $(".navlife2").hide();
            $(this).find("i").removeClass("morerotae");
        } else {
            $(".navlife2").show();
            $(this).find("i").addClass("morerotae");
        }

    });
    var flag = true;
    $(".icon_edit").click(function(event) {
        /* Act on the event */
        if (flag) {
            $(this).next().show();
            flag = false;
        } else {
            $(this).next().hide();
            flag = true;
        }
    });

    $(".close").click(function(event) {
        /* Act on the event */
        $(this).parent().hide();
        flag = true;
    });
    // 切换tab
    $(".s_menus_outer .tab").on("click", function(ele, index) {
        var index = $(this).index();
        if (!$(this).hasClass("tabon")) {
            $(".s_menus_outer").find("span").removeClass("tabon");
            $(this).addClass("tabon");
            $(".s_ctner_contents").find('.s_contentnone').removeClass("s_contentblock");
            $(".s_ctner_contents").find('.s_contentnone').eq(index).addClass('s_contentblock')
        }
    });
    // 显示不感兴趣
    $(".news_item").mouseover(function() {
        $(this).find(".dubbtn").show();
    });
    $(".news_item").mouseout(function() {
        $(this).find(".dubbtn").hide();
    });
    $(".dubbtn").mouseover(function() {
        $(this).parent().parent().parent().find('.noinst').show()
    });
    $(".dubbtn").mouseout(function() {
        $(this).parent().parent().parent().find('.noinst').hide()
    });
    // 改变实时热点
    $(".hot-refresh-text").on("click", function() {
        var hascl = $(this).parent().parent().parent().find(".list_news_on");
        $(this).parent().parent().parent().find('.list_content').removeClass("list_news_on");
        $(this).parent().parent().parent().find('.list_content').addClass("list_news_on");
        hascl.removeClass("list_news_on");

    });
    // 换肤
    $(".changeskin").on("click", function() {

        var n1 = Math.floor(Math.random() * 3); //输出1～3之间的随机整数
        // 定义背景图数组
        var arr = ["image/a.jpg", "image/b.jpg", "image/c.jpg"];
        // 改变背景图片
        $("body").css("background", "url(" + arr[n1] + ")");
        $(".logoimg").find("img").attr("src", "image/logo_white.png");
        $(".loginfooter").addClass("whitecolor");
        $(".sethome").addClass("whitecolor");
        $(".copyright_text").addClass("whitecolor");
        // 设计cookie
        setCookie("skin", arr[n1], 365);
        // 设置locastorage
        localStorage.skin = arr[n1];
    });
    // 滚动
    $(window).scroll(function() {
        if ($(document).scrollTop() > 10) {
            $(".to-top").css("visibility", "visible")

        } else {
            $(".to-top").css("visibility", "hidden")
        }
    });
    // totop
    $(".to-top").click(function() {
        /* Act on the event */
        $(document).scrollTop($(".nav").offset().top)
    });
});



// 获取cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
// 设置cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}
// 检查cookie
function checkCookie() {
    console.log(localStorage.skin)
    var skin = getCookie('skin') || localStorage.skin;
    if (skin != null && skin != "") {
        $("body").css("background", "url(" + skin + ")");
        $(".logoimg").find("img").attr("src", "image/logo_white.png");
        $(".loginfooter").addClass("whitecolor");
        $(".sethome").addClass("whitecolor");
        $(".copyright_text").addClass("whitecolor");
    }
}

$(function() {
    $(".sinput").bind({
        focus: function(event) {
            $(".textinput").addClass("sinfocus")
        },
        blur: function(event) {
            $(".textinput").removeClass("sinfocus")
        }
    })
})
