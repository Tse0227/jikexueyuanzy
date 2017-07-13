   //判断是否清空计算表达式
   var flag = false;
   //判断第一次点击
   var first = true;
   //判断有没有符号
   var btnflag = false;
   //点击数字键与符号
   function onclikbtn(btn) {
       if (first) {
           if (btnflag) {
               if (btn == "*" || btn == "/" || btn == "+" || btn == "-") {
                   first = false;
                   document.getElementById("textinput").value += btn;
               } else {
                   document.getElementById("textinput").value = "" + btn;
                   first = false;
               }
           }
       } else {
           //判断是否要清空
           if (btnflag) {
               if (flag) {
                   clearup();
                   flag = false;
                   document.getElementById("textinput").value = "" + btn;
               } else {
                   document.getElementById("textinput").value += btn;
               }
           }
       }

   }
   //点击等号
   function onclikok() {
       var str = document.getElementById("textinput").value;
       console.log(str);
       console.log(str.indexOf("/"));
       //判读除数是否为0
       if (str.substring(str.indexOf("/") + 1) == "0") {
           alert("除数不能为0");
           flag = true;

       } else {
           document.getElementById("textinput").value = eval(document.getElementById("textinput").value);
           flag = false;
       }
   }
   //清空函数
   function clearup() {
       document.getElementById("textinput").value = "0";
       first = true;
   }
