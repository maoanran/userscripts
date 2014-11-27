// ==UserScript==
// @name            吧主之怒
// @version         1.0
// @namespace       www.maoanran.com
// @include         http://tieba.baidu.com/f*
// @author          Anran
// @description     贴吧列表页面为吧主提供删贴以及封禁用户功能
// @grant           GM_xmlhttpRequest
// @grant           GM_addStyle
// @require         http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// ==/UserScript==

//封号天数 : 大吧可另改为3 10 , 默认为1天
var day = 1;

if (window == window.top && /http:\/\/tieba\.baidu\.com\/f/g.test(location.href)) {

    GM_addStyle('.tb_icon_author_rely { white-space:nowrap; }');
    $('#container').find(".threadlist_li_right").each(function(i) {
        addDeleteLinks($(this));
        addBlockLinks($(this));
    });
}

//删
function addDeleteLinks($title) {
    if($title.attr('class') != "threadlist_li_right j_threadlist_li_right")
        return;

    var $a = $title.find('a').eq(0);
    var href = "http://tieba.baidu.com/mo/q-/m?kz=" + $a.attr("href").replace(/\/p\//g, '') + "&pinf=1__";
    $a.parent().prepend("<span target='_blank' style='float: left;' name='delete' class='green' href=" + href + ">删&nbsp;&nbsp;</span>");
    
    $a.parent().find('span[name=delete]')[0].addEventListener("click", function() {

        var href = $(this).attr('href');
        var iframe = $("<iframe width='0px' height='0px' id='nuIframe'></iframe>")[0];
        $("body").prepend(iframe);
        $(iframe).load(function(){
            var as = iframe.contentDocument.getElementsByTagName('a');
            for (var i=0; i < as.length; i++) {
                var a = as[i];
                //删除第二步
                if (a.innerHTML == '确认删除'){
                    var evt = document.createEvent("MouseEvents");
                    evt.initEvent("click", true, true);
                    a.dispatchEvent(evt);
                } 
                //刪除完成 关闭iframe
                else if(a.name == 'top' && a.nextSibling.className == 'light'){
                    $(iframe).remove();
                } 
            }
        });

        //删除第一步
        GM_xmlhttpRequest({
            method : "GET",
            url : href,
            onload : function(response) {
                iframe.contentDocument.body.innerHTML = response.responseText;
                var as = iframe.contentDocument.getElementsByTagName('a');
                for (var i=0; i < as.length; i++) {
                    if (as[i].innerHTML == '删主题'){
                        var evt = document.createEvent("MouseEvents");
                        evt.initEvent("click", true, true);
                        as[i].dispatchEvent(evt);
                    }
                        
                }
            }
        });
        
        $(this).parent().parent().parent().parent().remove();

    }, false);
}


//封
function addBlockLinks($title) {
    if($title.attr('class') != "threadlist_li_right j_threadlist_li_right")
        return;

    var $a = $title.children().eq(0).find('a').eq(0);
    var href = "http://tieba.baidu.com/mo/q-/m?kz=" + $a.attr("href").replace(/\/p\//g, '') + "&pinf=1__";
    $title.find('.threadlist_lz').find('a.j_user_card').each(function(index) {
        $(this).before("<span target='_blank' name='block' class='green' href=" + href + ">封&nbsp;&nbsp;</span>")
    });
    href += "&last=1";
    $title.find('.threadlist_detail').find('a.j_user_card').each(function(index) {
        $(this).before("<span target='_blank' name='block' class='green' href=" + href + ">封&nbsp;&nbsp;</span>")
    });
    for (var i = 0; i < $title.parent().find('span[name=block]').length; i++) {
        $title.parent().find('span[name=block]')[i].addEventListener("click", function() {
            
            var hreff = $(this).attr('href');
            var username = $(this).next().html();
            $('iframe#nuIframe').remove();
            
            var iframe = $("<iframe width='0px' height='0px' id='nuIframe'></iframe>")[0];
            $("body").prepend(iframe);
                    
            $(iframe).load(function(){
                var inputs = iframe.contentDocument.getElementsByTagName('input');
                for (var i=0; i < inputs.length; i++) {
                    var input = inputs[i];
                    
                    //封号第二步
                    if (input.value == "确定"){
                        var select = input.parentNode.children[0];
                        if(day == 3)
                            select.options[1].selected = true;
                        else if(day == 10)
                            select.options[2].selected = true;
                        
                        var evt = document.createEvent("MouseEvents");
                        evt.initEvent("click", true, true);
                        input.dispatchEvent(evt);
                    } 
                }
                //封号第三步
                var as = iframe.contentDocument.getElementsByTagName('a');
                for (var i=0; i < as.length; i++) {
                    var a = as[i];
                    if (a.innerHTML == '确定'){
                        var evt = document.createEvent("MouseEvents");
                        evt.initEvent("click", true, true);
                        a.dispatchEvent(evt);
                    }
                }
            });
            
            //封号第一步
            GM_xmlhttpRequest({
                method : "GET",
                url : hreff,
                onload : function(response) {
                    iframe.contentDocument.body.innerHTML = response.responseText;
                    var as = iframe.contentDocument.getElementsByTagName('a');
                    for (var i = 0; i < as.length; i++) {
                        if (as[i].innerHTML == username){
                            var evt = document.createEvent("MouseEvents");
                            evt.initEvent("click", true, true);
                            ass = as[i].parentNode.parentNode.nextSibling.getElementsByTagName('a');
                            for(var j = 0; j < ass.length; j++) {
                                if (ass[j].innerHTML == '封'){
                                    ass[j].dispatchEvent(evt);
                                }
                            }
                        }
                    }
                }
            });
        }, false);
    }
}