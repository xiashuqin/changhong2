; !function ($) {
    var $goodsid = location.search.substring(5);
    const $sf = $('.big-mirror');//小放大镜
    const $spic = $('#ProDiemCp');//小图

    $.ajax({
        url: 'http://localhost/changhong2/php/details.php',
        data: {
            goodsid: $goodsid
        },
        type: 'get',
        dataType: 'json',
    }).done(function (d) {

    })
}(jQuery);