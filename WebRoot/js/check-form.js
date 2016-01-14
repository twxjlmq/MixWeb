/**
 * @author lmq
 * 表单验证
 * @param $
 */
(function($){
	/**
	 * 表单验证
	 * placement属性包含：top,bottom,left,right,auto
	 */
	$.fn.validateForm = function(options) {
		var setting = {
				placement:'auto',
				callback:null
		};
		setting = $.extend(setting,options);
		$this = $(this);
		var result = true;
		var popoverTmp = null;
		$this.find("input,select,textarea").each(function(){
			if(result) {
				var isRequire = $(this).hasClass("require");
				var labelName = $(this).data("label-name");
				if(typeof(labelName) === 'undefined') {
					labelName = '';
				}
				var value = utils.handleNull($(this).val());
				if(isRequire && !$(this).prop("disabled")) {
					if(value == '') {
	                    if($($(this).hasClass("form-control"))) {
	                    	$(this).parent().addClass("has-error");
						}
						$(this).popover({
							placement:setting.placement,
							content:labelName+"不能为空!",
							trigger:"manual"});
						$(this).popover('show');
						popoverTmp = this;
						result = false;
						return result;
					}
				}
				//验证长度、格式
				if(value != '') {
					var lenStr = $(this).data("length");
					var dataFormat = $(this).data("format");
					
					var regexp = $(this).data("regexp");
					if(typeof(lenStr) !== 'undefined' || typeof(dataFormat) !== 'undefined' || typeof(regexp) !== 'undefined') {
						if(typeof(lenStr) === 'undefined')
							lenStr = '';
						if(typeof(dataFormat) === 'undefined')
							dataFormat = '';
						if(typeof(regexp) === 'undefined')
							regexp = '';
						if(result && utils.trim(regexp) != '') {
							result = utils.checkRegexp(regexp,value);
						} else if(!utils.isEmpty(lenStr) && !utils.isEmpty(dataFormat)) {
							result = utils.checkLen(value, lenStr);
							if(result) {
								result = result && checkDataFormat(value, dataFormat);
							}
						} else if(utils.trim(lenStr) != '' && utils.trim(dataFormat) == '') {
						   result = utils.checkLen(value,lenStr);
						} else if(utils.trim(dataFormat) != '' && utils.trim(lenStr) == '') {
							result = checkDataFormat(value,dataFormat);
						}
						if(!result) {
							result = result && false;
							if($($(this).hasClass("form-control"))) {
		                    	$(this).parent().addClass("has-error");
							}
							$(this).popover({placement:setting.placement,
								content:labelName+"输入错误!",
								trigger:"manual"});
							$(this).popover('show');
							popoverTmp = this;
						}
					}
				}
			} else {
				return result;
			}
		});
		//$this.find("input").focus(function(){
		//	removePopover();
		//});
		$(document).click(function(event){
			if(!utils.isEmpty(setting.callback) && typeof(setting.callback) === 'function') {
				setting.callback(event,popoverTmp);
			} else {
				removePopover();
				//$this.find("input").focus(function(){
				//		removePopover();
				//});
			}
		});
		return result;
		
		function removePopover() {
			if(popoverTmp != null) {
				$(popoverTmp).popover('destroy');
				popoverTmp = null;
			}
			if($($this.find("input,textarea").hasClass("form-control"))) {
				$this.find("input,textarea").parent().removeClass("has-error");
			}
		}
		
		/**
		 * 验证数据格式
		 * @param value
		 * @param dataFormat
		 * @returns {Boolean}
		 */
		function checkDataFormat(value,dataFormat) {
			var is = false;
			switch (dataFormat) {
			case 'num':
				is = utils.regexNum(value);
				break;
			case 'decimal':
				is = utils.regexDecimal(value);
				break;
			case 'integer':
				is = utils.regexInteger(value);
				break;
			case 'ip':
				is = utils.regexIp(value);
				break;
			case 'chinese':
				is = utils.checkChinese(value);
				break;
			case 'email':
				is = utils.checkEmail(value);
				break;
			case 'phone':
				is = utils.checkPhoneNo(value);
				break;
			case 'telephone':
				is = utils.checkTelephone(value);
				break;
			case 'qq':
				is = utils.checkQQ(value);
				break;
			case 'idcard':
				is = utils.checkCardNo(value);
				break;
			case 'date': 
				is = utils.checkDate(value);
			    break;
			case 'time':
				is = utils.checkTime(value);
				break;
			case 'dateTime':
				is = utils.checkDateTime(value);
				break;
			default:
				is = false;
				break;
			}
			return is;
		}

	}
})(jQuery)