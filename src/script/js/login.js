; !function ($) {
    const $usertel = $('#username');//手机号码
    const $password = $('#password');//密码
    const $loginbtn = $('#account-login');//登录
    const $registerBtn = $('.registerBtn');
    $loginbtn.click(function () {
        $.ajax({
            url: 'http://localhost/changhong2/php/login.php',
            type: 'post',
            data: {
                usertel: $usertel.val(),
                password: $password.val()
            },
            dataType: 'json',
        }).done(function (d) {
            if (d) {
                location.href = 'http://localhost/changhong2/src/index1.html';
            } else {
                alert('手机号或者密码错误');
                $password.val('');
            }
        })
    })

    //登录页面的注册按钮，点击跳转到注册页面
    $registerBtn.click(function () {
        location.href = 'http://localhost/changhong2/src/registor.html';
    })
}(jQuery)