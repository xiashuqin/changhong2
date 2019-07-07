; !function ($) {
	const $ulstr = $('.tv-pic-list ul');
	var $str = "";
	//banner数据
	// $.ajax({
	// 	url: 'php/banner.php',
	// 	dataType: 'json'
	// }).done(function (bannerdata) {
	// 	$.each(bannerdata, function (index, value) {
	// 		var $bannerstr = '<ul>';
	// 主要图片数据(电视系列)
	$.ajax({
		url: 'http://localhost/changhong2/php/index1.php',
		dataType: 'json'
	}).done(function (picdata) {
		$.each(picdata, function (index, value) {
			$str += `
					<li>
					<a href="details.html?sid=${value.picid}">
						<img src="${value.url}>"
							alt="">
					</a>
					<h3>
						<a href="#">${value.title}</a>
					</h3>
					<p>${value.buchong}</p>
					<i>￥${value.price}</i>
				</li>`
		})
		$ulstr.html($str);
	})
}(jQuery);
	// ; !function () {
	// 	//banner效果

	// }(jQuery);

	// ; !function () {
	// 	//lunbo效果

	// }(jQuery);

	// ; !function () {
	// 	//小效果

	// }(jQuery);
