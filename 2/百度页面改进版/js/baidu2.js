$(document).ready(function() {
    $(".productuls").css("height", $(window).height() * 0.999);
     $(".allblock").css("height", $(window).height());
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
