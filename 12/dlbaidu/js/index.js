$(document).ready(function() {
    var top = {
        init: function() {
            var me = this;
            me.render();
            me.bind();
            me.setCookie();
            me.getCookie();
            me.checkCookie();
            me.sroll();
            me.sinput();
        },
        render: function() {
            var me = this;
            me.btna = $(".icon_edit");
            me.close = $(".close");
            me.btnaddcontent = $(".addcontent");
            me.productuls = $(".productuls");
            me.tab = $(".s_menus_outer .tab");
            me.news_item = $(".news_item");
            me.dubbtn = $(".dubbtn");
            me.refresh = $(".hot-refresh-text");
            me.changeskin = $(".changeskin");
            me.totop = $(".to-top");
        },
        bind: function() {
            var me = this;
            var flag = true;
            me.btna.click(function(event) {
                if (flag) {
                    $(this).next().show();
                    flag = false;
                } else {
                    $(this).next().hide();
                    flag = true;
                }
            });
            me.close.click(function() {
                $(this).parent().hide();
                flag = true;
            });
            me.btnaddcontent.click(function(event) {
                if ($(this).find("i").hasClass('morerotae')) {
                    $(".navlife2").hide();
                    $(this).find("i").removeClass("morerotae");
                } else {
                    $(".navlife2").show();
                    $(this).find("i").addClass("morerotae");
                }

            });
            me.tab.on("click", function(ele, index) {
                var index = $(this).index();
                if (!$(this).hasClass("tabon")) {
                    $(".s_menus_outer").find("span").removeClass("tabon");
                    $(this).addClass("tabon");
                    $(".s_ctner_contents").find('.s_contentnone').removeClass("s_contentblock");
                    $(".s_ctner_contents").find('.s_contentnone').eq(index).addClass('s_contentblock')
                }
            });
            me.news_item.mouseover(function() {
                $(this).find(".dubbtn").show();
            });
            me.news_item.mouseout(function() {
                $(this).find(".dubbtn").hide();
            });
            me.dubbtn.mouseover(function() {
                $(this).parent().parent().parent().find('.noinst').show()
            });
            me.dubbtn.mouseout(function() {
                $(this).parent().parent().parent().find('.noinst').hide()
            });
            // 改变实时热点
            me.refresh.on("click", function() {
                var hascl = $(this).parent().parent().parent().find(".list_news_on");
                $(this).parent().parent().parent().find('.list_content').removeClass("list_news_on");
                $(this).parent().parent().parent().find('.list_content').addClass("list_news_on");
                hascl.removeClass("list_news_on");

            });
            // totop
            me.totop.click(function() {
                $(document).scrollTop($(".nav").offset().top)
            });
            // 换肤
            me.changeskin.on("click", function() {
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
        },
        setCookie: function(c_name, value, expiredays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
        },
        // 获取cookie
        getCookie: function(c_name) {

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
        },
        // 检查cookie
        checkCookie: function() {
            var me = this;
            var skin = me.getCookie('skin') || localStorage.skin;
            if (skin != null && skin != "") {
                $("body").css("background", "url(" + skin + ")");
                $(".logoimg").find("img").attr("src", "image/logo_white.png");
                $(".loginfooter").addClass("whitecolor");
                $(".sethome").addClass("whitecolor");
                $(".copyright_text").addClass("whitecolor");
            }
        },
        sroll: function() {
            // 滚动
            $(window).scroll(function() {
                if ($(document).scrollTop() > 10) {
                    $(".to-top").css("visibility", "visible")

                } else {
                    $(".to-top").css("visibility", "hidden")
                }
            });
        },
        sinput: function() {
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
        }
    }
    top.init();
});
