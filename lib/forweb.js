
var g = {
    TabShow: function (tabNavID, $pageTabBox, Event) {/*简单的tab切换效果*/
        var $pageTabBox = $($pageTabBox);
        var $pageChild = $pageTabBox.children('div');
        $(tabNavID).children('li').not(".more").bind(Event, function () {
            var $this = $(this);
            var index = $this.index();
            //alert(index);
            $this.addClass('active').siblings().removeClass('active')
            $pageChild.hide();
            $pageChild.eq(index).show();
            return false;
        });
    }
};

$('#ListTab').find('li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#ListTabBox').find('.tab').hide().eq($(this).index()).show();
});
g.TabShow('#ListTab', '#ListTabBox', 'click');

$('#NewsTab').find('li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#NewsTabBox').find('.tab').hide().eq($(this).index()).show();
});
g.TabShow('#NewsTab', '#NewsTabBox', 'click');


//右侧导航

$('.left-nav-ul').find('.sub-nav').find('a').click(function(e){
    $('.left-nav-ul').find('.sub-nav').find('li').removeClass('active');
    $(this).parent().addClass('active');
});
//二级菜单
$('.left-nav-ul').find('.first-a').click(function (e) {

    $('.left-nav-ul').find('.sub-nav').hide();
    $(this).next().show();
    $(this).parent().addClass('active').siblings().removeClass('active');
});


$(function(){
    if($.fn.layout) {
        $('#LayoutBox').layout({
            openCallback:function(){
                $('.ecope_likescrollbar').show();
            },
            closeCallback:function(){
                $('.ecope_likescrollbar').hide();
            }
        });
    }


    })


$(function() {

    var g = {
        fullheight:function(elem,cut) {
            if($(elem).length==0){
                return;
            }
            if(cut==undefined){
                cut=0
            }
            var top = $(elem).offset().top;
            $(elem).css({'height': $(window).height() - top-cut});
            $(window).resize(function () {
                var top = $(elem).offset().top;
                $(elem).css({'height': $(window).height() - top-cut});
            });
        },
        TabShow: function (tabNavID, $pageTabBox, Event) {/*简单的tab切换效果*/
            var $pageTabBox = $($pageTabBox);
            var $pageChild = $pageTabBox.children('div');
            $(tabNavID).children('li').not(".more").bind(Event, function () {
                var $this = $(this);
                var index = $this.index();
                // alert(fn);
                $this.addClass('active').siblings().removeClass('active')
                $pageChild.removeClass('active').hide();
                $pageChild.eq(index).addClass('active').show();
                //return false;
            });
        },
        AlertBox: function (elem, alertBox, obj, callbacksure, callbackclose) { //可以增加关闭和其他按钮的回调函数
            if ($(alertBox).length == 0) {
                return
            }
            if($.ui.Dialog){
                var opt = {
                    elem: alertBox,
                    overlay: false
                }
                if (typeof obj == 'object') {
                    $.extend(opt, obj)
                }
                var Dialog = new $.ui.Dialog(elem, opt);
                $(alertBox).find(".close").click(function () {
                    Dialog.close();
                    if (typeof callbackclose == 'function') {
                        callbackclose();
                    }
                });
                $(alertBox).find(".save_btn").click(function () {
                    Dialog.close();
                    if (typeof callbacksure == 'function') {
                        callbacksure();
                    }
                });
            }
        },
        AlertText: function (elem, obj) {//具体配置请参考Dialog库
            if($.ui.Dialog){
                var Dialog = new $.ui.Dialog(elem, obj);
            }
        },
        fullScreen:function() {
            var el = document.documentElement;

            var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                //alert('对不起您的浏览器不支持全屏,请使用高级浏览器');
                // for Internet Explorer
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
    };


    $('.quanping').click(function(){
        g.fullScreen();
        return false;
    });




    g.fullheight('.health-text-wrap','37');
    g.fullheight('#noticeHeight',57)})





