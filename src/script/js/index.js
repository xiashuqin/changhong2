; !function ($) {
	const $ulstr = $('.tv-pic-list ul');
	var $str = "";

	//懒加载图片
	$("img.lazy").lazyload({
		effect: "fadeIn"
	});

	$('img.lazy-nav').lazyload({
		effect: "fadeIn"
	})
	// 主要图片数据(电视系列)
	$.ajax({
		url: 'http://10.31.158.38/changhong2/php/index1.php',
		dataType: 'json'
	}).done(function (picdata) {
		$.each(picdata, function (index, value) {
			$str += `
					<li>
					<a href="http://10.31.158.38/changhong2/src/details.html?sid=${value.picid}">
						<img data-original="${value.url}" alt="测试懒加载图片" width="160" height="160" class="lazy">
						<h3>${value.title}</h3>
						<p>${value.buchong}</p>
						<i>￥${value.price}</i>
					</a>
				</li>`;
		})
		$ulstr.html($str);
		$("img.lazy").lazyload({
			effect: "fadeIn"//图片显示方式
		});
	});


	//电视下面的二级导航
	$('.hoverli').hover(function () {
		$('.home-nav-sub').stop(true).animate({
			height: 260
		})
	}, function () {
		$('.home-nav-sub').stop(true).animate({
			height: 0
		})
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
			if ($areatop > $(window).scrollTop() - 400) {
				$small.removeClass('clicked');
				$small.eq(index + 1).addClass('clicked');
				return false;
			}
			if ($(window).scrollTop() < 400) {
				var $firstli = $('.firstli');
				$firstli.addClass('clicked').siblings().removeClass('clicked');
			}
		})
	})

	$small.on('click', function () {
		let $tops;
		$(this).addClass('clicked').siblings().removeClass('clicked');
		$tops = $area.eq($(this).index() - 1).offset().top;
		if ($(this).index() == 0) {//点击热门时
			$tops = 480;
		}
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
