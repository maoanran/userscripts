// ==UserScript==
// @name			校长之怒
// @version			2.1.0
// @namespace		www.maoanran.com
// @author			Anran
// @include			http://tieba.baidu.com/*
// @include			http://tieba.baidu.com.cn/*
// @grant       	GM_addStyle
// @grant       	unsafeWindow
// @require         http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// ==/UserScript==

//重置配置,去掉注释即可(去掉行首两个斜杠"//"),注意,重置完成重新注释上
//localStorage.removeItem("nuconfig");

if (window == window.top) {

	//入口
	function main() {
		//基础样式
		GM_addStyle('\
			ul#nunavigation {\
				position: fixed;\
				margin: 0px;\
				padding: 0px;\
				top: 0px;\
				left: 10px;\
				list-style: none;\
				z-index: 999999;\
				width: auto;\
			}\
			\
			ul#nunavigation li {\
				width: 103px;\
				display: inline;\
				float: left;\
			}\
			\
			ul#nunavigation li a {\
				display: block;\
				float: left;\
				margin-top: -2px;\
				width: 100px;\
				height: 25px;\
				background-color: #E7F2F9;\
				background-repeat: no-repeat;\
				background-position: 50% 10px;\
				border: 1px solid #BDDCEF;\
				border-radius: 0px 0px 10px 10px;\
				-webkit-border-bottom-right-radius: 10px;\
				-webkit-border-bottom-left-radius: 10px;\
				-khtml-border-bottom-right-radius: 10px;\
				-khtml-border-bottom-left-radius: 10px;\
				text-decoration: none;\
				text-align: center;\
				padding-top: 80px;\
				opacity: 0.7;\
			}\
			\
			ul#nunavigation li a:hover {\
				background-color: #CAE3F2;\
			}\
			\
			ul#nunavigation li a span {\
				letter-spacing: 2px;\
				font-size: 11px;\
				color: #60ACD8;\
				text-shadow: 0 -1px 1px #fff;\
			}\
			\
			ul#nunavigation .photos a {\
				background-image: url(\'\
					data:img/jpg;base64,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\');\
			}\
			\
			ul#nunavigation .option a {\
				background-image: url(\'\
					data:img/jpg;base64,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\');\
			}\
			\
			.overlay {\
				background: transparent url(\'\
					data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABGdBTUEAALGPC/xhBQAAABh0RVh0\
					U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAACVJREFUKFNjtLe3b2AgFYA0kYoZSNUAdtmo\
					JkhIjwYENMmRFRAABtDShPYvM2QAAAAASUVORK5CYII=\') repeat top left;\
				position: fixed;\
				top: 0px;\
				bottom: 0px;\
				left: 0px;\
				right: 0px;\
				z-index: 99999;\
			}\
			\
			.nubox {\
				position: fixed;\
				top: -400px;\
				display: none;\
				left: 25%;\
				right: 28%;\
				background-color: #fff;\
				color: #7F7F7F;\
				padding: 20px;\
				border: 2px solid #ccc;\
				border-radius: 20px;\
				-webkit-border-radius: 20px;\
				-khtml-border-radius: 20px;\
				shadow: 0 1px 5px #333;\
				-webkit-box-shadow: 0 1px 5px #333;\
				z-index: 99999;\
			}\
			\
			.nubox h1 {\
				font-size: 24px !important;\
				border-bottom: 1px dashed #7F7F7F;\
				margin: -20px -20px 0px -20px !important;\
				padding: 10px !important;\
				background-color: #FFEFEF;\
				color: #EF7777;\
				border-radius: 20px 20px 0px 0px;\
				-webkit-border-top-left-radius: 20px;\
				-webkit-border-top-right-radius: 20px;\
				-khtml-border-top-left-radius: 20px;\
				-khtml-border-top-right-radius: 20px;\
			}\
			\
			a.boxclose {\
				float: right;\
				width: 26px;\
				height: 26px;\
				background: transparent url(\'\
					data:img/jpg;base64,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\
					mCl2QUSz+QAAAABJRU5ErkJggg==\') repeat top left;\
				margin-top: -30px;\
				margin-right: -30px;\
				cursor: pointer;\
			}\
			\
			a.boxok {\
				float: right;\
				width: 32px;\
				height: 32px;\
				background: transparent url(\'\
					data:img/jpg;base64,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\') repeat top left;\
				margin-top: -30px;\
				cursor: pointer;\
			}\
			\
			#header .i {\
				opacity: 1 !important;\
			}\
			\
			.recentImgDiv a {\
				border: 3px solid #FFFFFF;\
				float: left;\
				height: 46px;\
				width: 46px;\
				text-align: center;\
			}\
			.nu-editor-overlay {\
			    display: block;\
			    height: 220px;\
			    top: -215px;\
			    left: 55px;\
			    width: 315px;\
			    background-color: #fff;\
			    border: 3px solid #d7dbe4;\
			    position: absolute;\
			    z-index: 11;\
			}\
			.nu-editor-overlay .arrow {\
				-moz-transform: rotate(180deg);\
			    background: url("http://tb2.bdstatic.com/tb/static-common/editor_img/editor_ae2bf56.gif") no-repeat scroll 0 -192px rgba(0, 0, 0, 0);\
			    height: 8px;\
			    left: 255px;\
			    position: absolute;\
			    top: 220px;\
			    width: 15px;\
			}\
			.search_main_fixed {\
				position: absolute\
		}');
		//读取配置
		var blacklist = [];
		var config = [];

		var configEnum = {
			blacklist: 0,
			blockInList: 1,
			fullBlock: 2,
			onlyShowImgSize: 3,
			recentImg: 4,
		};

		if (localStorage["nuconfig"]){
			config = JSON.parse(localStorage["nuconfig"]);
			blacklist = JSON.parse(config[configEnum.blacklist]);
		}
		var imgSize = getConfig(configEnum.onlyShowImgSize);
		var recentImg = getConfig(configEnum.recentImg);

		if(blacklist == null)
			blacklist = [];
		if (imgSize == null) {
			imgSize = new Object();
			imgSize.imgMinWidth = 500;
			imgSize.imgMaxWidth = 999;
			imgSize.imgMinHeight = 300;
			imgSize.imgMaxHeight = 999;
		}
		if (recentImg == undefined) {
			recentImg = [];
			recentImg.push('http://game.ali213.net/static/image/smiley/wei/0000.jpg');
			recentImg.push('http://game.ali213.net/static/image/smiley/wei/2.gif');
			recentImg.push('http://game.ali213.net/static/image/smiley/wei/26.gif');
			recentImg.push('http://game.ali213.net/static/image/smiley/wei/8.gif');
			recentImg.push('http://imgsrc.baidu.com/forum/pic/item/14ce36d3d539b60080ba9b1ee950352ac65cb727.jpg');
			recentImg.push('http://imgsrc.baidu.com/forum/pic/item/30adcbef76094b3678e78f44a3cc7cd98d109d26.jpg');
			recentImg.push('http://imgsrc.baidu.com/forum/pic/item/0824ab18972bd40775c447547b899e510fb30913.jpg');
			recentImg.push('http://g.hiphotos.baidu.com/album/s%3D400%3Bq%3D90/sign=cdd2fe3dfc039245a5b5e00fb7afd5ff/6a600c338744ebf814506ccfd9f9d72a6059a718.jpg');
		}

		setTimeout(function() {
			if ($("#thread_list").length > 0) {
				init2();
			} else if($("#j_p_postlist").length > 0){
				init1();
			} else if($("#feed").length > 0){
				init3();
			} 
		}, 0);
		//帖子页面初始化
		function init1() {
			displayUserArea();
			displayFixedMenu();
			displayOptionDialog();
			displayPostArea();
		}

		//列表页面初始化
		function init2() {
			displayFixedMenu();
			displayOptionDialog();
			displayThreadList();
			displayPostArea();
		}
		//i贴吧页面
		function init3(){
			displayFixedMenu();
			displayOptionDialog();
			blockUserInItieba();
		}
		
		//用户区各种显示
		function displayUserArea() {
			var $users = $("a.p_author_name.j_user_card");
			for (var i = 0; i < $users.length; i++) {
				displayUserArea2(i, $users);
			}

			document.addEventListener('DOMNodeInserted', function(event) {
				$(event.target).find('.lzl_cnt').each(function(i) {
					displayUserArea3($(this));
				});
			}, true);
		}

		//楼层相关
		function displayUserArea2(i, $users) {
			var $user = $users.eq(i);
			var $tbody = $user.parent().parent().parent().parent();
			var username = $user.text();
			var louceng = JSON.parse($tbody.attr('data-field')).content.floor + "楼";
			var content = $tbody.find('.d_post_content').html();

			var a2 = '<br><a href="javascript:void(0);" class="p_author_name j_user_block" name="' + username + '">屏蔽此人</a>';

			$user.parent().append(a2);
			$user.parent().find("a.p_author_name.j_user_block")[0].addEventListener('click', addToBlacklist, false);
			blockUser($tbody, username);
		}
		
		function blockUser($tbody, username) {
			for (var j = 0; j < blacklist.length; j++) {
				if (username == blacklist[j]) {
					if (getConfig(configEnum.fullBlock) == 0) {
						$tbody.children().remove();
						$tbody.prepend("<br>");
						$tbody.prepend(blockTbody(username));
						$tbody.prepend("<br>");
					} else {
						$tbody.remove();
					}
				}
			}
		}

		
		//在i贴吧使用黑名单
		function blockUserInItieba(){
			$('.replyme_user,.atme_user').each(function(i){
				var username = this.children[0].innerHTML.replace('：','');
				for (var j = 0; j < blacklist.length; j++) {
					if (username == blacklist[j])
						$(this).parent().parent().parent().remove();
				}
			});
		}
		
		//楼中楼
		function displayUserArea3($this) {
			var username = $this.find('.at').attr('username');

			for (var j = 0; j < blacklist.length; j++) {
				if (username == blacklist[j]) {
					if (getConfig(configEnum.fullBlock) == 0) {
						$this.parent().html('<font color="red">被屏蔽的回复 来自于 ' + username + '</font>');
					} else {
						$this.parent().remove();
					}
				}
			}
		}

		//配置窗口初始化
		function displayOptionDialog() {
			var div = '<div class="overlay" id="overlay" style="display:none;"></div>';
			div += '<div class="nubox" id="box"><a class="boxclose" id="boxclose"></a><h1>Option<br></h1><br>';

			var st1 = "<li><input type='checkbox' id='st1'/>&nbsp;屏蔽黑名单用户主题&emsp;</li>";
			st1 += "<li><input type='checkbox' id='st1_2'/>&nbsp;不显示被屏蔽用户楼层提示&emsp;</li>";
			div += st1;

			var st2 = "<li>仅看图片大小：&emsp;&nbsp;";
			st2 += "<input type='text' style='width:50px;' id='st2_1'/>";
			st2 += " < 宽  < <input type='textField' style='width:50px;' id='st2_2'/>";
			st2 += "&emsp;且 &emsp;<input type='text' style='width:50px;' id='st2_3'/>";
			st2 += " < 高  < <input type='textField' style='width:50px;' id='st2_4'/></li>";
			div += st2;

			var st3 = "<li>黑名单 (逗号分隔多个用户)<textarea rows=3 style='resize: none;width:100%' id='st3'/> </li>";
			div += st3;

			var st8 = "<li>最近使用的表情 (换行分隔多个表情)<textarea rows=7 style='resize: none;width:100%' id='st8'/> </li>";
			div += st8;
			div += '<br><br><a class="boxok" id="boxok"></a></div>';
			$(document.body).append(div);

			$('#boxok')[0].addEventListener("click", saveConfig, false);
			$('#option').click(function() {
				flushConfig();
				$('#overlay').fadeIn('fast', function() {
					$('#box').animate({
						'top' : '140px'
					}, 300);
					$('#box').css("display", "block");
				});
			});
			$('#boxclose').click(function() {
				$('#box').animate({
					'top' : '-400px'
				}, 300, function() {
					$('#box').css("display", "none");
					$('#overlay').fadeOut('fast');
				});
			});
		}

		//刷新配置菜单
		function flushConfig() {
			//列表过滤
			{
				var st1 = getConfig(configEnum.blockInList);
				if (st1 == null || st1 != 0)
					$("#st1").attr("checked", true);
				else
					$("#st1").attr("checked", false);
			}
			//
			{
				var st1_2 = getConfig(configEnum.fullBlock);
				if (st1_2 == null || st1_2 != 0)
					$("#st1_2").attr("checked", true);
				else
					$("#st1_2").attr("checked", false);
			}
			//
			{
				var st8 = "";
				for (var i = 0; i < recentImg.length; i++)
					st8 += recentImg[i] + "\n";
				$("#st8").val(st8);
			}
			$("#st2_1").val(imgSize.imgMinWidth);
			$("#st2_2").val(imgSize.imgMaxWidth);
			$("#st2_3").val(imgSize.imgMinHeight);
			$("#st2_4").val(imgSize.imgMaxHeight);
			$("#st3").val(blacklist);
		}

		//存储配置信息
		function saveConfig() {
			//列表过滤
			{
				var st1 = $("#st1")[0].checked ? 1 : 0;
				setConfig(configEnum.blockInList, st1);
			}
			//完全屏蔽
			{
				var st1_2 = $("#st1_2")[0].checked ? 1 : 0;
				setConfig(configEnum.fullBlock, st1_2);
			}
			//仅看图片
			{
				imgSize.imgMinWidth = $("#st2_1").val();
				imgSize.imgMaxWidth = $("#st2_2").val();
				imgSize.imgMinHeight = $("#st2_3").val();
				imgSize.imgMaxHeight = $("#st2_4").val();
				setConfig(configEnum.onlyShowImgSize, imgSize);
			}
			//黑名单
			{
				blacklist = $("#st3").val().replace('，', ',').split(',');
				setConfig(configEnum.blacklist, JSON.stringify(blacklist));
			}
			//最近使用的表情
			{
				var temp = $("#st8").val().split('\n');
				var st8 = [];
				for (var i = 0; i < temp.length && i < 18; i++) {
					if (temp[i].length > 0 && !st8.contains(temp[i]))
						st8.push(temp[i]);
				}
				setConfig(configEnum.recentImg, st8);
			}


			window.location.reload();
		}

		//列表相关显示
		function displayThreadList() {

			$ThreadList = $("li.j_thread_list");
			var temp = new Object();
			
			for (var i = 0; i < $ThreadList.length; i++) {
			//列表页黑名单屏蔽
				var st1 = getConfig(configEnum.blockInList);
				var username = $ThreadList.eq(i).find('span.tb_icon_author').children().eq(0).text();
				if (st1 == null || st1 != 0) {
					for (var j = 0; j < blacklist.length && username.length > 0; j++) {
						if (username == blacklist[j]) {
							$ThreadList.eq(i).remove();
							temp[username] = temp[username] == null ? 1 : temp[username] + 1;
						}
					}
				}
			}
		
			var str = "";
			for (var user in temp)
			str += user + " (" + temp[user] + ")  ";
			if (str != "")
				$("div.th_footer_l").append(' , 屏蔽信息 : <span class="red">' + str + '</span>');
		}

		//各种按钮
		function displayPostArea() {
			//最近表情面板
			var div = '<div class="recentImgDiv" style="display:none"><div class="nu-editor-overlay"><div class="overlay-content"><br><h3 align="middle">最近使用的表情</h3><hr><div></div></div><span class="arrow" style="right: 13px;"></span></div>';

			$('.old_style_wrapper').each(function() {
				$(this).append(div);
				document.addEventListener('DOMNodeInserted', function(event) {
					$(event.target).find('div.edui-btn-emotion').each(function(i) {
						this.addEventListener("click", recentImgDivDisplayNone, false);
						this.addEventListener("mouseover", recentImgDivDisplay, false);
						this.addEventListener("mouseout", recentImgDivDisplayNone, false);
					});
				}, true);
				if ($('div.recentImgDiv')[0]) {
					$('div.recentImgDiv')[0].addEventListener("mouseover", recentImgDivDisplay, false);
					$('div.recentImgDiv')[0].addEventListener("mouseout", recentImgDivDisplayNone, false);
				}
			});

			//事件监听
			$('a.poster_submit')[0].addEventListener("click", recentImgSave, true);
			window.addEventListener("keydown", function(event) {
				if (event.ctrlKey && event.keyCode == 13 && event.target.className == 'tb-editor-editarea edit_field_focus') {
					recentImgSave();
				}
			}, true);
		}

		//显示最近使用的表情
		function recentImgDivDisplay() {
			if ($('div.recentImgDiv')[0] != undefined && $('.recentImgDiv .overlay-content img').length == 0) {
				var div = $('.recentImgDiv .overlay-content');
				for (var i = 0; i < recentImg.length; i++) {
					var a = document.createElement('a');
					a.addEventListener('click', function() {
						$('div#ueditor_replace').children().eq(0).append('<img class="BDE_Image" onload="EditorUI.resizeImage(this, 560)" src="' + this.childNodes[0].src + '"/>');
						recentImgDivDisplayNone();
					}, false);
					$(a).append('<img src=' + recentImg[i] + ' style="width:40px;height:40px;">');
					div.append(a);
				}
			}
			$('div.recentImgDiv').css("display", "inline");
		}

		function recentImgDivDisplayNone() {
			$('div.recentImgDiv').css("display", "none");
		}

		function recentImgSave() {

			var temp = new Array();
			$('div#ueditor_replace').find('.BDE_Image').each(function(index) {
				if (this.width < 129 && this.height < 129) {
					var src = this.src;
					if (!temp.contains(src))
						temp.push(src);
				}
			});
			for (var i = 0; i < recentImg.length; i++) {
				var src = recentImg[i];
				if (!temp.contains(src))
					temp.push(src);
			}

			var end = temp.length < 18 ? temp.length : 18;
			recentImg = temp.slice(0, end);
			setConfig(configEnum.recentImg, recentImg);
		}



		//构建屏蔽信息
		function blockTbody(username) {
			var font = document.createElement("font");
			font.color = "red";
			font.innerHTML = "此楼来自于被屏蔽用户 " + username + " . ";

			var a = document.createElement("a");
			a.innerHTML = "将该用户移出黑名单.";
			a.href = "javascript:void(0);";
			a.style.textDecoration = "none";
			a.name = username;
			a.className = "blockInfo";
			a.addEventListener("click", removeFromBlacklist, false);

			var div = document.createElement("div");
			div.appendChild(font);
			div.appendChild(a);
			div.align = 'center';
			return div;
		}

		//加入黑名单
		function addToBlacklist() {
			var username = $(this).attr("name");

			for (var i = 0; i < blacklist.length; i++)
				if (username == blacklist[i])
					return;

			blacklist.push(username);
			setConfig(configEnum.blacklist, JSON.stringify(blacklist));

			var $p = $("a[name=" + username + "]").parent().parent().parent().parent();

			for (var i = 0; i < $p.length; i++) {
				blockUser($p.eq(i), username);
			}
			$('div.p_postlist').find('.lzl_cnt').each(function(i) {
				displayUserArea3($(this));
			});

			$(this).parent().parent().css("display", "none");
		}

		//显示悬浮功能按钮
		function displayFixedMenu() {

			var ul = '<ul id="nunavigation"><li class="option"><a id="option" href="#optionDialog"><span>配置</span></a></li>';
			ul += '<li class="photos"><a id="onlyShowImg" href="javascript:void(0);"><span>仅看图片</span></a></li></ul>';
			$(document.body).append(ul);

			var d = 300;
			$('#nunavigation a').each(function() {
				$(this).stop().animate({
					'marginTop' : '-80px'
				}, d += 150);
			});
			$('#nunavigation > li').hover(function() {
				$('a', $(this)).stop().animate({
					'marginTop' : '-2px'
				}, 200);
			}, function() {
				$('a', $(this)).stop().animate({
					'marginTop' : '-80px'
				}, 200);
			});

			$("#onlyShowImg")[0].addEventListener("click", onlyShowImg, false);
		}


		//移出黑名单
		function removeFromBlacklist() {
			var username = $(this).attr("name");
			blacklist.deleteElementByValue(username);
			setConfig(configEnum.blacklist, JSON.stringify(blacklist));
			window.location.reload();
		}

		//只看图片
		function onlyShowImg() {
			var temp = '';
			for (var i = 0; i < document.images.length; i++) {
				var img = document.images[i];
				if (img.height >= imgSize.imgMinHeight && img.height <= imgSize.imgMaxHeight)
					if (img.width >= imgSize.imgMinWidth && img.width <= imgSize.imgMaxWidth)
						temp += '<img src=' + img.src + '><br>';
			}
			if (temp != '') {
				document.write('<center>' + temp + '</center>');
				void (document.close())
			} else {
				alert("没有满足条件的图片!")
			}
		}

		Array.prototype.deleteElementByValue = function(varElement) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == varElement) {
					this.splice(i, 1);
					break;
				}
			}
		}

		Array.prototype.contains = function(obj) {
			var i = this.length;
			while (i--)
			if (this[i] === obj)
				return true;
			return false;
		}

		function setConfig(num, value) {
			config[num] = value;
			localStorage["nuconfig"] = JSON.stringify(config);
		}


		function getConfig(num) {
			return config[num];
		}
	}

	main();
}
