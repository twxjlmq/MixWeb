/**
 * @author lmq
 * 输入框下来列表
 * @param $
 */
(function($){
	/**
	 * 输入框下来列表
	 */
	$.fn.inputSelect = function(options) {
		var defaultW = 200;
		var defaultH = 200;
		var setting = {
				uri:null,
				datas:null,
				paramName:"name",
				defaultValue:null,
				isSearch: false,
				isShow:true,
				isShowAll:true,
				isShowNone:false,
				selectCallback:null
		};
		setting = $.extend(true,setting,options);
		var menuIndex = '';
		var $this = $(this);
		var thisId = $(this).attr("id");
		if(utils.isEmpty(thisId)) {
			var generateId = "input-select"+randomNum(5);
			$(this).attr("id",generateId);
			thisId = generateId;
		}
		var newId = thisId+"-input-select"+menuIndex;
		var inputName = $this.attr("name");
		if(utils.isEmpty(inputName)) {
			inputName = "";
		}
		$this.attr("name","");
		var page = 1;
		var hiddenInputId = thisId+"-value"+menuIndex;
		if(!utils.isEmpty($("#"+newId).attr("id")) && utils.isEmpty($("#"+hiddenInputId).attr("id"))) {
			destory();
		}
		var $newDiv = $("#"+newId);
		var isBody = true;
		//判断输入框是否在弹出窗口内
		var $modelDialog = $this.parents(".modal-dialog");
		if(!utils.isEmpty($modelDialog.attr("class"))) {
			isBody = false;
		}
		if(utils.isEmpty($newDiv.attr("id"))) {
			if(!isBody) {
				$this.after("<div id='"+newId+"' data-target-inputid='"+hiddenInputId+"' class='input-select-panel'></div>");
			} else {
				$("body").append("<div id='"+newId+"' data-target-inputid='"+hiddenInputId+"' class='input-select-panel'></div>");
			}
			$newDiv = $("#"+newId);
			$("#"+hiddenInputId).remove();
			var hiddenInput = "<input type='hidden' id='"+hiddenInputId+"' name='"+inputName+"' />";
			$this.after(hiddenInput);
			var styleSize = "input-group-sm";
			//if(utils.isContain($(this).attr("class"),'input-sm')) {
			//	styleSize = "input-group-xs";
			//}
			if(setting.isSearch) {
				var searchContents = "<div class='input-select-search'><div class='input-group "+styleSize+"'>"+
				"<input type='text' class='form-control search-input' /><span class='input-group-btn'>"+
				"<button class='btn btn-default search-btn' type='button'>搜索</button></span></div></div>";
				$newDiv.append(searchContents);
			}
			var h = defaultH;
			$newDiv.append("<div class='input-select-content' style='height:"+h+"px'></div>");
			
			if(utils.isEmpty(setting.uri)) {
				if(utils.isNotEmpty(datas)) {
					createListPanel(datas,1,1);
				} else {
					$newDiv.find(".input-select-content").html("没有搜索到相关数据");
				}
			} else {
				loadData(setting.uri);
				$(".search-btn").click(function(){
					var uri = setting.uri;
					if(utils.isContain(setting.uri,"?")) {
						if(utils.isContain(setting.uri,"op/"))
							uri = setting.uri+"&paramName="+setting.paramName+"&paramValue="+$newDiv.find(".search-input").val();
						else 
							uri = setting.uri+"&"+setting.paramName+"="+$newDiv.find(".search-input").val();
					} else {
						if(utils.isContain(setting.uri,"op/"))
							uri = setting.uri+"?paramName="+setting.paramName+"&paramValue="+$newDiv.find(".search-input").val();
						else 
							uri = setting.uri+"?"+setting.paramName+"="+$newDiv.find(".search-input").val();
					}
					loadData(uri);
					return false;
				});
			}
			$newDiv.append("<div class='input-select-footer'></div>");
			var $footerWrap = $newDiv.find(".input-select-footer");
			$footerWrap.append("<div class='input-select-footer-page'><nav><ul class='pager'>"+
					"<li class='previous'><a href='javascript:void(0)'>上一页</a></li>"+
					"<li class='next'><a href='javascript:void(0)'>下一页</a></li>"
					+"</ul></nav></div>");
			if(setting.isShow) {
				$newDiv.show();
				$this.addClass("mix-input-select");
			} else {
				$this.removeClass("mix-input-select");
				$newDiv.hide();
			}
		} else {
			//setting.isShow?$newDiv.show():$newDiv.hide();
			if(setting.isShow) {
				$newDiv.show();
				$this.addClass("mix-input-select");
			} else {
				$this.removeClass("mix-input-select");
				$newDiv.hide();
			}
		}
		
		var thisW = $(this).outerWidth()-1;
		var width = thisW<defaultW?defaultW:thisW;
		var top=0,left=0;
		if(!isBody) {
			var pos = $(this).position();
			top  = pos.top+$(this).outerHeight(true);
			left = pos.left;
		} else {
			var offset = $(this).offset();
			top  = offset.top+$(this).outerHeight(true);
			left = offset.left;
		}
		$newDiv.css({"left":left+"px","width":width+"px"});
		var $form = $this.parents("form:eq(0)");
		
		var windowHeight = $(window).height();
		var h = $newDiv.outerHeight(true)
		if((top+h)>(windowHeight-10)) {
			top = top-h-$(this).outerHeight(true);
			$newDiv.css("top",top+"px");
		} else {
			$newDiv.css("top",top+"px");
		}
		$(document).on("mousedown",function(event){
			if ($(event.target).closest('#'+newId).length === 0) {
				$this.removeClass("mix-input-select");
				$("#"+newId).hide();
			}
		});
		
		/**
		 * 
		 */
		function loadData(uri){
			$.get(uri,function(data){
				var output = data;
				if(output.result == '1') {
					createListPanel(output.datas,page,output.totalPage);
				} else {
					$newDiv.find(".input-select-content").html("没有搜索到相关数据");
				}
			});
		};
		/**
		 * 创建列表
		 */
		function createListPanel(datas,page,totalPage) {
			var contents = '';
			if(setting.isShowAll) {
				contents = "<div class='option-row'><a href='#' data-value=''>全部</a></div>";
			}
			if(setting.isShowNone) {
				contents += "<div class='option-row'><a href='#' data-value=''>无</a></div>";
			}
			var hiddenInputId = $("#"+newId).data("target-inputid");
			for(var i=0;i<datas.length;i++) {
				if(!utils.isEmpty(setting.defaultValue) && setting.defaultValue == datas[i][0]) {
					$("#"+hiddenInputId).val(setting.defaultValue);
					$("#"+hiddenInputId).prev().val(datas[i][1]);
				}
				var allData = '';
				for(var j=0;j<datas[i].length;j++) {
					allData +=datas[i][j]+"##";
				}
				allData = allData.substring(0, allData.length-2);
				contents += "<div class='option-row'><a href='#' data-all-data='"+allData+"' data-value='"+datas[i][0]+"'>"+datas[i][1]+"</a></div>";
			}
			$newDiv.find(".input-select-content").html(contents);
			$(".option-row a").unbind("click");
			$(".option-row a").click(function(){
				var hiddenInputId = $(this).parents(".input-select-panel").data("target-inputid");
				var $input = $("#"+hiddenInputId).prev(); 
				$("#"+hiddenInputId).val($(this).data("value"));
				$input.val($(this).text());
				$input.trigger("change");
				$(".input-select-panel").hide();
				$this.removeClass("mix-input-select");
				$input.prop("readonly",false);
				var allData= $(this).data("all-data");
				var array = null;
				if(utils.isNotEmpty(allData)){
					array = allData.split("##");
				}
				if(utils.isNotEmpty(setting.selectCallback)) {
					setting.selectCallback(this,array);
				}
				return false;
			});
			if(totalPage>1) {
				var $inputSelectFooter = $newDiv.find(".input-select-footer");
				$inputSelectFooter.find(".previous a").unbind("click");
				$inputSelectFooter.find(".next a").unbind("click");
				$inputSelectFooter.show();
				if(page<=1) {
					$inputSelectFooter.find(".previous").addClass("disabled");
				} else {
					$inputSelectFooter.find(".previous").removeClass("disabled");
					$inputSelectFooter.find(".previous a").click(function(){
						page--;
						changePage(uri, page);
						return false;
					});
				}
				if(page>=totalPage) {
					$inputSelectFooter.find(".next").addClass("disabled");
				} else {
					$inputSelectFooter.find(".next").removeClass("disabled");
					$inputSelectFooter.find(".next a").click(function(){
						page++;
						changePage(uri, page);
						return false;
					});
				}
			} else {
				$newDiv.find(".input-select-footer").hide();
			}
		}
		
		/**
		 * 
		 */
		function changePage(uri,page) {
			uri = uri.replace(/\?page=\d+|\&page=\d+/, "");
			if(utils.isContain(uri, "?")) {
				uri = uri+"&page="+page;
			} else {
				uri = uri+"?page="+page;
			}
			loadData(uri);
		};
		
		/**
		 * 销毁下拉框
		 */
		function destory() {
			$(".option-row a").unbind("click");
			var $inputSelectFooter = $("#"+newId).find(".input-select-footer");
			$inputSelectFooter.find(".previous a").unbind("click");
			$inputSelectFooter.find(".next a").unbind("click");
			$("#"+newId).remove();
			$("#"+hiddenInputId).remove();
		};
	}
})(jQuery);