; !function ($) {
    $('.top').load('index1.html .toolbar');
    $('.lastfooter').load('index1.html .footer', function () {
        $("img.lazy").lazyload({
            effect: "fadeIn"//图片显示方式
        });
        $('img.lazy-nav').lazyload({
            effect: "fadeIn"
        })
    });

    //1.渲染购物车列表
    const $bigbox = $('#cart_item_11624922');
    $.ajax({
        url: 'http://10.31.158.38/changhong2/php/index1.php',
        dataType: 'json',
    }).done(function (piclist) {
        let goodshtml = '';
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {//如果存在cookie，取出cookie值
            let sidarr = $.cookie('cookiesid').split(','); //cookie商品的sid  
            let numarr = $.cookie('cookienum').split(','); //cookie商品的num
            const $number = $('#input_item_11624922');//加加减减里面的商品数量
            $.each(sidarr, function (index1, value1) {
                $.each(piclist, function (index2, value2) {
                    if (piclist[index2].picid == sidarr[index1]) {
                        const $initbox = $('.car-item-deal:hidden')//最开始没有商品加入购物车的隐藏的盒子
                        var $clonebox = $initbox.clone(true, true);
                        $clonebox.find('.car-deal-pc').find('img').attr('src', piclist[index2].url);
                        $clonebox.find('.car-deal-pc').find('img').attr('sid', piclist[index2].picid);
                        $clonebox.find('.car-deal-name').find('a').html(piclist[index2].title);
                        $clonebox.find('#item11624922_price').html(piclist[index2].price);
                        $clonebox.find('.car-quantity-form').find('input').val(numarr[index1]);
                        $clonebox.css('display', 'block');
                        $bigbox.append($clonebox);
                        var $allnum = $('#total_num');//全选几件商品
                        $allnum.html(sidarr.length);
                    }
                })
            });
        }

    });

    //2.改变商品的数量
    //增加商品数量
    const $increment = $('.increment');//加号
    $increment.click(function () {
        var $count = $(this).parents('.car-item-deal').find('.car-quantity-form input').val();//找到点击的加号对应的那条商品信息
        $count++;
        if ($count >= 99) {
            $count = 99;
        }
        $(this).parents('.car-item-deal').find('.car-quantity-form input').val($count);
        setcookie($(this));
        priceall();
    });

    //减少商品数量
    const $decrement = $('.decrement');//减号
    $decrement.click(function () {
        var $count = $(this).parents('.car-item-deal').find('.car-quantity-form input').val();//找到点击的加号对应的那条商品信息
        $count--;
        if ($count <= 1) {
            $count = 1;
        }
        $(this).parents('.car-item-deal').find('.car-quantity-form input').val($count);
        setcookie($(this));
        priceall();
    });


    //3.全选

    const $goods_num = $('#goods_num');//已选几件商品
    const $chooseall = $('.car-all-check');
    const $choosebox = $('.car-item-deal').find('.car-check-box');
    $chooseall.on('click', function () {
        //找到可见的复选框input
        var $newcheckbox = $('.car-item-deal:visible').find('.car-check-box').find('input');
        if ($chooseall.find('input').prop('checked')) {//点击全选时，选上所有商品
            $chooseall.addClass('car-checked');//全选框自己勾上
            $newcheckbox.parents('.car-check-box').addClass('car-checked');
        } else {
            $chooseall.removeClass('car-checked');
            $newcheckbox.parents('.car-check-box').removeClass('car-checked');
        }

        //如果商品复选框外面的盒子有√,让复选框checked
        if ($newcheckbox.parents('.car-check-box').hasClass('car-checked')) {
            $newcheckbox.prop('checked', true);
        } else {
            $newcheckbox.prop('checked', false);
        }
        $goods_num.html($('.car-item-deal:visible').find('.car-check-box').find('input:checked').size());
        priceall();

        //如果全选按钮没有被√上,则总价为0
        if (!$chooseall.find('input').prop('checked')) {
            $('#cartTotal').html(0);
        }
    });

    //商品单选
    $choosebox.click(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('car-checked');
            // console.log($(this).find('input').prop('checked'));
        } else {
            $(this).removeClass('car-checked');
        }

        //如果有一个商品没有选中，全选框去掉√
        var $newcheckbox = $('.car-item-deal:visible').find('.car-check-box').find('input');
        if (($('.car-item-deal:visible').find('.car-check-box').find('input:checked')).size() < $newcheckbox.size()) {
            $chooseall.removeClass('car-checked');

        } else {
            $chooseall.addClass('car-checked');
        }
        priceall();
        $goods_num.html($('.car-item-deal:visible').find('.car-check-box').find('input:checked').size());

        //如果一件商品都没有选中，则总价为0
        if ($goods_num.html() == 0) {
            $('#cartTotal').html(0);
        }
    });


    //计算总价格
    function priceall() {
        var $sum = 0;
        var $count = 0;
        $('.car-item-deal:visible').each(function (index, element) {
            if ($(element).find('.car-check-box').find('input').prop('checked')) {
                $sum += parseInt($(element).find('.car-quantity-form input').val()) * parseInt($(element).find('#item11624922_price').html());
                $('#cartTotal').html($sum);
            }
            //console.log($(element).find('.car-check-box').find('input').prop('checked'));
        });

    }


    //4.删除商品
    const $delgoods = $('.opt-del');
    $delgoods.click(function () {//点击删除具体商品，弹出确认删除的弹框
        let _this = $(this);
        $('#append_parent').show();
        const $chacha = $('#fwin_dialog_close')//弹框的×
        const $cancel = $('#fwin_dialog_cancel');//弹框的取消按钮
        const $surecancel = $('#fwin_dialog_submit')//弹框的确认删除按钮
        $chacha.click(function () {
            $('#append_parent').hide();
        });
        $cancel.click(function () {
            $('#append_parent').hide();
        });
        $surecancel.click(function () {
            //找到删除的那件商品，移除它的整个盒子，并且删除对应的cookie值
            _this.parents('.car-item-deal').hide();//移除商品
            $('#append_parent').hide();

            //以下代码是删除对应商品的cookie值
            var sidarr3 = [];
            var numarr3 = [];
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                sidarr3 = $.cookie('cookiesid').split(',');//cookie商品的sid  
                numarr3 = $.cookie('cookienum').split(',');//cookie商品的num
                console.log(sidarr3);
                console.log(numarr3);
            }
            var $index = $(_this).parents('.car-item-deal').find('.car-deal-sp').find('img').attr('sid');
            //console.log($(_this).parents('.car-item-deal').find('.car-deal-sp').find('img').attr('src'));
            sidarr3.splice($.inArray($index, sidarr3), 1);//删除数组对应的值
            numarr3.splice($.inArray($index, sidarr3), 1);//删除数组对应的值
            //numarr2[$.inArray($index, sidarr2)] = $(_this).parents('.car-item-deal').find('.car-quantity-form input').val();
            $.cookie('cookiesid', sidarr3.toString(), { expires: 90 });
            $.cookie('cookienum', numarr3.toString(), { expires: 90 });

            var $allnum = $('#total_num');//全选几件商品
            $allnum.html(sidarr3.length);
            priceall();
        })
    });




    //封装函数
    //将改变后的数量的值存放到cookie
    var sidarr2 = [];
    var numarr2 = [];
    //提前获取cookie里面id和num
    function cookietoarray() {
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {
            sidarr2 = $.cookie('cookiesid').split(',');//cookie商品的sid  
            numarr2 = $.cookie('cookienum').split(',');//cookie商品的num
        }
    }
    function setcookie(obj) { //obj:当前操作的对象
        cookietoarray();//得到数组
        var $index = obj.parents('.car-item-deal').find('.car-deal-sp').find('img').attr('sid');//通过id找数量的位置
        numarr2[$.inArray($index, sidarr2)] = obj.parents('.car-item-deal').find('.car-quantity-form input').val();
        $.cookie('cookienum', numarr2.toString(), { expires: 90 });
    }


}(jQuery)