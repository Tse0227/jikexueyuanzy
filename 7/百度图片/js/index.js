$(document).ready(function() {
    imglocation();
    var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] }
    $(window).scroll(function() {
        if (scrollsid()) {
            $.each(dataImg.data, function(index, value) {
                //添加box盒子
                var box = $("<div>").addClass("box").appendTo($(".container"));
                //添加content
                var content = $("<div>").addClass("content").appendTo(box);
                //添加img
                var img = $("<img>").attr("src", "./image/" + $(value).attr('src')).appendTo(content);

            });
            //再次执行瀑布流加载
            imglocation();
        }
    });
    $(".subFilter").mouseover(function() {
        if (!$(this).hasClass("filter_hover")) {
            $(this).parent().find(".subFilter").removeClass('filter_hover');
            $(this).addClass("filter_hover");
        }
    });
    $(".subFilter").mouseout(function() {
        $(this).parent().find(".subFilter").removeClass('filter_hover');

    });

});
/**
 * 调整屏幕大小
 * 
 */
$(window).resize(function() {
    imglocation();
});
/**
 * 判断滚动距离是否到达最后一张图的一半
 * @return {[boolean]} [true false]
 */
function scrollsid() {
    var box = $(".box");
    //最后一张图的一半到顶部的高度 
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor($(".box").last().height() / 2);
    // console.log("lastboxHeight" + lastboxHeight);
    //当前容器的高度
    var documentHeight = $(window).height();
    // console.log("documentHeight" + documentHeight);

    //鼠标滚动的高度
    var scrollHeight = $(window).scrollTop();
    return lastboxHeight < scrollHeight + documentHeight;

}
/**
 * 根据屏幕大小排序图片
 * 
 */
function imglocation() {
    var box = $(".box");
    //获取第一张图片的宽度
    var boxWidth = box.eq(0).width();
    // 获取一排能放多少张
    var num = Math.floor($(".imgcontain").width() / boxWidth);
    console.log("一排能放多少张" + num);

    // 用于储存所有box的高度
    var boxArr = [];
    box.each(function(index, value) {
        //a获取盒子的高度
        $(this).css("height", $(this).height());
        var boxHeight = box.eq(index).height();
        if (index < num) {
            //获取第一行的所有高度
            boxArr[index] = boxHeight;
            // 重新排布第一行
            $(value).css({
                "position": "absolute",
                "top": 0,
                "left": box.eq(0).width() * index,
            });

        } else {
            //获取最小高度
            // console.log("数组高度" + boxArr)
            var minboxHeight = Math.min.apply(null, boxArr);
            // console.log("最小高度" + minboxHeight);
            //获取最小高度的box所在的位置
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            console.log("获取最小高度的box所在的位置" + minboxIndex);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left,
            });
            console.log("left" + box.eq(minboxIndex).position().left);
            boxArr[minboxIndex] += box.eq(index).height()
        }
    });
    $(".wrapper").css("height", $(".box").last().get(0).offsetTop);
}
