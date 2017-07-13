     $("#mytab a").click(function(e){
            e.preventDefault();
            $(this).tab("show");

     });
         window.onresize = function() {
        var maxWidth = document.documentElement.clientWidth;
        if (maxWidth > 640) {
            maxWidth = 640;
        }
        document.documentElement.style.fontSize = ((maxWidth / 640) * 16) + "px";
    };
    var maxWidth = document.documentElement.clientWidth;
    if (maxWidth > 640) {
        maxWidth = 640;
    }
    document.documentElement.style.fontSize = ((maxWidth / 640) * 16) + "px";
    $(document).ready(function() {
        $.ajax({
            url: '/getlist',
            type: "get",
            dataType: 'json',
            success: function(data) {
                console.log(data[0]);
                for (var i = 0; i <= data.length - 1; i++) {
                    var div1 = $("<div class='index-list-item'></div>").appendTo($(".newslist-container"));
                    var div2 = $("<div class='index-list-main showleft'></div>").appendTo(div1);
                    var div3 = $("<div class='index-list-image'></div>").appendTo(div2);
                    var img = $("<img src='img/zx.jpg' class=''>").appendTo(div3);
                    var div4 = $("<div class='index-list-main-text'></div>").appendTo(div2);
                    var div5 = $("<div class='index-list-main-title'>" + data[i].newtitle + "</div>").appendTo(div4);
                    var div6 = $("<div class='index-list-bottom'></div>").appendTo(div4);
                    var div7 = $("<div class='index-list-main-time'></div>").appendTo(div6);
                    var div8 = $("<b class='tip-time'>1天前</b>").appendTo(div7);
                    var div9 = $("<b class='tip-hot tip-fillred'>热点</b>").appendTo(div7);
                }
            }
        });
    });