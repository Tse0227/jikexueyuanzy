$(document).ready(function() {
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
            flag=false;
        }else{
              $(this).next().hide();
            flag=true;
        }
    });

    $(".close").click(function(event) {
        /* Act on the event */
         $(this).parent().hide();
          flag=true;
    });
});
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
