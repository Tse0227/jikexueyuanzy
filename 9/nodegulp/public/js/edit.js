function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//console.log(getQueryString("id"));
$(document).ready(function() {
    $.ajax({
        url: "/news/getbyid",
        type: "get",
        data: {newsid:getQueryString("id")} ,
        dataType: 'json',
        success: function(data) {
        	console.log("title:"+data[0]);
            $("#newsid").val(data[0].newid);
            $("#newstitle").val(data[0].newtitle);
            console.log($("#newstitle").val());
        },
        error: function() {
            console.log("aaa")
        }
    });
    //编辑处理
    $("#okclick").on('click', function() {
        var input_str = $("#newstitle").val();
        if (input_str == "") {
            jNotify("请输入新闻标题!");
            return false;
        }
        var id = $("#newsid").val();
        var btn = $(this);
        $.ajax({
            type: "POST",
            url: '/news/update',
            data: {newids:id,newtitles:input_str},
            success: function(msg) {
                if (msg) {
                    alert("编辑成功!");
                   window.location.href ="index.html"
                } else {
                    alert("操作失败!");
                    return false;
                }
            }
        });
    });
    $("#backid").on("click",function(){
         window.location.href ="index.html"
    })
});