$(function() {

  //鼠标悬浮购物车 显示购物清单
  $(".nav_mid_r").hover(function() {
    //向下展开
    $(".addCart").stop().slideDown();
  }, function() {
    //向上缩起
    $(".addCart").stop().slideUp();
  })



  //点击加入购物车按钮 添加物品 
  $(".go input").click(function() {

    //先判断cookie里是否有这个信息
    if (!$.cookie("goodsInfo")) {
      //如果没有则创建
      $.cookie("goodsInfo", '[{"id":"' + this.id + '" ,"num":"1"}]', {
        path: '/',
        expires: 30
      });

    } else {
      //添加数据
      var cookieArr = JSON.parse($.cookie("goodsInfo"));
      //查找是不是有相同的物品

      var isSame = false; //标志
      for (var i = 0; i < cookieArr.length; i++) {
        if (cookieArr[i].id == this.id) {
          cookieArr[i].num++;
          isSame = true;
          break;
        }
      }

      if (isSame == false) {
        //创建一个对象
        var goods = {
          "id": this.id,
          "num": "1"
        };
        //把对象添加到数组
        cookieArr.push(goods);
      }

      //更新cookie
      var cookieStr = JSON.stringify(cookieArr);
      $.cookie("goodsInfo", cookieStr, {
        path: '/',
        expires: 30
      });

      //调用计数函数
      getCartNum();
    }
  })
  getCartNum();


  //封装获取购物车数量的函数
  function getCartNum() {
    if ($.cookie("goodsInfo")) {
      var cookieArr = JSON.parse($.cookie("goodsInfo"));
      //遍历
      var counts = 0;
      for (var i = 0; i < cookieArr.length; i++) {
        //计数
        counts += Number(cookieArr[i].num);
      }
      $("#goodsNum").html(counts);
    }
  }



  //购物车显示栏
  $.getJSON("json/index.json", function(res) {
    //现获取cookie数据
    var cookieArr = JSON.parse($.cookie("goodsInfo"));
    //console.log(cookieArr);
    var html = "";
    var result = res.listPages;
    //遍历
    
    //遍历json
    for (var i = 0; i < result.length; i++) {
      //遍历cookie
      for (var j = 0; j < cookieArr.length; j++) {
        //当cookie里的id和json里的id对应 才获取数据
        if (cookieArr[j].id == result[i].id) {
          //字符串拼接
          html += '<div class="addCart_cell">' +
            '<a href="javascript:;" class="img"><img src="' + result[i].image1 + '"></a>' +
            '<div class="text">' +
            '<p class="name"><a href="javascript:;">' + result[i].goodsName + '</a></p>' +
            '<p><span class="price">' + result[i].price + '</span><span class="rmb">RMB</span>x<span class="count">' + cookieArr[j].num + '</span></p>' +
            '</div><a href="javascript:;" class="remove">x</a></div>'
        }
        //添加html文件
        $(".addCart").html(html);
      }
    }
  })



  //购物车页面显示数据
  $.getJSON("json/index.json", function(res) {
    //现获取cookie数据
    var cookieArr = JSON.parse($.cookie("goodsInfo"));
    var html = "";
    var result = res.listPages;
    //遍历
    //遍历json
    for (var i = 0; i < result.length; i++) {
      //遍历cookie
      for (var j = 0; j < cookieArr.length; j++) {
        //当cookie里的id和json里的id对应 才获取数据
        if (cookieArr[j].id == result[i].id) {
          //字符串拼接
          var all = parseInt(cookieArr[j].num) * parseInt(result[i].price);
          html += ' <table>' +
            '<tbody>' +
            '<tr>' +
            '<td style="width: 110px">' +
            '<span></span>' +
            '</td>' +
            '<td style="width: 470px">' +
            '<a href="javascript:;">' +
            '<img src="' + result[i].image1 + '" class="img">' +
            '<strong>' + result[i].goodsName + '</strong><br>' +
            '<small>尺码：<i>36</i></small>' +
            '</a>' +
            '</td>' +
            '<td style="width: 110px">' + result[i].price + '</td>' +
            '<td style="width: 240px">' +
            '<ul>' +
            '<li>' +
            '<span>-</span>' +
            ' </li>' +
            ' <li><input type="text" name="" value = "' + cookieArr[j].num + '"></li><li><span>+</span></li></ul></td>' +
            '<td style="width: 110px"><span>￥<pr>' + all + '</pr></span></td><td><span></span><span></span>' +
            '</td></tr></tbody></table>'
        }
        //添加html文件
        $(".cartlistin").html(html);
      }
    }
  })

})