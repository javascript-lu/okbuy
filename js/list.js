$(function() {
	// 更多和收起
	$(".section_1_list>a").click(function() {
			if ($(this).parents(".section_1_list").find("ul").height() == "40") {
				$(this).parents(".section_1_list").find("ul").css("maxHeight", "200px");
				$(this).html("收起<span></span>").css("color", "#d70057");
				$(this).find("span").removeClass("more").addClass("less")
			} else {
				$(this).parents(".section_1_list").find("ul").css("maxHeight", "40px");
				$(this).html("更多<span></span>").css("color", "");
				$(this).find("span").removeClass("less").addClass("more")
			}
		})
		//动态获取列表详情
	$.getJSON("json/index.json", function(res) {
		//console.log(res.listPages);
		var result = res.listPages;
		//遍历
		$.each(result, function(i, field) {
			//创建一个li标签
			var $li = $("<li></li>");
			$(".goodsList_det ul").append($li);
			var $a1 = $('<a href="javascript:;"></a>');
			$li.append($a1);
			//获取id
			$a1.attr('href', './detail.html?id='+ field.id);
			var $img1 = $('<img src="">');
			$a1.append($img1);
			$img1.attr("src", field.image1);
			var $p1 = $('<p class = "logo"></p>');
			$li.append($p1);
			var $span1 = $('<span></span>');
			$p1.append($span1);
			var $img2 = $('<img src="">');
			$span1.append($img2);
			$img2.attr("src", field.image2)
			var $a2 = $('<a href="javascript:;" class = "titleName">' + field.goodsName + '</a>');
			$li.append($a2);
			var $p2 = $('<p class = "price">' + field.price + '</p>');
			$li.append($p2);
			var $span2 = $('<span>' + field.oldPrice + '</span>');
			$p2.append($span2);

		})
	})

	//获取底部列表
	$.getJSON("json/index.json", function(res) {
			//console.log(res.listPages);
			var result = res.Activity;
			//遍历
			$.each(result, function(i, field) {
				//创建一个li标签
				var $li = $("<li></li>");
				$(".ActivityMid").append($li);
				//创建a标签
				var $a = $('<a href="javascript:;"></a>');
				$li.append($a);
				var $img = $('<img src="">');
				$a.append($img);
				$img.attr("src", field.img)
				var $span = $('<span>' + field.title + '</span>');
				$a.append($span);
			})
		})
		// 底部列表效果实现
	function changeList() {
		//初始化第一个
		$(".goodsList_nav_l").find("a").eq(0).css({
			"background": "#d70057",
			"color": "#fff"
		});
		//点击修改样式
		$(".goodsList_nav_l a").click(function() {
			$(this).css({
					"background": "#d70057",
					"color": "#fff"
				})
				.siblings().css({
					"background": "#fff",
					"color": "#333"
				});
		})
	} //调用函数
	changeList();

	var page5 = $(".pages").paging({
		total: 10,
		animation: false,
		centerBgColor: "#fff",
		centerFontColor: "#000",
		centerBorder: "1px solid #ddd",
		transition: "all .2s",
		centerHoverBgColor: "#d70057",
		centerHoverBorder: "",
		centerFontHoverColor: "#fff",
		otherFontHoverColor: "#fff",
		otherBorder: "1px solid #ddd",
		otherHoverBorder: "",
		otherBgColor: "#fff",
		otherHoverBgColor: "#d70057",
		currentFontColor: "#fff",
		currentBgColor: "#d70057",
		currentBorder: "",
		fontSize: 13,
		currentFontSize: 13,
		cormer: 2,
		gapWidth: 3,
		showJump: true,
		jumpBgColor: "#fff",
		jumpFontHoverColor: "#fff",
		jumpHoverBgColor: "#d70057",
		jumpBorder: "",
		jumpHoverBorder: "",
		simpleType: 1
	});

})