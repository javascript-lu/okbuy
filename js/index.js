$(function() {
      //动态创建商品列表名称
      $.getJSON("json/index.json", function(res) {
                  var result = res.brand;
                  //循环遍历
                  $.each(result.src, function(i, field) {
                        //创建a标签
                        var oA = $('<a href="list.html"></a>');
                        $(".brand_bot").append(oA);
                        //创建img标签,并且追加到a标签里面				
                        var oImg = $('<img src="" alt="">');
                        $(oA).append(oImg)
                        oImg.attr("src", field);

                  });
            })
            //获取第一个商品列表专题
      $.getJSON("json/index.json", function(res) {
            //获取相应的数据
            var result = res.brandList_1;
            //遍历
            $.each(result, function(i, field) {
                  //创建li标签
                  var $li = $('<li></li>');
                  //把li标签添加到ul
                  $(".brandlist_1_ul").append($li);
                  //创建a标签 并添加到li
                  var $a = $('<a href="list.html"></a>');
                  $li.append($a);
                  //创建img标签 并添加到a标签
                  var $img = $('<img src="">');
                  $a.append($img);
                  //添加内容
                  $img.attr("src", field.picSrc);
                  //创建标签1 并添加内容
                  var $span_1 = $('<span class = "title_1"></span>');
                  $a.append($span_1);
                  $span_1.text(field.title1);
                //创建标签2 并添加内容
                  var $span_2 = $('<span class = "title_2"></span>');
                  $a.append($span_2);
                  $span_2.text(field.title2);
                  //创建标签3 并添加内容
                  var $span_3 = $('<span class = "title_3"></span>');
                  $a.append($span_3);
                  $span_3.text(field.discount);
                  //创建倒计时
                  var $timer = $('<span class="title_4"></span>');
                  $a.append($timer);
                  Countdown();
                  var sh;    
                  sh = setInterval(Countdown, 100);
            })

      })

      //获取第二个商品列表专题
      $.getJSON("json/index.json", function(res) {
            //获取相应的数据
            var result = res.brandList_2;
            //遍历
            $.each(result, function(i, field) {
                  //创建li标签
                  var $li = $('<li></li>');
                  //把li标签添加到ul
                  $(".brandlist_2_ul").append($li);
                  //创建a标签 并添加到li
                  var $a = $('<a href="list.html"></a>');
                  $li.append($a);
                  //创建img标签 并添加到a标签
                  var $img = $('<img src="">');
                  $a.append($img);
                  //添加内容
                  $img.attr("src", field.picSrc);
                  //创建标签1 并添加内容
                  var $p = $('<p>' + field.title1 + '<span>' + field.title2 + '</span></p>');
                  $a.append($p);
                  var $timer = $('<span class="title_4"></span>');
                  $a.append($timer);
                  //调用倒计时函数
                  Countdown();
                  var sh;    
                  sh = setInterval(Countdown, 100);
            })

      })


      //封装倒计时函数
      function Countdown(end) {
            //获取结束时间
            var endtime = new Date("2017/07/29,12:20:12");
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
            $(".title_4").html('<span>' + d + '</span>天<span>' + h + '</span>小时<span>' + m + '</span>分<span>' + s + '</span>秒<span>' + ms + '</span>');
      }

})

$(function() {
      //顶部导航下拉菜单
      $(".ul_right").find("li").mouseover(function() {
            $(this).css({
                        "background": "#fff",
                        "borderColor": "#d9d9d9"
                  }).find("div")
                  .css("display", "block").end().find("i").css("color", "#fff");
      })

      $(".ul_right").find("li").mouseout(function() {
            $(this).css({
                        "background": "#f2f2f2",
                        "borderColor": "#f2f2f2"
                  }).find("div")
                  .css("display", "none").end().find("i").css("color", "#d9d9d9");
      })

      //轮播图引用
      var list = [{
            imgUrl: 'img/banner_1.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_2.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_3.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_4.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_5.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_6.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_7.jpg',
            href: '#'
      }, {
            imgUrl: 'img/banner_8.jpg',
            href: '#'
      }]
      var Width = $(window).width();
      $('.slideshow').fade({
            url: list,
            boxWid: Width,
            boxHei: 350
      }).css({
            margin: '0 auto'
      })


      //导航栏固定
      //获取导航条到顶部的高度
      var navOffset = $(".nav_bot").offset().top;
      $(window).scroll(function() {
            //滚动的高度
            var scrollPos = $(window).scrollTop();
            //当滚动高度大于导航条的高度
            if (scrollPos >= navOffset) {
                  $(".nav_bot").addClass("nav_bot_fixed");
            } else {
                  $(".nav_bot").removeClass("nav_bot_fixed");
            }
      });


      //导航栏下拉菜单展开
      function spread(){
            $(".warp").find("li").eq(2).hover(function(){
                  $(".warp_list_3 ").show();
            },function(){
                  $(".warp_list_3 ").hide();
            })

              $(".warp").find("li").eq(3).hover(function(){
                  $(".warp_list_4 ").show();
            },function(){
                  $(".warp_list_4 ").hide();
            })

                $(".warp").find("li").eq(4).hover(function(){
                  $(".warp_list_5 ").show();
            },function(){
                  $(".warp_list_5 ").hide();
            })


                  $(".warp").find("li").eq(5).hover(function(){
                  $(".warp_list_6 ").show();
            },function(){
                  $(".warp_list_6 ").hide();
            })
      }
      spread();
   
   //动态获取下拉菜单数据
   //鞋子
   $.getJSON("json/index.json",function(res){

        var result = res.sports.column1.shoes;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".shoes").html(html);
   })
   //衣服
    $.getJSON("json/index.json",function(res){

        var result = res.sports.column1.clothes;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".clothes").html(html);
   })
    //周边
     $.getJSON("json/index.json",function(res){

        var result = res.sports.column1.around;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".around").html(html);
   })
   //第二列
     $.getJSON("json/index.json",function(res){

        var result = res.sports.column2;
        var html = "";
            html += '<a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_2").html(html);
   })
      //第三列
     $.getJSON("json/index.json",function(res){

        var result = res.sports.column3;
        var html = "";
        console.log(result);
            html += '<a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_3").html(html);
   })

      //男装
   $.getJSON("json/index.json",function(res){

        var result = res.outer.column1.men;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".men").html(html);
   })
   //女装
    $.getJSON("json/index.json",function(res){

        var result = res.outer.column1.women;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".women").html(html);
   })

    //第二列
     $.getJSON("json/index.json",function(res){

        var result = res.outer.column2;
        var html = "";
            html += '<h3>户外生活</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_4_2").html(html);
   })
      //第三列
     $.getJSON("json/index.json",function(res){

        var result = res.outer.column3;
        var html = "";
        console.log(result);
            html += '<h3>品牌导购</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_4_3").html(html);
   })

     // 名鞋
       //夏装
   $.getJSON("json/index.json",function(res){

        var result = res.shoe.column1.summer;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".summer").html(html);
   })
   //冬装
    $.getJSON("json/index.json",function(res){

        var result = res.shoe.column1.winter;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".winter").html(html);
   })

    //第二列
     $.getJSON("json/index.json",function(res){

        var result = res.shoe.column2;
        var html = "";
            html += '<h3>男款</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_5_2").html(html);
   })
      //第三列
     $.getJSON("json/index.json",function(res){

        var result = res.shoe.column3;
        var html = "";
        console.log(result);
            html += '<h3>品牌导购</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_5_3").html(html);
   })

       // 儿童
       //衣服
   $.getJSON("json/index.json",function(res){

        var result = res.child.column1.clothes;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".child_clothes").html(html);
   })
   //鞋子
    $.getJSON("json/index.json",function(res){

        var result = res.child.column1.shoes;
        var html = "";
       $.each(result, function(i, field) {
            html += '<a href="javascript:;">'+field+'</a>'
          
       })
       $(".child_shoes").html(html);
   })

    //第二列
     $.getJSON("json/index.json",function(res){

        var result = res.shoe.column2;
        var html = "";
            html += '<h3>儿童生活</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_6_2").html(html);
   })
      //第三列
     $.getJSON("json/index.json",function(res){

        var result = res.shoe.column3;
        var html = "";
        console.log(result);
            html += '<h3>品牌导购</h3><a href="javascript:;"><img src="'+result+'"></a>'
       $(".column_6_3").html(html);
   })


})

//http://i.okaybuy.cn/static/7c667ae59b0c9581957db11ebb4518fc.jpg
//http://i.okaybuy.cn/static/311f3344bc35da18c91fdac497df7e05.jpg