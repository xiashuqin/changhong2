"use strict";!function(a){var t=location.search.substring(5),s=a("#goodsname");a.ajax({url:"http://10.31.158.38/changhong2/php/details.php",data:{goodsid:t},type:"get",dataType:"json"}).done(function(t){a("#success_cart_image").attr({src:t.url}),s.html(t.title)})}(jQuery);