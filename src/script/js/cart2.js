; !function ($) {

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
                    }
                })
            });
        }

    });


    //2.改变商品的数量(还没有删除和增加cookie值)
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
    });


    //3.全选
    const $chooseall = $('.car-all-check');
    const $choosebox = $('.car-item-deal').find('.car-check-box');
    $chooseall.on('click', function () {
        //console.log($chooseall.prop('checked'));
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('car-checked');
            //点击全选时，选上所有商品
            console.log($choosebox.find('input'));//找不到动态添加的元素

        } else {
            $(this).removeClass('car-checked');
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

    });


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
        console.log(obj.parents('.car-item-deal').find('.car-deal-sp').find('img').attr('src'));
        numarr2[$.inArray($index, sidarr2)] = obj.parents('.car-item-deal').find('.car-quantity-form input').val();
        $.cookie('cookienum', numarr2.toString(), { expires: 90 });
    }


}(jQuery)