; !function ($) {

    $('.top').load('index1.html .toolbar');//引入头部
    $('.lastfooter').load('index1.html .footer', function () {
        $("img.lazy").lazyload({
            effect: "fadeIn"//图片显示方式
        });
        $('img.lazy-nav').lazyload({
            effect: "fadeIn"
        })
    });//引入底部


    var $goodsid = location.search.substring(5);
    const $goodsname = $('#goodsname');//标题
    $.ajax({
        url: 'http://10.31.158.38/changhong2/php/details.php',
        data: {
            goodsid: $goodsid
        },
        type: 'get',
        dataType: 'json',
    }).done(function (d) {
        $('#success_cart_image').attr({
            src: d.url
        });
        $goodsname.html(d.title);
    })

}(jQuery);