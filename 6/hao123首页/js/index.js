//获取最外层div
var bg = document.getElementById("allblock");
// 获取换肤按钮
var inita = document.getElementById("s_skic");
//换肤点击事件
inita.onclick = function() {

    var n1 = Math.floor(Math.random() * 3); //输出1～3之间的随机整数
    // 定义背景图数组
    var arr = ["image/a.jpg", "image/b.jpg", "image/c.jpg"];
    // 改变背景图片
    bg.style.backgroundImage = "url(" + arr[n1] + ")";
    // 设计cookie
    setCookie("skin", arr[n1], 365);
    // 设置locastorage
    localStorage.skin=arr[n1];
}

// onload时执行checkCookie()
window.onload = checkCookie();

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
   var skin = getCookie('skin')||localStorage.skin;
    if (skin != null && skin != "") {
        bg.style.backgroundImage = "url(" +skin+ ")";
    } 
}
