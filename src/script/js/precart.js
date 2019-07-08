; !function ($) {
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