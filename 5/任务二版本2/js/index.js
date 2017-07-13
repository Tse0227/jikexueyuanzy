    //求值函数
    function fucresult(btn) {
        // 获取两个输入框的值
        var number1 = document.getElementById("num1").value;
        var number2 = document.getElementById("num2").value;
        //结果
        var result;
        // 判断是否有输入值
        if (number1 != "" && number2 != "") {
            // 判断是否为数字
            if (isNaN(number1) == false && isNaN(number2) == false) {
                switch (btn) {
                    case "+":
                        // result = eval(number1 + "+" + number2);
                        result = adda(number1, number2);
                      
                        break;
                    case "-":
                        // result = number1 - number2;
                        result = suba(number1,number2);
                        break;
                    case "*":
                        // result = eval(number1 + "*" + number2);
                        result = mul(number1, number2);
                        
                        break;
                    case "/":
                        if (number2 != 0) {

                            // result = number1 / number2;
                            result = div(number1,number2);
                            
                        } else {
                            result = "除数不能为0";
                        }
                        break;
                    default:
                        alert("出错啦");
                        break;

                }
                document.getElementById("result").value = result;
            } else {

                alert("请输入输入正确的数字");
                return;
            }
        } else {
            alert("请输入要计算的值")
        }
    }
// 加
    function adda(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
    }
// 减
    function suba(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
    }
// 除
    function mul(a, b) {
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    }
// 乘
    function div(a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
    }
