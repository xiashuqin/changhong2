"use strict";var _createClass=function(){function o(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,i,e){return i&&o(t.prototype,i),e&&o(t,e),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(i){var t=location.search.substring(5),e=i("#goodsPrice"),o=i(".pro-ditem-name h2 span"),n=i(".pro-ditem-name h2 p");i.ajax({url:"http://10.31.158.38/changhong2/php/details.php",data:{goodsid:t},type:"get",dataType:"json"}).done(function(t){i("#ProDiemCp").find("img").attr({src:t.url}),i(".bigpicture").attr("src",t.url),o.html(t.title),n.html(t.buchong),e.html("￥"+t.price)})}(jQuery),function(t){function i(){_classCallCheck(this,i),this.sf=t(".big-mirror"),this.spic=t("#ProDiemCp"),this.bf=t(".big-pic"),this.bpic=t(".bigpicture")}(new(_createClass(i,[{key:"init",value:function(){var f=this;this.spic.hover(function(){f.bf.show(),f.sf.show(),t(window).on("mousemove",function(t){t=t||window.event,f.sf.offset({left:t.pageX-f.sf.width()/2,top:t.pageY-f.sf.height()/2});var i=f.sf.offset().left,e=f.sf.offset().top,o=f.spic.offset().left,n=f.spic.offset().top;i<=o&&f.sf.offset({left:o});var s=o+f.spic.width()-f.sf.width();s<=i&&f.sf.offset({left:s-2}),e<=n&&f.sf.offset({top:n});var r=n+f.spic.height()-f.sf.height();r<=e&&f.sf.offset({top:r-2});var c=f.spic.width()-f.sf.width(),a=(f.bpic.width()-f.bf.width())/c;f.bpic.css({left:-a*f.sf.position().left,top:-a*f.sf.position().top})})},function(){f.bf.hide(),f.sf.hide()})}}]),i)).init()}(jQuery),function(t){var i=t("#preCount"),e=t("#nextCount"),o=t("#count_value");e.click(function(){o.val(parseInt(o.val())+1)}),i.click(function(){o.val(parseInt(o.val())-1),o.val()<=1&&o.val(1)})}(jQuery),function(i){var e=i("#pro-ditem-addin"),o=[],n=[],s=i("#count_value"),r=location.search.substring(5);e.click(function(){if(e.attr({href:"http://10.31.158.38/changhong2/src/precart.html?sid="+r}),i.cookie("cookiesid")&&i.cookie("cookienum")&&(o=i.cookie("cookiesid").split(","),n=i.cookie("cookienum").split(",")),-1!=i.inArray(r,o)){var t=parseInt(n[i.inArray(r,o)])+parseInt(s.val());n[i.inArray(r,o)]=t,i.cookie("cookienum",n.toString(),{expires:90})}else o.push(r),i.cookie("cookiesid",o.toString(),{expires:90}),n.push(s.val()),i.cookie("cookienum",n.toString(),{expires:90})})}(jQuery);