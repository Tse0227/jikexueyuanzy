$(document).ready(function() {
    $.ajax({
        url: '/getlist',
        type: "get",
        dataType: 'json',
        success: function(data) {
            console.log(data[0].newsid);
            for (var i = 0; i <= data.length - 1; i++) {
                var tr = $("<tr>").appendTo($(".table"));
                var newid = $("<td>" + data[i].newid + "</td>").appendTo(tr);
                var newimg = $("<td>../img.jpg</td>").appendTo(tr);
                var newtitle = $("<td>" + data[i].newtitle + "</td>").appendTo(tr);
                var tdlast = $("<td>").appendTo(tr);
                var btnedit = $(' <button type="button" class="btn btn-info upadatenew" >编辑</button>').appendTo(tdlast);
                var btndel = $(' <butto type="button" class="btn btn-danger delnews" >删除</button>').appendTo(tdlast);
            }
            $(".upadatenew").on("click", function() {
                var neid = $(this).parent().parent().find("td").eq(0).html();
                window.location.href = "edit.html?id=" + neid;
            });
            $(".delnews").on("click", function() {
                /* Act on the event */
                var neid = $(this).parent().parent().find("td").eq(0).html();
                var trs = $(this).parent().parent();
                $.ajax({
                    type: "POST",
                    url: '/news/dellist',
                    data: { newids: neid },
                    success: function(msg) {
                        if (msg) {
                            alert("删除成功!@@@");

                            trs.remove();
                        } else {
                            alert("操作失败!");
                            return false;
                        }
                    }
                });

            })
        }
    });
});
$(function() {


    $('#addnew').click(function() {

        window.location.href = "add.html";
    });
    $('.upadatenew').click(function() {
        alert("aaa")

        window.location.href = "edit.html";
    });

});
