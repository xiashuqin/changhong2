; !function ($) {
    var $goodsid = location.search.substring(5);
    const $goodsPrice = $('#goodsPrice');//价格
    const $title = $('.pro-ditem-name h2 span');//标题
    const $buchong = $('.pro-ditem-name h2 p');//标题的补充
    $.ajax({
        url: 'http://10.31.158.38/changhong2/php/details.php',
        data: {
            goodsid: $goodsid
        },
        type: 'get',
        dataType: 'json',
    }).done(function (d) {
        $('#ProDiemCp').find('img').attr({
            src: d.url
        });
        $('.bigpicture').attr('src', d.url);
        $title.html(d.title);
        $buchong.html(d.buchong);
        $goodsPrice.html('￥' + d.price);
    })

}(jQuery);

//放大镜效果
; !function ($) {
    class Scale {
        constructor() {
            this.sf = $('.big-mirror');//小放大镜
            this.spic = $('#ProDiemCp');//小图
            this.bf = $('.big-pic');//大放大镜
            this.bpic = $('.bigpicture');//大图
        }
        init() {
            let _this = this;
            this.spic.hover(function () {//鼠标滑过小图显示和隐藏右边的大放大镜
                _this.bf.show();
                _this.sf.show();

                $(window).on('mousemove', function (ev) {//移动小放大镜   
                    var ev = ev || window.event;
                    _this.sf.offset({
                        left: ev.pageX - _this.sf.width() / 2,
                        top: ev.pageY - _this.sf.height() / 2,
                    })

                    //不让放大镜出边框
                    var $sflefts = _this.sf.offset().left;//小放大镜的定位left
                    var $sftops = _this.sf.offset().top;//小放大镜的定位top
                    var $spicleft = _this.spic.offset().left;//小图的定位left
                    var $spictop = _this.spic.offset().top;//小图的定位top
                    if ($sflefts <= $spicleft) {//左边
                        _this.sf.offset({
                            left: $spicleft
                        })
                    }

                    var $rightlength = $spicleft + _this.spic.width() - _this.sf.width();
                    if ($sflefts >= $rightlength) {//右边
                        _this.sf.offset({
                            left: $rightlength - 2
                        })
                    }

                    if ($sftops <= $spictop) {//上面
                        _this.sf.offset({
                            top: $spictop
                        })
                    }

                    var $toplength = $spictop + _this.spic.height() - _this.sf.height();
                    if ($sftops >= $toplength) {//下面
                        _this.sf.offset({
                            top: $toplength - 2
                        })
                    }

                    //移动大图(给大图设置left和top让它移动起来)
                    //求比例
                    let $smove = _this.spic.width() - _this.sf.width();//小放大镜能移动的范围
                    let $bmove = _this.bpic.width() - _this.bf.width();//大放大镜能移动的范围
                    var $bili = $bmove / $smove;
                    _this.bpic.css({
                        left: -$bili * _this.sf.position().left,
                        top: -$bili * _this.sf.position().top
                    })

                })
            }, function () {
                _this.bf.hide();
                _this.sf.hide();
            })
        }
    }
    new Scale().init();
}(jQuery)


    //加入购物车的数量
    ; !function ($) {
        const $decline = $('#preCount');
        const $increase = $('#nextCount');
        const $goodsnumber = $('#count_value');
        $increase.click(function () {//增加数量
            $goodsnumber.val(parseInt($goodsnumber.val()) + 1);
        })
        $decline.click(function () {//减少数量
            $goodsnumber.val(parseInt($goodsnumber.val()) - 1);
            if ($goodsnumber.val() <= 1) {
                $goodsnumber.val(1);
            }
        })
    }(jQuery)


    //点击加入购物车按钮跳转到另一个页面，并且存下物品的数量和编号
    // 第一次加入购物车存储商品的id和商品的数量。
    // 第二次之后加入购物车，将商品的数量进行累加。
    // 商品的编号--cookiesid[1, 3, 5]
    // 商品的数量--cookienum[12, 24, 36]
    //先判断是不是第一次加入购物车
    ; !function ($) {
        const $addcart = $('#pro-ditem-addin');
        var sidarr = [];
        var numarr = [];
        const $goodsnumber = $('#count_value');
        var $goodsid = location.search.substring(5);//当前商品的id
        //存入存下物品的数量和编号
        function cookietoarray() {
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {//判断商品是第一次存还是多次存储
                sidarr = $.cookie('cookiesid').split(','); //cookie商品的sid  
                numarr = $.cookie('cookienum').split(','); //cookie商品的num
            }
        }

        $addcart.click(function () {
            $addcart.attr({//跳转到另一个页面
                href: 'http://10.31.158.38/changhong2/src/precart.html?sid=' + $goodsid
            });
            cookietoarray();//获取存在的cookie里面的值

            if ($.inArray($goodsid, sidarr) != -1) {//存在，商品不是第一次加入购物车，数量叠加
                var num = parseInt(numarr[$.inArray($goodsid, sidarr)]) + parseInt($goodsnumber.val());
                numarr[$.inArray($goodsid, sidarr)] = num;
                $.cookie('cookienum', numarr.toString(), { expires: 90 }); //数组存入cookie

            } else {//第一次加入购物车
                sidarr.push($goodsid); //将当前的id存入数组
                $.cookie('cookiesid', sidarr.toString(), { expires: 90 }); //数组存入cookie
                numarr.push($goodsnumber.val());
                $.cookie('cookienum', numarr.toString(), { expires: 90 }); //数组存入cookie

            }
            // console.log(sidarr);
            // console.log(numarr);

        })

    }(jQuery);


    //点击加入购物车按钮跳转到另一个页面
    // ; !function ($) {
    //     const $addcart = $('#pro-ditem-addin');
    //     var $goodsid = location.search.substring(5);
    //     $addcart.click(function () {
    //         $addcart.attr({
    //             href: 'http://10.31.158.38/changhong2/src/precart.html?sid=' + $goodsid
    //         })
    //     })
    // }(jQuery)


    //放大镜下面的一排小图轮播效果
    // ; !function ($) {
    //     const $leftmove = $('.item-pre');//左箭头
    //     const $rightmove = $('#nextCount');//右键头
    //     const $ulmove = $('#daxiaocontrol');
    //     $rightmove.click(function () {
    //         $ulmove.animate({
    //             left: -84
    //         })
    //     })
    // }(jQuery)

