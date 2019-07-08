; !function ($) {
	const $ulstr = $('.tv-pic-list ul');
	var $str = "";

	// 主要图片数据(电视系列)
	$.ajax({
		url: 'http://localhost/changhong2/php/index1.php',
		dataType: 'json'
	}).done(function (picdata) {
		$.each(picdata, function (index, value) {
			// $str += `
			// 		<li>
			// 		<a href="details.html?sid=${value.picid}">
			// 			<img src="${value.url}"
			// 				alt="">
			// 		</a>
			// 		<h3>
			// 			<a href="details.html?sid=${value.picid}">${value.title}</a>
			// 		</h3>
			// 		<p>${value.buchong}</p>
			// 		<i>￥${value.price}</i>
			// 	</li>`

			$str += `
					<li>
					<a href="details.html?sid=${value.picid}">
						<img src="${value.url}" alt="">
						<h3>${value.title}</h3>
						<p>${value.buchong}</p>
						<i>￥${value.price}</i>
					</a>
				</li>`
		})
		$ulstr.html($str);
	})
}(jQuery);


// banner轮播图效果
; !function ($) {
	class Lunbo {
		constructor() {
			this.banner = $('.banner-pic');
			this.picli = $('.banner-pic ul li');
			this.cicleli = $('.banner-pic ol li');
			this.num = 0;
			this.timer = null;
		}
		init() {
			let _this = this;
			//小圆圈点击添加active类
			this.cicleli.on('click', function () {
				_this.num = $(this).index();
				_this.tabswitch();
			});

			//图片自动轮播
			this.timer = setInterval(function () {
				_this.num++;
				if (_this.num > _this.cicleli.length - 1) {
					_this.num = 0;
				}
				_this.tabswitch();
			}, 4000);

			//鼠标悬停在banner上面自动轮播停止
			this.banner.hover(function () {
				clearInterval(_this.timer);
			}, function () {
				_this.timer = setInterval(function () {
					_this.num++;
					if (_this.num > _this.cicleli.length - 1) {
						_this.num = 0;
					}
					_this.tabswitch();
				}, 4000);
			})

		}
		//切换功能
		tabswitch() {
			this.cicleli.eq(this.num).addClass('active').siblings().removeClass('active');
			this.picli.eq(this.num).addClass('showpic').siblings().removeClass('showpic');
		}

	}
	new Lunbo().init();

}(jQuery);



//楼梯效果
; !function () {
	const $xhome_fixl = $('.xhome-fixl');//左边的楼梯大盒子
	const $pro_float_box = $('.pro-float-box')//右边的回到底部盒子
	const $small = $('.xhome-fixl ul li');// 楼梯里面的每一个小盒子

	// 当页面下滑到一定距离时显示楼梯
	const $tvproduct = $('.tvproduct');
	const $aircondition = $('.aircondition');
	const $bingxi = $('.bingxi');
	const $live = $('.bingxi');
	const $totop = $('.pro-float-toTop');//回到底部的小盒子
	const $shouye = $('.shouye');//整个首页的主要内容
	const $area = $('.shouye .tv');//首页的每一个大区域(生活家电...)
	$(window).on('scroll', function () {

		// 滚动到一定距离的时候显示楼梯和回到底部的盒子
		if ($(window).scrollTop() > $tvproduct.offset().top - 400) {
			$totop.show();//回到底部的小盒子显示
		} else {
			$totop.hide();
		}

		if ($(window).scrollTop() > $tvproduct.offset().top - 600) {
			$xhome_fixl.show();//左侧的楼梯大盒子显示
		} else {
			$xhome_fixl.hide();
		}

		//滚动时，获取大楼梯的top值，获取索引，给小楼梯对应的索引加active
		$area.each(function (index, element) {
			let $areatop = $area.eq(index).offset().top;
			if ($areatop > $(window).scrollTop()) {
				$small.removeClass('clicked');
				$small.eq(index).addClass('clicked');
				return false;
			}
		})

	})
	$small.on('click', function () {
		$(this).addClass('clicked').siblings().removeClass('clicked');
		let $tops = $area.eq($(this).index()).offset().top;
		$('html, body').animate({
			scrollTop: $tops
		})
		// $(window).scrollTop($tops);
	});


	//点击回到底部
	$totop.on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		})
	})

}(jQuery);

	// ; !function () {
	// 	//小效果

	// }(jQuery);
