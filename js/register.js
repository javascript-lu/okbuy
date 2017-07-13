/**
 * Created by Administrator on 2017/6/20.
 */
$(function() {
  //判断手机号码是否正确
  $("#ipt_phone").blur(function() {
      // 初始化
      $(".phone>img").css("display", "none");
      $(".hint_phone>i").removeClass("warning");
      $(".hint_phone>span").text("");
      $("#ipt_phone").css("border", "1px #999 solid");
      //获取用户输入的信息
      var value = $("#ipt_phone").val();

      if (value && $.cookie(value)) {
        //用户名存在
        $(".hint_phone>i").addClass("warning");
        $(".hint_phone>span").text("此手机号已使用");

      } else {
        RegExp("phone", value);
      }

    })
    //判断密码
  $("#ipt_pwd").blur(function() {
    // 初始化
    $(".pwd>img").css("display", "none");
    $(".hint_pwd>i").removeClass();
    $(".hint_pwd>span").text("");
    $("#ipt_pwd").css("border", "1px #999 solid");
    //获取用户输入的信息
    var value = $("#ipt_pwd").val();
    RegExp("password", value);
  })


  //判断验证码
  $("#ipt_sec").blur(function() {
    // 初始化
    $("#sec_img").css("display", "none");
    $(".hint_sec>i").removeClass("warning");
    $(".hint_sec>span").text("");
    $("#ipt_sec").css("border", "1px #999 solid");
    //获取用户输入的信息
    var value = $("#ipt_sec").val();
    RegExp("identity", value);
  })

  //点击提交按钮
  $("#ipt_btn").click(function() {
    Judge();

  })

  //点击注册按钮,判断条件是否成立
  function Judge() {
    //获取表单的值
    var value1 = $("#ipt_phone").val();
    var value2 = $("#ipt_pwd").val();
    var value3 = $("#ipt_sec").val();
    //首先判断表单值是否符合(前提是表单值不为空)
    if (value1 == "") {
      RegExp("phone", value1);
      //用户名存在
    } else {
      //如果值不为空,再和cookie判断
      if ($.cookie(value1)) {
        $(".hint_phone>i").addClass("warning");
        $(".hint_phone>span").text("此手机号已使用");
      } else {
        RegExp("phone", value1);
      }

    }

    RegExp("password", value2);
    RegExp("identity", value3);

    //判断表单的值不为空
    if (value1 != "" && value2 != "" && value3 != "") {
      //判断输入信息有没有错误
      if ($(".hint_phone span").text() == "" && $(".hint_pwd span").text() == "" && $(".hint_sec span").text() == "") {
        //执行isSuccess();
        console.log(111);
        isSuccess();
      }
    }
  }

  //封装正则表达式方法 key表示类型 如 phone、password
  function RegExp(key, value) {
    if (key == "phone") {
      var ss = /^1(3|5|7|8|4)[\d]{9}$/
      if (ss.test(value)) {
        $(".phone>img").hide().show();
      } else if (!ss.test(value) && value == "") {
        //判断手机号码为空
        $(".hint_phone>i").removeClass().addClass("warning");
        $(".hint_phone>span").text("请输入手机号码!");
        $("#ipt_phone").css("border", "1px #d70057 solid");
      } else {
        //判断手机号码错误
        $(".hint_phone>i").removeClass().addClass("warning");
        $(".hint_phone>span").text("请输入正确的11位手机号码!");
        $("#ipt_phone").css("border", "1px #d70057 solid");
      }
      //判断密码是否合法
    } else if (key == "password") {
      var ss = /[a-zA-Z0-9_]{6,16}/; //[a-zA-Z0-9_]{6,16}
      if (ss.test(value)) {
        $(".pwd>img").hide().show();
      } else if (!ss.test(value) && value == "") {
        //判断密码为空
        $(".hint_pwd>i").removeClass().addClass("warning");
        $(".hint_pwd>span").text("请设置密码!");
        $("#ipt_pwd").css("border", "1px #d70057 solid");
      } else {
        //判断密码安全程度
        $(".hint_pwd>i").removeClass().addClass("weak");
        $(".hint_pwd>span").text("6-16个字符，建议由字母、数字、符号组合");
        $("#ipt_pwd").css("border", "1px #d70057 solid");
      }
      //判断验证码
    } else if (key == "identity") {
      if (value == "2872") {
        $("#sec_img").hide().show();
      } else if (value != "2872" && value == "") {
        //判断验证码为空
        $(".hint_sec>i").removeClass().addClass("warning");
        $(".hint_sec>span").text("请设置验证码!");
        $("#ipt_sec").css("border", "1px #d70057 solid");
      } else {
        //判断验证码是否正确
        $(".hint_sec>i").removeClass().addClass("warning");
        $(".hint_sec>span").text("图形验证码不正确");
        $("#ipt_sec").css("border", "1px #d70057 solid");
      }
    }
  }
  //当密码改变时，会提示密码的安全程度
  function pwdChange() {
    //档键盘按下的时候触发事件
    $("#ipt_pwd").keypress(function() {
      //获取输入值
      var value = $("#ipt_pwd").val();
      //判断密码的强弱
      if (value.length >= 6 && value.length <= 10) {
        $(".hint_pwd>i").removeClass().addClass("middle");
        $(".hint_pwd>span").text("").text("可以使用三种以上的组合来提高安全强度!")
      } else if (value.length >= 11 && value.length <= 16) {
        $(".hint_pwd>i").removeClass().addClass("strong");
        $(".hint_pwd>span").text("").text("您的密码很安全!");
      } else {
        $(".hint_pwd>i").removeClass().addClass("weak")
        $(".hint_pwd>span").text("").text("6-16个字符，建议由字母、数字、符号组合");
        $(".hint_pwd>span").css("color", "gray");
      }
      //$(".hint_pwd>i").addClass("middle");
      //$(".hint_pwd>span").text("6-16个字符，建议由字母、数字、符号组合!");
    })
  }
  pwdChange();

  //判断注册是否成功,如果成功则把注册信息存入cookie
  function isSuccess() {
    //如果成功，则会把信息存到cookie里面             
    var userName = $("#ipt_phone").val();
    var passWord = $("#ipt_pwd").val();
    //调用jQuery cookie
    console.log("开始设置cookie");
    console.log(userName);
    console.log(passWord);
    $.cookie(userName, passWord, {
      path: '/',
      expires: 365
    });
    console.log("cookie设置完成");
    //当把数据存入cookie以后,清空表单内容
    $("#ipt_phone,#ipt_pwd,#ipt_sec").val("");
    //清除右侧正确验证符号
    $(".phone>img,.pwd>img,#sec_img").hide();

  }
})

//密码显示方式
$(function() {
  $(".pwd>span").click(function() {
    if ($(this).attr("class") == "show") {
      $(this).removeClass("show").addClass("hide");
      $("#ipt_pwd").attr("type", "text");
    } else {
      $(this).removeClass("hide").addClass("show");
      $("#ipt_pwd").attr("type", "password");
    }
  })
})