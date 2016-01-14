/**
 * 布局工具类
 */
var LayoutUtils = null;
+function($){
	
	LayoutUtils = function(){};
	
	/**
	 * 获取内容高度
	 */
	LayoutUtils.mainHeight = function() {
		var h = $(window).height();
		var navH = this.headerHeight();
		h = h - navH - 8;
		return h;
	};
	/**
	 * 获取内容宽度
	 */
	LayoutUtils.mainWidth = function() {
		return $("#mix-main-content").outerWidth(true);
	};
	
	/**
	 * 头高度
	 */
	LayoutUtils.headerHeight = function() {
		return $(".mix-header .navbar").height();
	};
	
	/**
	 * 菜单宽度
	 */
	LayoutUtils.menuWidth = function() {
		return $(".mix-nav-menu").outerWidth(true);
	}
	
}(jQuery)