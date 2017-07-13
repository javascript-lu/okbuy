/**
 * Created by Administrator on 2017/6/21.
 */
$(function () {
    $(".login_top>span").click(function () {
        //获取span元素的下标
        var $index = $(this).index();
        //更改点击元素的颜色
        $(this).css("color","#d70057").siblings("span").css("color","#333");
        //根据下标改变登录方式
        if ($index == 0){
            $(".scanLife").hide();
        } else if ($index == 1){
            $(".scanLife").show();
        }

        //鼠标在二维码上移入移出 图片运动
        $(".scanLife  .scanLife_move").hover(function () {
            $("#scanLife_img_1").stop().animate({
                left:-10,
            })
            $("#scanLife_img_2").stop().fadeIn();
        },function () {
            $("#scanLife_img_1").stop().animate({
                left:80,
            })
            $("#scanLife_img_2").stop().fadeOut();
        })
        
        //下载好乐买app二维码弹出
        $(".scanLife>a").hover(function(){
            $(".scanLife_img").show();
        },function(){
             $(".scanLife_img").hide();
        })
    })
})
    //登录界面表单验证
    $(function(){
        //登录界面所有的判断都在提交登录信息以后
        $("#submit").click(function(){
        //获取用户信息之前,要清空之前的信息
        $(".hint_user i,.hint_password i,.hint_all i").removeClass("warning");
        $(".hint_user span,.hint_password span,.hint_all span").text("");
        //首先根据用户输入的信息,从cookie里面获取
        var username = $("#username").val();
        var password = $("#password").val();
        //用户名和密码都为空
        if (username == "" && password == "") {
            $(".hint_user i,.hint_password i").addClass("warning");
            $(".hint_user span").text("请填写邮箱/已验证手机/用户名");
            $(".hint_password span").text("请填写密码");
        } else if (username != "" && password == ""){
            $(".hint_password i").addClass("warning");      
            $(".hint_password span").text("请填写密码");
        } else if (username == "" && password != ""){
            $(".hint_user i").addClass("warning");
            $(".hint_user span").text("请填写邮箱/已验证手机/用户名");
        } 
        //当用户名和密码都输入的时候,判断其是否正确
        else if (username != "" && password != "") {
            //从cookie中获取用户信息
            isInfo(username,password);
        }

        })
    })

    //当用户名和密码都存在的时候,封装函数判断用户名和面膜是否正确
     function isInfo (key,value){
        //如果用户名存在,判断密码
        if ($.cookie(key)) {
            //获取用户名
            var name = $.cookie(key);
            if (value == name) {
                console.log("登录成功");
            } else {
                //提示密码错误
                 $(".hint_all i").addClass("warning");      
                 $(".hint_all span").text("用户密码错误");
            }
        } else {
            //用户名不存在
                 $(".hint_all i").addClass("warning");      
                 $(".hint_all span").text("该用户不存在");
        }
     }















