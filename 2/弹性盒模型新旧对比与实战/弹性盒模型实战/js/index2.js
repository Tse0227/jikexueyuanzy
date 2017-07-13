    $(document).ready(function() {
        //左边部分的点击
        $('.c_left div').on('click', function() {
            $(".c_center").find("img").css("display", "none")
            $(".c_center").find("img").eq($(this).index()).css("display", "block");
        });
        //右边部分的点击
        $('.r_top div').on('click', function() {
            $(".c_bottom").find("p").css("display", "none")
            $(".c_bottom").find("p").eq($(this).index()).css("display", "block");
        });
    })
