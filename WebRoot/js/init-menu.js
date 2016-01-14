/**
 * 初始化菜单
 */
+function($) {
	var InitMenu = function(element,options) {
		this.element = element;
		this.initOptions(options);
		this.createMenu(this.options.datas,null);
		this.element.metisMenu();
		this.menuClickListener();
		this.menuToggle();
	};
	
	InitMenu.defaultOptions = {
			datas : null,
			mainContentId : '#mix-main-content',
			iframeContentId: '#mix-iframe-content',
			iframeName: 'mixIframeContent'
	};
	
	InitMenu.prototype = {
			constructor: InitMenu,
			/**
			 * 初始化参数
			 * @param options
			 * @returns {InitMenu}
			 */
			initOptions : function(options) {
				this.options = $.extend(true,InitMenu.defaultOptions,options);
				return this;
			},
			
			/**
			 * 创建菜单
			 */
			createMenu : function(datas,id) {
				if(datas) {
					var len = datas.length;
					var $menu = null;
					if(utils.isEmpty(id)) {
						$menu = this.element;
						isFirst = true;
					} else {
						$menu = $("#menu-"+id);
					}
					var aOpenModel = '';
					for(var i=0; i<len; i++) {
						aOpenModel = '';
						var hasChild = (datas[i].isChild == 1?true:false);
						if('__blank' == datas[i].menu.openModel) {
							aOpenModel = 'target="'+datas[i].menu.openModel+'"';
						}
						var content = "<li class=\""+(isFirst?'active':'')+"\">" +
								"<a class=\""+(hasChild?'parent-menu':'menu-open-url')+"\" href=\""+datas[i].menu.url+"\" data-open-model=\""+utils.handleNull(datas[i].menu.openModel)+"\" "+aOpenModel+"　>";
						if(hasChild) {
							content += "<span class=\"fa fa-lg left-arrow\"></span> ";
						} else {
							content += "<span class=\"not-arrow\">&nbsp;</span> ";
						}
						if(utils.isNotEmpty(datas[i].menu.icon)) {
							content += "<span class=\"sidebar-nav-item-icon "+datas[i].menu.icon+"\"></span>";
						}
						content += "<span class=\"sidebar-nav-item\">"+datas[i].menu.name+"</span>";
						
						content += "</a>";
						if(hasChild) {
							content += "<ul id=\"menu-"+datas[i].menu.id+"\"></ul>";
						}
						content += "</li>";
						$menu.append(content);
						isFirst=false;
						if(hasChild) {
							this.createMenu(datas[i].childs,datas[i].menu.id);
						}
					}
				}
			},
			/**
			 * 监听菜单点击超链接事件
			 */
			menuClickListener : function() {
				var that = this;
				$(".menu-open-url").click(function(){
					var $this = $(this);
					var url = $this.attr("href");
					if(utils.isNotEmpty(url) 
							&& !utils.trim(url).startWith("#") 
							&& !utils.trim(url).startWith("javascript")) {
						$(".menu-open-url").removeClass("menu-selected");
						
						$(this).addClass("menu-selected");
						var openModel = $this.data("open-model");
						if('__blank' == openModel) {
							return true;
						}
						var $iframe = $(that.options.iframeContentId);
						if(utils.isEmpty($iframe.attr("id"))) {
							var iframeH = $(window).height()-getHeaderHeight();
							$(that.option.mainContentId).html("<iframe id=\""+that.options.iframeContentId+ 
									"\" name=\""+that.options.iframeName+"\" frameborder=\"0\" scrolling=\"no\"></iframe>");
							$iframe = $(that.options.iframeContentId);
							utils.iframeAutoListner($iframe);
						}
						that.loadingUrl($iframe,url);
					}
					return false;
				});
			},
			
			/**
			 * 
			 * @param target
			 * @param url
			 */
			loadingUrl : function(target, url) {
				utils.loadUrl2IFrame(target, url, true, false);
			},
			/**
			 * 收起、展开菜单
			 */
			menuToggle : function() {
				var that = this;
				$(".mix-nav-menu .menu-arrow").click(function(){
					var $navMenu = $(this).parents(".mix-nav-menu:eq(0)");
					$navMenu.hide();
					var $main = $("#mix-main-content");
					$main.removeClass("col-sm-8 col-md-9 col-lg-10");
					$main.addClass("col-sm-12");
					$(".menu-arrow-show").show();
					//that.autoJQGridWidth();
					/*$navMenu.animate({
					    width:0,
					  },'fast',function(){
						  $navMenu.hide();
						  var $main = $("#mix-main-content");
						  $main.removeClass("col-sm-8 col-md-9 col-lg-10");
						  $main.addClass("col-sm-12");
					  });*/
				});
				$(".menu-arrow-show").click(function(){
					var $main = $("#mix-main-content");
					$main.addClass("col-sm-8 col-md-9 col-lg-10");
					$main.removeClass("col-sm-12");
					
					var $navMenu = $(".mix-nav-menu");
					$navMenu.show();
					$(this).hide();
					//that.autoJQGridWidth();
				});
			},
			/**
			 * jqGrid重新计算宽度(未实现)
			 */
			autoJQGridWidth : function(){
				
			}
	};
	
	$.fn.initMenu = function(options) {
		new InitMenu($(this),options);
	}
}(jQuery)