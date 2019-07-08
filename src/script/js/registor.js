; !function ($) {
    const $telp = $(".telp");
    const $telnum = $(".telnum");//手机号码的输入框
    const $telzi = $('.telzi');//手机号码下面的错误提示
    const $telsuccess = $('.regist-success-tel');//手机输入正确时的√
    var $tel = true;

    const $passnum = $('.passnum');//密码输入框
    const $passwdzi = $('.passwdzi')//密码输入错误后下面的提示
    const $pass_success = $('.regist-success-pass');//密码格式输入正确时的√
    var $passwd = true;

    const $surepassnum = $('.surepassnum');//确认密码输入框
    const $surepasszi = $('.surepasszi')//确认密码输入错误后下面的提示
    const $surepass_success = $('.regist-success-surepass')//两次密码输入正确时的√
    var $surepasswd = true;

    //手机号码验证
    $telnum.on('blur', function () {
        var $reg = /^1[3|5|7|8]\d{9}$/;
        if ($telnum.val() != '') {
            if ($reg.test($telnum.val())) {
                $.ajax({
                    url: 'http://10.31.158.38/changhong2/php/registor.php',
                    type: 'post',
                    data: {
                        tel: $telnum.val()
                    },
                    dataType: 'json',
                }).done(function (d) {
                    if (d == '1') {//d为true说明存在重复的手机号码
                        $telzi.show();
                        $telsuccess.hide();
                        $telzi.html('该手机号已被注册过');
                    } else if (d == '0') {
                        $telsuccess.show();
                        $telzi.hide();
                    }
                });
            } else {
                $telzi.show();
                $telzi.html('不是手机号码');
                $telsuccess.hide();
                $tel = false;
            }
        } else {
            $telzi.show();
            $telzi.html('手机号码不能为空');
            $tel = false;
        }

    })

    //设置密码验证
    $passnum.on('blur', function () {
        var $reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if ($passnum.val() != '') {
            if ($reg.test($passnum.val())) {
                $pass_success.show();
                $passwdzi.hide();
            } else {
                $passwdzi.show();
                $passwdzi.html('长度在8~16之间，必须包含字母和数字');
                $pass_success.hide();
                $passwd = false;
            }
        } else {
            $passwdzi.show();
            $passwdzi.html('密码不能为空');
            $passwd = false;
        }
    })

    //确认密码是否相同
    $surepassnum.on('blur', function () {
        if ($passnum.val() == $surepassnum.val() & $passnum.val() != '') {
            $surepass_success.show();
            $surepasszi.hide();
        } else {
            $surepasszi.show();
            $surepass_success.hide();
            $surepasszi.html('两次密码输入不一致');
            $surepasswd = false;
        }
    })


    //验证码验证
    // const $validation_pic_change = $('.validation-pic-change');//看不清楚换一张的span
    // const $register_validation_pic = $('.register-validation-pic');//验证码图片
    // $validation_pic_change.on('click', function () {
    //     $register_validation_pic.attr('src', 'http://cn.changhong.com/sso/register_code.do');
    //     console.log($register_validation_pic.val());
    // })


    //判断是否同意协议
    const $checkbox = $('#checkbox');
    var $agreen = true;
    if ($checkbox.prop('checked')) {
        $agreen = true;
    } else {
        $agreen = false;
    }

    //条件都满足submit提交按钮
    const $new_register_btn = $('.new-register-btn');//提交注册按钮
    $new_register_btn.click(function () {
        if (!($tel && $passwd && $surepasswd && $agreen)) {
            return false;
        }
    })

}(jQuery)



// $.ajax({
        //     url: 'http://localhost/changhong2/php/registor.php',
        //     type: 'post',
        //     data: {
        //         tel: $telnum.val()
        //     },
        //     dataType: 'json',
        // }).done(function (d) {
        //     if (d == '1') {//d为true说明存在重复的手机号码
        //         $telzi.show();
        //         $telsuccess.hide();
        //         $telzi.html('该手机号已被注册过');
        //     } else if (d == '0') {
        //         $telzi.hide();
        //         //$telzi.html('请输入正确长度的手机号码');
        //     }

        // });