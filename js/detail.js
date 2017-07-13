$(function() {
      //封装倒计时函数
      function Countdown(end) {
            //获取结束时间
            var endtime = new Date("2017/07/30,12:20:12");
            //获取当前时间            
            var nowtime = new Date();
            //时间差             
            var lefttime = parseInt((endtime.getTime() - nowtime.getTime())); 
            d = parseInt(lefttime / 3600 / 1000 / 24); //天             
            h = parseInt((lefttime / 3600 / 1000) % 24); //小时   
            m = parseInt((lefttime / 60 / 1000) % 60); //分钟  
            s = parseInt((lefttime / 1000) % 60); //秒
            //根据毫秒算出最后的倒计时
            ms = parseInt(lefttime / 60 % 10);
            //添加到title_4
            $(".title_4_detail").html('<span>' + d + '</span>天<span>' + h + '</span>小时<span>' + m + '</span>分<span>' + s + '</span>秒<span>' + ms + '</span>');
      }
         Countdown();
            var sh;    
            sh = setInterval(Countdown, 100);

            //尺码选择
            $(".size ul").find("li").click(function(){
                  $(this).css({
                       "backgroundColor":"#d70057",
                       "color":"#fff"
                  }).siblings().css({
                        "backgroundColor":"#fff",
                       "color":"#999"
                  })
            })




            //修改数量
          function goodsNumber(){
            //减号
              $(".number ul").find("#sub").click(function(){
                  var num = $("#ipt").val();
                  if (num>1) {
                     num --;   
                  } else {
                        num = 1;
                  }
                   $("#ipt").val(num);
            })
              //加号
               $(".number ul").find("#add").click(function(){
                    var num = $("#ipt").val();
                    if (num<9) {
                         num ++;
                   } else {
                        alert("一次最多购买9个");
                   }
                   
                   return $("#ipt").val(num);
            })

          }
          goodsNumber();

})

         



$(function() {

      var magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 450, //承载容器宽
            height: 450, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 5 //缩放比例
      };

      var _magnifier = magnifier(magnifierConfig);
});