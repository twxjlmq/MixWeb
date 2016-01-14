/**
 * @author lmq
 * 输入框自动完成
 * @param $
 */
(function($){
	/**
	 * 自动填充
	 */
	$.fn.autoComplete = function(options) {
		var setting = {
				uri:null,
				jsonData:null,
				multiple:false,
				multipleSeparator:';',
				callbackParam : null
		};
		setting = $.extend(setting,options);
		var $this = $(this);
		var thisId = $(this).attr("id");
		var thisName = $(this).attr("name");
		var newId = (utils.isEmpty(thisId)?$this.attr("class"):thisId);
		newId = utils.trim(newId).replace(/[ ]/g, "-");
		newId = newId+"-value";
		var newName = utils.isEmpty(thisName)?"":(thisName+"Value");
		var $newId = $("#"+newId);
		if(typeof($newId.attr("id")) === 'undefined') {
			$this.after("<input type='hidden' id='"+newId+"' name='"+newName+"' />");
			$newId = $("#"+newId);
		}
		var autoCompleteOptions = {
				focus:function() {return false;},
				select:function(event, ui) {
					if(setting.multiple) {
						var terms = split($this.val());
						terms.pop();
						terms.push(ui.item.value);
						terms.push("");
						var value = terms.join(setting.multipleSeparator);
						$this.val(value);
						
						var termIds = split($newId.val());
						termIds.pop();
						termIds.push(ui.item.id);
						termIds.push("");
						var ids = termIds.join(setting.multipleSeparator);
						$newId.val(ids);
				    } else {
				    	$this.val(ui.item.value);
				    	$newId.val(ui.item.id);
				    }
					return false;
				},
				minLength: 2
		};
		var dataOptions = {};
		if(!utils.isEmpty(setting.uri)) {
			dataOptions = {
					source: function(request, response) {
						var uri = setting.uri;
						if(typeof(setting.callbackParam) == 'function') {
							var param = setting.callbackParam();
							if(utils.isNotEmpty(param)) {
								if(utils.isContain(uri, "?")) {
									uri += "&"+param;
								} else {
									uri += "?"+param;
								}
							}
						}
			            $.getJSON(uri, {term: extractLast(request.term)}, function(data, status, xhr){
			            	//cache[term] = data; 
			            	//if (xhr === lastXhr) { 
			            	//  response(data); 
			            	//} 
			            	var output = data;
			            	if(output.result == '1')
			            		response(output.datas);
			            });
			        }
			};
		} else if(!utils.isEmpty(setting.jsonData)) {
			dataOptions = {
					source: function(request, response) {
			            response($.ui.autocomplete.filter(setting.jsonData, extractLast(request.term)));
			        }
			};
		}
		autoCompleteOptions = $.extend(autoCompleteOptions,dataOptions);
		
		$this.autocomplete(autoCompleteOptions);
		
		/**
		 * 按分隔符分隔多个值
		 * @param val
		 */
		function split(val) {
			var regStr = "/"+setting.multipleSeparator+"\s*/"
		    return val.split(eval(regStr));
		}
		
		/**
		 * 提取输入的最后一个值
		 * @param term
		 */
		function extractLast(term) {
		    return split(term).pop();
		}
		
		/**
		 * 按Tab键时，取消为输入框设置value
		 * @param event
		 */
		function keyDown(event) {
		    if (event.keyCode === $.ui.keyCode.TAB && $(this).data("autocomplete").menu.active) {
		        event.preventDefault();
		    }
		}
	
	};
})(jQuery);