  function getsore() {
      // 获取文本框数值
      var sore = document.getElementById("mark").value;
      if (!sore) {
          alert("请输入值！");
          return;
          
      } else if (isNaN(sore)) {
          alert("请输入0~100间的数字！");
          return;
      }
      console.log(sore);
      // 转化为string字符
      var init = (sore / 10);

      // 取整
      var initsubstr = parseInt(init)
          //判断分数是否不在范围内
      if (init > 10) {
          initsubstr++;
      } else if (init < 0) {
          initsubstr--
      }
      console.log(initsubstr);
      switch (initsubstr) {
          case 0:
              alert("该生分数为:" + sore + ",分数在0~10,属于十等生");
              break;
          case 1:
              alert("该生分数为:" + sore + ",分数在10~20,属于九等生");
              break;
          case 2:
              alert("该生分数为:" + sore + ",分数在20~30,属于八等生");
              break;
          case 3:
              alert("该生分数为:" + sore + ",分数在30~40,属于七等生");
              break;
          case 4:
              alert("该生分数为:" + sore + ",分数在40~50,属于六等生");
              break;
          case 5:
              alert("该生分数为:" + sore + ",分数在50~60,属于五等生");
              break;
          case 6:
              alert("该生分数为:" + sore + ",分数在60~70,属于四等生");
              break;
          case 7:
              alert("该生分数为:" + sore + ",分数在70~80,属于三等生");
              break;
          case 8:
              alert("该生分数为:" + sore + ",分数在80~90,属于二等生");
              break;
          case 9:
              alert("该生分数为:" + sore + ",分数在90~100,属于一等生");
              break;
          case 10:
              alert("该生分数为:" + sore + ",分数在90~100,属于一等生");
              break;
          default:
              alert("请输入0~100间的数字！");
              break;
      }

  }
