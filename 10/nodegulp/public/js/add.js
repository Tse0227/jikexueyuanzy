$("#submitok").on('click', function() {
    var input_str = $("#newstitle").val();
    if (input_str == "") {
        alert("请输入新闻标题!");
        return false;
    }
    $.ajax({
        type: "POST",
        url: '/news/add',
        data: {
            newtextssss: input_str
        },
        success: function(msg) {
            if (msg) {
                alert("新增成功!");
                
                window.location.href = "index.html"
            } else {
                alert("操作失败!");
                return false;
            }
        }
    });
});
$(function() {
    $('#backid').click(function() {
        window.location.href = "/index.html";
    });

});