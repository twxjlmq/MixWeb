/**
 * jqGrid插件封装；设置一些默认的参数
 */
+function($){
	
	var JQGridUtils = function (element,options) {
		this.element = element;
		this.initOptions(options);
		this.execute();
	};
	/**
	 * 默认参数
	 */
	JQGridUtils.defaultOptions = {
			autowidth: true,
			viewrecords: true
	};
	JQGridUtils.ROW_HEIGHT = 36;
	JQGridUtils.HEADER_HEIGHT = 37;
	
	JQGridUtils.prototype = {
			constructor: JQGridUtils,
			/**
			 * 初始化参数
			 * @param options
			 * @returns {JQGridUtils}
			 */
			initOptions : function(options) {
				this.options = $.extend(true,JQGridUtils.defaultOptions,options);
				return this;
			},
			/**
			 * 执行
			 */
			execute : function() {
				$.jgrid.defaults.styleUI = 'Bootstrap';
				$.jgrid.styleUI.Bootstrap.base.rowTable = "table table-bordered table-striped";
				if(utils.isEmpty(this.options.height) || this.options.height == 0) {
					this.options.height = this.autoHeight();
				} 
				this.element.jqGrid(this.options);
			},
			/**
			 * 高度自适应
			 */
			autoHeight : function() {
				//var h = this.options.rowNum * JQGridUtils.ROW_HEIGHT;
				var jqGridH = 0;
				if(utils.isEmpty(this.options.caption)) {
					jqGridH = JQGridUtils.HEADER_HEIGHT * 2;
				} else {
					jqGridH = JQGridUtils.HEADER_HEIGHT * 3;
				}
				var h = $(window).height() - jqGridH - 5;
				return h;
			}
	};
	
	$.fn.jqGridUtils = function(options) {
		var that = this;
		new JQGridUtils($(this), options);
		setTimeout(function() {
			$(window).resize(function(){
			 	$(that).jqGrid('resizeGrid',0);
			});
		}, 1000);
	}
	
}(jQuery)