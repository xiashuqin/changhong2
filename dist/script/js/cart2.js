"use strict";!function(r){var d=r("#cart_item_11624922");r.ajax({url:"http://10.31.158.38/changhong2/php/index1.php",dataType:"json"}).done(function(n){if(r.cookie("cookiesid")&&r.cookie("cookienum")){var t=r.cookie("cookiesid").split(","),o=r.cookie("cookienum").split(",");r("#input_item_11624922");r.each(t,function(a,i){r.each(n,function(i,e){if(n[i].picid==t[a]){var c=r(".car-item-deal:hidden").clone(!0,!0);c.find(".car-deal-pc").find("img").attr("src",n[i].url),c.find(".car-deal-pc").find("img").attr("sid",n[i].picid),c.find(".car-deal-name").find("a").html(n[i].title),c.find("#item11624922_price").html(n[i].price),c.find(".car-quantity-form").find("input").val(o[a]),c.css("display","block"),d.append(c),r("#total_num").html(t.length)}})})}}),r(".increment").click(function(){var i=r(this).parents(".car-item-deal").find(".car-quantity-form input").val();99<=++i&&(i=99),r(this).parents(".car-item-deal").find(".car-quantity-form input").val(i),o(r(this)),n()}),r(".decrement").click(function(){var i=r(this).parents(".car-item-deal").find(".car-quantity-form input").val();--i<=1&&(i=1),r(this).parents(".car-item-deal").find(".car-quantity-form input").val(i),o(r(this)),n()});var e=r("#goods_num"),c=r(".car-all-check"),i=r(".car-item-deal").find(".car-check-box");function n(){var c=0;r(".car-item-deal:visible").each(function(i,e){r(e).find(".car-check-box").find("input").prop("checked")&&(c+=parseInt(r(e).find(".car-quantity-form input").val())*parseInt(r(e).find("#item11624922_price").html()),r("#cartTotal").html(c))})}c.on("click",function(){var i=r(".car-item-deal:visible").find(".car-check-box").find("input");c.find("input").prop("checked")?(c.addClass("car-checked"),i.parents(".car-check-box").addClass("car-checked")):(c.removeClass("car-checked"),i.parents(".car-check-box").removeClass("car-checked")),i.parents(".car-check-box").hasClass("car-checked")?i.prop("checked",!0):i.prop("checked",!1),e.html(r(".car-item-deal:visible").find(".car-check-box").find("input:checked").size()),n(),c.find("input").prop("checked")||r("#cartTotal").html(0)}),i.click(function(){r(this).find("input").prop("checked")?r(this).addClass("car-checked"):r(this).removeClass("car-checked");var i=r(".car-item-deal:visible").find(".car-check-box").find("input");r(".car-item-deal:visible").find(".car-check-box").find("input:checked").size()<i.size()?c.removeClass("car-checked"):c.addClass("car-checked"),n(),e.html(r(".car-item-deal:visible").find(".car-check-box").find("input:checked").size()),0==e.html()&&r("#cartTotal").html(0)}),r(".opt-del").click(function(){var a=r(this);r("#append_parent").show();var i=r("#fwin_dialog_close"),e=r("#fwin_dialog_cancel"),c=r("#fwin_dialog_submit");i.click(function(){r("#append_parent").hide()}),e.click(function(){r("#append_parent").hide()}),c.click(function(){a.parents(".car-item-deal").hide(),r("#append_parent").hide();var i=[],e=[];r.cookie("cookiesid")&&r.cookie("cookienum")&&(i=r.cookie("cookiesid").split(","),e=r.cookie("cookienum").split(","),console.log(i),console.log(e));var c=r(a).parents(".car-item-deal").find(".car-deal-sp").find("img").attr("sid");i.splice(r.inArray(c,i),1),e.splice(r.inArray(c,i),1),r.cookie("cookiesid",i.toString(),{expires:90}),r.cookie("cookienum",e.toString(),{expires:90}),r("#total_num").html(i.length),n()})});var a=[],t=[];function o(i){r.cookie("cookiesid")&&r.cookie("cookienum")&&(a=r.cookie("cookiesid").split(","),t=r.cookie("cookienum").split(","));var e=i.parents(".car-item-deal").find(".car-deal-sp").find("img").attr("sid");t[r.inArray(e,a)]=i.parents(".car-item-deal").find(".car-quantity-form input").val(),r.cookie("cookienum",t.toString(),{expires:90})}}(jQuery);