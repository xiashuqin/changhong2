; !function ($) {
    const $bigbox = $('#cart_item_11624922');
    $.ajax({
        url: 'http://10.31.158.38/changhong2/php/index1.php',
        dataType: 'json',
    }).done(function (piclist) {
        let goodshtml = '';
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {//如果存在cookie，取出cookie值
            let sidarr = $.cookie('cookiesid').split(','); //cookie商品的sid  
            let numarr = $.cookie('cookienum').split(','); //cookie商品的num
            $.each(sidarr, function (index1, value1) {
                $.each(piclist, function (index2, value2) {
                    if (piclist[index2].picid == sidarr[index1]) {
                        goodshtml += `
                    <div class="car-item-deal">
                        <div class="car-check-box">
                            <input type="checkbox" id="cart_id_checkbok_11624922" goods_value="2499"
                                nc_type="eachGoodsCheckBox" value="11624922|1" name="cart_id[]" cart_value="11624922">
                        </div>
                        <div class="car-deal-rt">
                            <!--参加活动的信息-->
                            <div class="car-deal-top">
                                <div class="car-sp-lf">
                                    <!--促销活动内容 END-->
                                </div>
                                <div class="car-opt-bk">
                                    <a href="javascript:;" class="opt-like " id="sc_CH5010916"></a>
                                    <a href="javascript:;" class="opt-del"></a>
                                </div>
                            </div>
                            <!--参加活动的信息 END-->
    
                            <!--购买商品详情-->
                            <div class="car-deal-sp clearfix">
                                <a href="http://cn.changhong.com/cpzx/pb_televisions/4kcgq/201801/t20180130_68427.html"
                                    title="55D6P 55英寸32核人工智能全面屏4K超高清HDR全金属超薄语音平板LED液晶电视机（星空灰）" class="car-deal-pc">
                                    <img src="${piclist[index2].url}"
                                        width="60px" height="60px" alt="55D6P 55英寸32核人工智能全面屏4K超高清HDR全金属超薄语音平板LED液晶电视机（星空灰）">
                                </a>
                                <div class="car-deal-name ">
                                    <a href="http://cn.changhong.com/cpzx/pb_televisions/4kcgq/201801/t20180130_68427.html"
                                        class="h3">${piclist[index2].title}</a>
                                </div>
                                <div class="car-deal-price">
                                    <p class="del-price"></p>
                                    <p class="now-price">
                                        单价<span id="item11624922_price">${piclist[index2].price}</span>元
                                    </p>
                                    <p class="rec-price"></p>
                                </div>
                                <input class="r3code" type="hidden" name="r3code" value="CH5010916">
                                <div class="car-deal-qt">
                                    <label>数量</label>
                                    <div class="car-quantity-form">
                                        <a href="javascript:;" class="decrement"></a>
                                        <input id="input_item_11624922" value="1" type="text" class="text w20">
                                        <a href="javascript:;" class="increment"></a>
                                    </div>
                                    <input type="hidden" id="item11624922_subtotal" nc_type="eachGoodsTotal" value="2499">
                                </div>
                                <p class="car-item-sta">
                                    <span id="show_sto_msg11624922">有货 </span>
                                </p>
                            </div>
                            <!--购买商品详情 END-->
                        </div>
                    </div>

                        `
                    }
                })
            });
            $bigbox.html(goodshtml);
        }

    })
}(jQuery)