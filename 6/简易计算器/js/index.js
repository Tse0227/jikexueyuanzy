
//计算中要用到的变量
var formulaToShow = ""; //要显示的计算式
var formulaToCalcu = ""; //要计算的计算式
var result = " "; //计算结果
var saved = "0"; //存储的数

//判断算术符号能否按
var flag = true;

//默认的参数
var init = 1;
//生成计算式的函数
function TypeFormula(com) {
    //如果是已经求过值，则清屏并重新开始计算
    if ((result != " " || result == "0") && com != "save") {
        formulaToShow = "";
        result = " ";
    }

    //得到按钮信息
    switch (com) {
        case "clear": //清空
            formulaToShow = "";
            result = " ";
            break;
        case "back": //退格（这个写的有些冗余）
            {
                var f = formulaToShow;
                if (f.substring(f.length - 5, f.length) == "sqrt(")
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 5);
                else if (f.substring(f.length - 4, f.length) == "sin(" || f.substring(f.length - 4, f.length) == "cos(" || f.substring(f.length - 4, f.length) == "tan(")
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 4);
                else
                    formulaToShow = formulaToShow.substring(0, formulaToShow.length - 1);
            }
            break;
        case "+":
            {
                if (formulaToShow == "") {
                    formulaToShow = "0" + com;
                    flag = false;
                } else if (flag) {
                    formulaToShow += com;
                    flag = false;
                } else {
                    var rp = formulaToShow.substring(formulaToShow.length - 1);
                    formulaToShow = formulaToShow.replace(rp, com);
                }
            }
            break;
        case "-":
            {
                if (formulaToShow == "") {
                    formulaToShow = "0" + com;
                    flag = false;
                } else if (flag) {
                    formulaToShow += com;
                    flag = false;
                } else {

                    var rp = formulaToShow.substring(formulaToShow.length - 1);
                    formulaToShow = formulaToShow.replace(rp, com);
                }
            }
            break;
        case "*":
            {
                if (formulaToShow == "") {
                    formulaToShow = "1" + com;
                    flag = false;
                } else if (flag) {
                    formulaToShow += com;
                    flag = false;
                } else {
                    var rp = formulaToShow.substring(formulaToShow.length - 1);
                    formulaToShow = formulaToShow.replace(rp, com);
                }
            }
            break;
        case "/":
            {
                if (formulaToShow == "") {
                    formulaToShow = "1" + com;
                    flag = false;
                } else if (flag) {
                    formulaToShow += com;
                    flag = false;
                } else {
                    var rp = formulaToShow.substring(formulaToShow.length - 1);
                    formulaToShow = formulaToShow.replace(rp, com);
                }
            }
            break;
        case "sin(":
            {
                if (flag) {
                    formulaToShow += com;
                    flag = false;
                }
            }
            break;
        case "cos(":
            {
                if (flag) {
                    formulaToShow += com;
                    flag = false;
                }
            }
            break;
        case "tan(":
            {
                if (flag) {
                    formulaToShow += com;
                    flag = false;
                }
            }
            break;
        case "sqrt(":
            {
                if (flag) {
                    formulaToShow += com;
                    flag = false;
                }
            }
            break;

        case "sign":
            {
                if (formulaToShow == "") {
                    formulaToShow = "-";
                } else if (formulaToShow[0] == "-") {
                    formulaToShow = formulaToShow.substring(1, formulaToShow.length);
                } else {
                    formulaToShow = "-" + formulaToShow;
                }
            }
            break;
        case "result": //计算结果
            { //判断结尾是不是计算符号+ - * /
                var substr1 = formulaToShow.substring(formulaToShow.length - 1);
                //判断结尾是不是计算符号 sin cos tan
                var substr2 = formulaToShow.substring(formulaToShow.length - 4, formulaToShow.length);
                //判断结尾是不是计算符号 sqrt
                var substr3 = formulaToShow.substring(formulaToShow.length - 5, formulaToShow.length);
                //判断cos tan sqrt sin 前是否有计算符号
                var substr4;
                if (formulaToShow.indexOf("cos(") != -1) {
                    substr4 = formulaToShow.substring(formulaToShow.indexOf("cos(") - 1, formulaToShow.indexOf("cos("));
                }
                if (formulaToShow.indexOf("sin(") != -1) {
                    substr4 = formulaToShow.substring(formulaToShow.indexOf("sin(") - 1, formulaToShow.indexOf("sin("));
                }
                if (formulaToShow.indexOf("tan(") != -1) {
                    substr4 = formulaToShow.substring(formulaToShow.indexOf("tan") - 1, formulaToShow.indexOf("tan("));
                }
                if (formulaToShow.indexOf("sqrt(") != -1) {
                    substr4 = formulaToShow.substring(formulaToShow.indexOf("sqrt(") - 1, formulaToShow.indexOf("sqrt("));
                }
                if (formulaToShow == "") {
                    result = " ";
                } else if (formulaToShow.lastIndexOf("/") != -1) {
                    var forstr = formulaToShow.substring(formulaToShow.lastIndexOf("/") + 1);
                    if (forstr == "0") {
                        result = "除数不能为0！";
                    }
                } else if (substr1 == "*" || substr1 == "/" || substr1 == "+" || substr1 == "-") {
                    result = "请输入正确的算式";

                } else if (substr2 == "cos(" || substr2 == "sin(" || substr2 == "tan(") {
                    result = "请输入正确的算式";
                } else if (substr3 == "sqrt(") {
                    result = "请输入正确的算式";
                } //判断cos tan sqrt sin 前是否有计算符号 
                else if (substr4 != "*" || substr4 != "/" || substr4 != "+" || substr4 != "-") {
                    if (substr4 == "") {

                        formulaToCalcu = formulaToShow.toString();
                        formulaToCalcu = formulaToCalcu.replace(/sin/g, "Math.sin");
                        formulaToCalcu = formulaToCalcu.replace(/cos/g, "Math.cos");
                        formulaToCalcu = formulaToCalcu.replace(/tan/g, "Math.tan");
                        formulaToCalcu = formulaToCalcu.replace(/sqrt/g, "Math.sqrt");
                        try {
                            result = eval(formulaToCalcu);
                        } catch (exception) {
                            window.alert(exception);
                        }

                    } else {
                        result = "请输入正确的算式";

                    }
                } else {
                    formulaToCalcu = formulaToShow.toString();
                    formulaToCalcu = formulaToCalcu.replace(/sin/g, "Math.sin");
                    formulaToCalcu = formulaToCalcu.replace(/cos/g, "Math.cos");
                    formulaToCalcu = formulaToCalcu.replace(/tan/g, "Math.tan");
                    formulaToCalcu = formulaToCalcu.replace(/sqrt/g, "Math.sqrt");

                    try {
                        result = eval(formulaToCalcu);
                    } catch (exception) {
                        window.alert(exception);
                    }
                }
            }
            break;
        default:
            // 括号匹配
            var fo = formulaToShow;
            if (fo.indexOf("sqrt(") != -1 || fo.indexOf("sin(") != -1 || fo.indexOf("tan(") != -1 || fo.indexOf("cos(") != -1) {
                if (fo.substring(fo.length - 5, fo.length) == "sqrt(") {
                    formulaToShow = formulaToShow + com + ")";
                } else if (fo.substring(fo.length - 4, fo.length) == "sin(" || fo.substring(fo.length - 4, fo.length) == "cos(" || fo.substring(fo.length - 4, fo.length) == "tan(") {
                    formulaToShow = formulaToShow + com + ")";
                }
            } else {
                formulaToShow += com;
            }

            flag = true;
            break;
    }

    txtShow.innerHTML = formulaToShow + "<br/>" + result + "<br/>";
}