/**
 * @author lmq
 * 公共方法
 */

var utils = function(){}

/**
 * 获取文件后缀
 * @param fileName
 * @returns {String}
 */
utils.getFileSuffix = function(fileName) {
	var suffix = "";
	if(null != fileName && fileName != '' && fileName != undefined) {
		var suffixP = fileName.lastIndexOf(".");
		suffix = fileName.substring(suffixP+1,fileName.length).toLowerCase();
	}
	return suffix;
}

/**
 * 获取class中含有containValue指定字符串的class
 * @param value
 * @param containValue
 * @returns {String}
 */
utils.getClassContain = function(value,containValue) {
	var className = null;
	if(!this.isEmpty(value)) {
		var values = value.split(" ");
		if(values.length>0) {
			for ( var i = 0; i < values.length; i++) {
				if(this.isContain(values[i], containValue)) {
					className = this.trim(values[i]);
					break;
				}
			}
		}
	}
	return className;
}

/**
 * 判断是否包含字符串
 * @param srcValue
 * @param destValue
 * @returns {Boolean}
 */
utils.isContain = function(srcValue,destValue) {
	if(this.isEmpty(srcValue)) {
		return false;
	}
	var i = srcValue.indexOf(destValue);
	return (i==-1)?false:true;
}



/**
 * 判断是否为图片格式(gif,jpg,png)
 * @param fileName
 * @returns {Boolean}
 */
utils.isImageFormat = function(fileName) {
	var is = false;
	var suffix = this.getFileSuffix(fileName);
	if(suffix == 'gif' || suffix=='jpg' || suffix=='png') {
		is = true;
	}
	return is;
}

/**
 * 判断是否为空
 * @param value
 * @returns {Boolean}
 */
utils.isEmpty = function(value) {
	var is = true;
	if(typeof(value) !== 'undefined' && null != value && this.trim(value.toString()) != '') {
		is = false;
	}
	return is;
}

/**
 * 判断是否不为空
 * @param value
 * @returns {Boolean}
 */
utils.isNotEmpty = function(value) {
	return !this.isEmpty(value);
}

/**
 * 转换null为""
 * @param str
 * @returns
 */
utils.handleNull = function(str) {
	if(typeof(str) === 'undefined' || null == str) {
		return "";
	}
	return this.trim(str);
}

/**
 * 判断是否为数组
 * @param obj
 * @returns {Boolean}
 */
utils.isArray = function(obj) {
	var is = false;
	if(typeof(obj) !== 'undefined' && null != obj && obj != '' 
		&& Object.prototype.toString.call(obj) === '[object Array]') {
		is = true;
	}
	return is;
}

/**
 * 解析uri,如果解析成功返回结果为一个数组
 * 第一个值为：uri
 * 第二个值为：参数
 * @param uri
 */
utils.parseUri = function(uri) {
	var array = null;
	if(!this.isEmpty(uri)) {
		var params = '';
		if(this.isContain(uri, "?")) {
			var index = uri.indexOf("?");
			params = uri.substring(index+1,uri.length);
			uri = uri.substring(0,index);
			var np = '';
			if(this.isContain(params, "#")) {
				index = params.indexOf("#");
				np = params.substring(index, params.length);
				params = params.substring(0, index);
			}
			uri = uri+np;
		}
		array = [uri,params];
	}
	return array;
}

/**
 * 去左空格
 * @param str
 * @returns {String}
 */
utils.ltrim = function(str) {
	if(typeof(str) === 'string') {
		str=str.replace( /^\s*/, "");
	}
	return str;
}

/**
 * 去右空格
 * @param str
 * @returns {String}
 */
utils.rtrim = function(str) {
	if(typeof(str) === 'string') {
	   str=str.replace(/(\s*$)/g, "");
	}
	return str;
}

/**
 * 替换字符串
 * @param str
 * @param reg1
 * @param reg2
 * @returns
 */
utils.replaceAll = function(str,reg1,reg2) {
	var reg = new RegExp(reg1,"g");
	str = str.replace(reg,reg2);
	return str;
}

/**
 * 去空格
 * @param str
 * @returns {String}
 */
utils.trim = function(str) {
	if(typeof(str) === 'string') {
	   str = str.replace(/\s+/g,"");
	}
	return str;
}

/**
 * 验证长度
 * @param value
 * @param lenStr
 * @returns {Boolean}
 */
utils.checkLen = function(value,lenStr) {
	var is = false;
	if(this.regexNum(lenStr)) {
		if(value.length==parseInt(lenStr)) {
			is = true;
		}
	} else if(lenStr.indexOf(",")>0) {
		var lens= lenStr.split(",");
		if(lens.length==2 && this.regexNum(lens[0]) && this.regexNum(lens[1])) {
			if(value.length >= parseInt(lens[0]) && 
					value.length <= parseInt(lens[1])) {
				is = true;
			}
		}
	} else if(lenStr.indexOf("|")>0) {
		var lens = lenStr.split("|");
		for(var i=0;i<lens.length;i++) {
			if(this.regexNum(lens[i]) && (value.length == parseInt(lens[i]))) {
				is = true;
				break;
			}
		}
	}
	return is;
}


/**
 * 匹配IP地址
 * @param ip
 * @returns {Boolean}
 */
utils.regexIp = function(ip) {
	var regex = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
	if(RegExp(regex).test(ip)){
		if (RegExp.$1 <= 255 && RegExp.$1 > 0 
				&& RegExp.$2 <= 255 && RegExp.$2 >= 0 
				&& RegExp.$3 <= 255 && RegExp.$3 >= 0 
				&& RegExp.$4 <= 255 && RegExp.$4 > 0
				) {
			return true;
		}
	}
	return false;
}

/**
 * 匹配数字（整数和小数）
 * @param num
 * @returns {Boolean}
 */
utils.regexNum = function(num) {
	var regex = /^\d+$|^\d+\.\d+$/;
	if(regex.test(num)) {
		return true;
	}
	return false;
}

/**
 * 匹配小数
 * 
 * @param num
 * @returns {Boolean}
 */
utils.regexDecimal = function(num) {
	var regex = /^\d+\.\d+$/;
	if(regex.test(num)) {
		return true;
	}
	return false;
}

/**
 * 匹配整数
 * @param num
 * @returns {Boolean}
 */
utils.regexInteger = function(num) {
	var regex = /^\d+$/;
	if(regex.test(num)) {
		return true;
	}
	return false;
}

/**
 * 验证是否匹配表达式
 * @param regexp
 * @param value
 */
utils.checkRegexp = function(regexp,value) {
	var is = false;
	var regex = eval(regexp);
	if(regex.test(value)) {
		is = true;
	}
	return is;
} 

/**
 * 验证汉字
 * @param value
 * @returns {Boolean}
 */
utils.checkChinese = function(value) {
	var regex = /^[\u4E00-\u9FA5]+$/gi;
	if(regex.test(value)) {
		return true;
	}
	return false;
}

/**
 * 验证Email地址
 * @param value
 * @returns {Boolean}
 */
utils.checkEmail = function(value){
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}

/**
 * 验证邮编
 * @param value
 * @returns {Boolean}
 */
utils.checkCode = function(value) {
	var reg = /^[a-z|A-Z|0-9]{6}$/;
	if(reg.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 * 验证短信验证码
 * @param value
 * @returns {Boolean}
 */
utils.checkSMSCode = function(value) {
	var reg = /^[0-9]{6}$/;
	if(reg.test(value)) {
		return true;
	} else {
		return false;
	}
}

/**
 * 验证手机号码
 * @param value
 * @returns {Boolean}
 */
utils.checkPhoneNo = function(value) {
    var reg = /(^0{0,1}1[3|5|8][0-9]{9}$)/;
    if (!reg.test(value)) {
        return false;
    }
    return true;
}

/**
 * 验证固定电话号码
 * @param value
 * @returns {Boolean}
 */
utils.checkTelephone = function(value) {
	var regex = /^[0][0-9]{2,3}\-[2-9][0-9]{6,7}(\-[0-9]{1,4})?$/;
	if(regex.test(value)) {
		return true;
	}
	return false;
}

/**
 * 验证QQ号
 * @param value
 * @returns {Boolean}
 */
utils.checkQQ = function(value) {
    var reg = /^[1-9]\d{4,11}$/;
    if (!reg.test(value)) {
        return false;
    }
    return true;
}

/**
 * 身份证号码验证 <br />
 * 需要引入check-card-no.js文件
 * @param value
 * @returns {Boolean}
 */
utils.checkCardNo = function(value) {
	return checkCard(value);
}

/**
 * 验证日期格式：yyyy-MM-dd
 * @param value
 * @returns {Boolean}
 */
utils.checkDate = function(value) {
	 var is = false;
	 var reg = /^[1-2][0-9]{3}-[0-9]{2}-[0-9]{2}$/;
	 if(!this.isEmpty(value)){
		 is = reg.test(value);
	 }
	 return is;
}

/**
 * 验证时间格式：HH:mm:ss
 * @param value
 * @returns {Boolean}
 */
utils.checkTime = function(value) {
	 var is = false;
	 var reg = /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/;
	 if(!this.isEmpty(value)){
		 is = reg.test(value);
	 }
	 return is;
}

/**
 * 验证日期时间格式：yyyy-MM-ss HH:mm:ss
 * @param value
 * @returns {Boolean}
 */
utils.checkDateTime = function(value) {
	 var is = false;
	 var reg = /^[1-2][0-9]{3}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$/;
	 if(!this.isEmpty(value)){
		 is = reg.test(value);
	 }
	 return is;
}

/**
 * 验证匿名
 * @param value
 * @returns {Boolean}
 */
utils.checkAnonymous = function(value) {
	var reg = /^[\u4e00-\u9fa5|A-Za-z]([\w|\u4e00-\u9fa5]){1,7}$/;
    if (!reg.test(value)) {
        return false;
    }
    return true;
}

/**
 * 生成一个唯一的key
 * 生成序列号
 * @returns {String}
 */
utils.generateUniqueKey = function() {
	var len = 5;
	var time = new Date().getTime();
	var random = this.randomNum(len);
	if(random.length>len) {
		random = random.substring(0, len);
	}
	return "U"+time+'-'+random;
}

/**
 * 生成一个n位的随机数
 * @param n
 * @returns {String}
 */
utils.randomNum = function(n) {
	if(!this.regexNum(n)) {
		n = 6;
	}
	var num = '';
	for ( var i = 0; i < n; i++) {
		num += Math.round(Math.random()*10)+'';
	}
	return num;
}

/**
 * 显示遮盖层
 * @param msg
 */
utils.showShadow = function() {
	if(typeof($("#shadow").attr("id")) === 'undefined') {
		$("body").append("<div id='shadow'></div>");
	}
	$("#shadow").show();
}

/**
 * 关闭遮盖层
 * @param msg
 */
utils.closeShadow = function() {
	$("#shadow").hide();
}

/**
 * 显示信息
 * @param msg
 */
utils.showMsg = function(msg) {
	if($("#alert-msg").attr("id") == undefined) {
		$("body").append("<div id='alert-msg'>"+msg+"</div>");
	}
	var w = 250; 
	var h = 60;
	$("#alert-msg").html(msg);
	var top = $(document).scrollTop(); 
	var sw = ($(window).width()-w)/2;
	var sh = ($(window).height()-h)/2+top;
	var index = $("#shadow").css("z-index")/1+1/1;
	if(isNaN(index)) {
		index = 9999;
	}
	$("#alert-msg").css({"top":sh+"px","left":sw+"px","width":w+"px","height":h+"px","display":"block","z-index":index});
	$("#alert-msg").fadeOut(3000);
}

/**
 * 加载数据
 * @param msg
 */
utils.waitLoading = function(msg) {
	if($("#wait-msg").attr("id") == undefined) {
		$("body").append("<div id='wait-msg'><div class='msg-body'>"+msg+"</div></div>");
	}
	this.showShadow();
	var w = 250; 
	var h = 60;
	$("#wait-msg .msg-body").html(msg);
	var top = $(document).scrollTop();
	var index = $("#shadow").css("z-index")/1+1/1;
	var sw = ($(window).width()-w)/2;
	var sh = ($(window).height()-h)/2+top;
	$("#wait-msg").css({"top":sh+"px","left":sw+"px","width":w+"px","height":h+"px","display":"block","z-index":index});
}

/**
 * 关闭等待(加载)窗口
 */
utils.closeWaitLoading = function() {
	$("#wait-msg").hide();
	this.closeShadow();
}

/**
 * 下拉框
 * @param id
 * @param datas
 * @param defaultValue
 * @param callback
 */
utils.selectDataItem = function(id,datas,defaultValue,callback) {
	if(!this.isEmpty(datas) && datas.length>0) {
		if(typeof(defaultValue) === 'undefined') {
			defaultValue = '';
		}
		var options = '';
		var selectValue = '';
		for(var i=0;i<datas.length;i++) {
			if(datas[i][0] == defaultValue) {
				options +='<option value="'+datas[i][0]+'" class="cnoj-dyn-opt" selected>'+datas[i][1]+'</option>';
				selectValue = datas[i][0];
			} else {
				options +='<option value="'+datas[i][0]+'" class="cnoj-dyn-opt" >'+datas[i][1]+'</option>';
			}
		}
		if(this.isEmpty(selectValue)) {
			selectValue = datas[0][0];
		}
		$(id).find(".cnoj-dyn-opt").remove();
		$(id).append(options);
		if(typeof(callback) === 'function') {
			callback(selectValue);
		}
	}
}


/**
 * 下拉框
 * @param id
 * @param uri
 * @param defaultValue
 * @param callback
 */
utils.selectItem = function(id,uri,defaultValue,callback) {
	if(!this.isEmpty(uri)) {
		if(typeof(defaultValue) === 'undefined') {
			defaultValue = '';
		}
		$.post(uri,function(data){
			var output = $.parseJSON(data);//$.parseJSON(data.output);
			if(output.result=='1') {
				var datas = output.datas; 
				if(datas.length>0) {
					var options = '';
					var selectValue = '';
					for(var i=0;i<datas.length;i++) {
						if(datas[i][0] == defaultValue) {
							options +='<option value="'+datas[i][0]+'" class="cnoj-dyn-opt" selected>'+datas[i][1]+'</option>';
							selectValue = datas[i][0];
						} else {
							options +='<option value="'+datas[i][0]+'" class="cnoj-dyn-opt" >'+datas[i][1]+'</option>';
						}
					}
					if(utils.isEmpty(selectValue)) {
						selectValue = datas[0][0];
					}
					$(id).find(".cnoj-dyn-opt").remove();
					$(id).append(options);
					if(typeof(callback) === 'function') {
						callback(selectValue);
					}
				}
			} else {
				//showMsg(output.msg);
			}
		});
	}
}

/**
 * 级联下拉框
 * @param id
 * @param cascadeId
 * @param uri
 * @param paramName
 * @param defaultValue
 * @param changeId 
 * @returns {Boolean}
 */
utils.selectCascadeItem = function(id,cascadeId,uri,paramName,defaultValue,changeId) {
	if(!this.isEmpty(uri)) {
		if(typeof(defaultValue) === 'undefined') {
			defaultValue = '';
		}
		if(this.isEmpty(cascadeId)) {
			return false;
		}
		paramName = this.isEmpty(paramName)?"id":paramName;
		var value = $(cascadeId).val();
		if(uri.indexOf("?")>0) 
			uri = uri +"&";
		else 
			uri = uri+"?";
		uri = uri+"paramName="+paramName+"&paramValue=";
		if(!this.isEmpty(value)) {
			this.selectItem(id, uri+value, defaultValue);
		}
		$(cascadeId).change(function(){
			if(!utils.isEmpty(changeId))
				value = $(changeId).val();
			else 
				value = $(this).val();
			utils.selectItem(id, uri+value, defaultValue);
		});
	}
}

/**
 * 检查文件上传路径是否为空
 * @param id
 * @returns {Boolean}
 */
utils.uploadNull = function(id){
	id = "#"+id;
	var path = $(id).val();
	if(path==""||path==null){
		cu.info("请选择上传路径！");
		return false ;
	}else{
		return true;
	}
}

/**
 * 日期格式转换 X年X月X日
 * @param time  时间
 * @param txg 分隔符
 * @param hz 汉字
 * @returns {String}
 */
utils.dateFormat = function(time,txg,hz){
	var arr = new Array();
	var returnTime = "";
	arr = time.split(txg);
	if(arr.length>=3){
		returnTime +=arr[0]+"年";
		if(hz){
			var m = arr[1];
			var d = arr[2];
			if(m.length=2&&(m.charAt(0)=="0"||m.charAt(0)=="〇")){
				returnTime +=m.charAt(1)+"月";
			}else{
				returnTime +=m.charAt(0)+"十"+m.charAt(1)+"月";
			}
			if(d.length=2&&(d.charAt(0)=="0"||d.charAt(0)=="〇")){
				returnTime +=d.charAt(1)+"月";
			}else{
				returnTime +=d.charAt(0)+"十"+d.charAt(1)+"日";
			}
			
		}else{
			returnTime +=arr[1]+"月";
			returnTime +=arr[2]+"日";
		}
		return returnTime;
	}else{
		return "-1";
	}
}

/**
 * 阿拉伯数字转换中文数字 
 * @param str
 * @returns {String}
 */
utils.sumToStr = function(str){
	var sum = ["0","1","2","3","4","5","6","7","8","9"];
	var sumStr = ["〇","一","二","三","四","五","六","七","八","九"];
	var retrunStr = "";
	 for (var i=0;i<str.length;i++){
		  var ch = str.charAt(i);
		  for(var j=0;j<sum.length;j++){
			  if(ch==sum[j])
				  ch = sumStr[j];
		  }
		  retrunStr +=ch; 
	 }
	 return retrunStr;
}

/**
 * 判断是否有滚动条
 * @param tag
 * @returns {Boolean}
 */
utils.isScroll = function(tag) {
	var is = false;
	if(!this.isEmpty(tag)) {
		var $tag = null;
		if(typeof(tag) === 'string')
			$tag = $(tag);
		else 
			$tag = tag;
		var height = $tag.height();
		var tableHeight = $tag.find("table").height();
		if(tableHeight>height) {
			is = true;
		}
	}
	return is;
}

/**
 * 获取浏览器竖向滚动条宽度
 * 首先创建一个用户不可见、无滚动条的DIV，获取DIV宽度后，
 * 再将DIV的Y轴滚动条设置为永远可见，再获取此时的DIV宽度
 * 删除DIV后返回前后宽度的差值
 * @return {Number} 竖向滚动条宽度
 */
utils.getScrollWidth = function() {
	  var noScroll, scroll, oDiv = document.createElement("DIV");
	  oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
	  noScroll = document.body.appendChild(oDiv).clientWidth;
	  oDiv.style.overflowY = "scroll";
	  scroll = oDiv.clientWidth;
	  document.body.removeChild(oDiv);
	  return noScroll-scroll;
}

/**
 * 
 * @param time
 * @param formate <br/>
 * 年---yyyy <br/>
 * 月---MM <br/>
 * 日---dd <br/>
 * 小时---HH <br/>
 * 分钟---mm <br/>
 * 秒---ss
 * @returns {String}
 */
utils.handleTime = function(time,formate) {
	var year = null;
	var month = null;
	var day = null;
	var hours = null;
	var minutes = null;
	var seconds = null;
	if(typeof(time) === 'number') {
		   var date = new Date();
		   date.setTime(time);
		   year = date.getFullYear();
		   month = date.getMonth()+1;
		   month = month<10?'0'+month:month;
		   day = date.getDate();
		   day = day<10?'0'+day:day;
		   hours = date.getHours();
		   hours = hours<10?'0'+hours:hours;
		   minutes = date.getMinutes();
		   minutes = minutes<10?'0'+minutes:minutes;
		   seconds = date.getSeconds();
		   seconds = seconds<10?'0'+seconds:seconds;
	 } else if(typeof(time) === 'string'){
		   var array = time.split(" ");
		   var arrayDate = array[0].split("-");
		   var arrayTime = array[1].split(":");
		   year = arrayDate[0];
		   month = arrayDate[1];
		   day = arrayDate[2];
		   hours = arrayTime[0];
		   minutes = arrayTime[1];
		   seconds = arrayTime[2];
	 } else if(typeof(time) === 'object'){
		  var date = time;
		   year = date.getFullYear();
		   month = date.getMonth()+1;
		   month = month<10?'0'+month:month;
		   day = date.getDate();
		   day = day<10?'0'+day:day;
		   hours = date.getHours();
		   hours = hours<10?'0'+hours:hours;
		   minutes = date.getMinutes();
		   minutes = minutes<10?'0'+minutes:minutes;
		   seconds = date.getSeconds();
		   seconds = seconds<10?'0'+seconds:seconds;
	} else {
		  var date = new Date();
		   year = date.getFullYear();
		   month = date.getMonth()+1;
		   month = month<10?'0'+month:month;
		   day = date.getDate();
		   day = day<10?'0'+day:day;
		   hours = date.getHours();
		   hours = hours<10?'0'+hours:hours;
		   minutes = date.getMinutes();
		   minutes = minutes<10?'0'+minutes:minutes;
		   seconds = date.getSeconds();
		   seconds = seconds<10?'0'+seconds:seconds;
	}
	if(this.isEmpty(formate)) {
		  return year+"年"+month+"月"+day+"日"+hours+"时"+minutes+"分"+seconds+"秒";
	} else {
		  var value = formate;
		  var dateTimeArray = [year,month,day,hours,minutes,seconds];
		  var formaterArray = ['yyyy','MM','dd','HH','mm','ss'];
		  for ( var i = 0; i < dateTimeArray.length; i++) {
			  value = value.replace(formaterArray[i],dateTimeArray[i]);
	       }
	   return value;
	 }
	   
}

/**
 * 处理时间
 */
utils.handleShortTime = function(time) {
	var year = null;
	var month = null;
	var day = null;
	var hours = null;
	var minutes = null;
	var seconds = null;
	if(typeof(time) === 'number') {
	   var date = new Date();
	   date.setTime(time);
	   year = date.getFullYear();
	   month = date.getMonth()+1;
	   month = month<10?'0'+month:month;
	   day = date.getDate();
	   day = day<10?'0'+day:day;
	   hours = date.getHours();
	   hours = hours<10?'0'+hours:hours;
	   minutes = date.getMinutes();
	   minutes = minutes<10?'0'+minutes:minutes;
	   seconds = date.getSeconds();
	   seconds = seconds<10?'0'+seconds:seconds;
	} else if(typeof(time) === 'string'){
		   var array = time.split(" ");
		   var arrayDate = array[0].split("-");
		   var arrayTime = array[1].split(":");
		   year = arrayDate[0];
		   month = arrayDate[1];
		   day = arrayDate[2];
		   hours = arrayTime[0];
		   minutes = arrayTime[1];
		   seconds = arrayTime[2];
	} else if(typeof(time) === 'object'){
		  var date = time;
		   year = date.getFullYear();
		   month = date.getMonth()+1;
		   month = month<10?'0'+month:month;
		   day = date.getDate();
		   day = day<10?'0'+day:day;
		   hours = date.getHours();
		   hours = hours<10?'0'+hours:hours;
		   minutes = date.getMinutes();
		   minutes = minutes<10?'0'+minutes:minutes;
		   seconds = date.getSeconds();
		   seconds = seconds<10?'0'+seconds:seconds;
	} else {
		  var date = new Date();
		   year = date.getFullYear();
		   month = date.getMonth()+1;
		   month = month<10?'0'+month:month;
		   day = date.getDate();
		   day = day<10?'0'+day:day;
		   hours = date.getHours();
		   hours = hours<10?'0'+hours:hours;
		   minutes = date.getMinutes();
		   minutes = minutes<10?'0'+minutes:minutes;
		   seconds = date.getSeconds();
		   seconds = seconds<10?'0'+seconds:seconds;
	}
	   return month+"-"+day+" "+hours+":"+minutes;
}
/**
 * 
 */
String.prototype.endWith = function(str){
	if(str==null||str==""||this.length==0||str.length>this.length)
	  return false;
	if(this.substring(this.length-str.length)==str)
	  return true;
	else
	  return false;
	return true;
}

/**
 * 
 */
String.prototype.startWith = function(str) {
	if(str==null||str==""||this.length==0||str.length>this.length)
	  return false;
	if(this.substr(0,str.length)==str)
	  return true;
	else
	  return false;
	return true;
}

/**
 * 载入URL
 * @param target 载入位置；可以是对象或id或class
 * @param url 载入地址
 * @param isLoadProcess 是否加载
 * @param isCheckLogin 检测是否登录
 */
utils.loadUrl = function(target, url, isLoadProcess, isCheckLogin) {
	if(this.isNotEmpty(target) && this.isNotEmpty(url)) {
		isLoadProcess = this.isEmpty(isLoadProcess)?false:isLoadProcess;
		isCheckLogin = this.isEmpty(isCheckLogin)?false:isCheckLogin;
		
		target = (typeof(target) == 'string')?$(target):target;
		if(isLoadProcess) {
			target.html('<div class="loading"><i class="fa fa-spinner fa-spin fa-lg"></i> 正在加载，请稍候...</div>');
		}
		var isLoad = true;
		if(isCheckLogin) {
			isLoad = false;
			//判断是否登录
		}
		if(isLoad) {
			target.load(url, function() {
				target.find(".loading").remove();
			});
		}
	}
}

/**
 * 载入URL到IFrame
 * @param target 载入位置；可以是对象或id或class
 * @param url 载入地址
 * @param isLoadProcess 是否加载
 * @param isCheckLogin 检测是否登录
 */
utils.loadUrl2IFrame = function(target, url, isLoadProcess, isCheckLogin) {
	if(this.isNotEmpty(target) && this.isNotEmpty(url)) {
		isLoadProcess = this.isEmpty(isLoadProcess)?false:isLoadProcess;
		isCheckLogin = this.isEmpty(isCheckLogin)?false:isCheckLogin;
		
		target = (typeof(target) == 'string')?$(target):target;
		if(isLoadProcess) {
			target.before('<div class="float-loading" style="top:80px;left:30%"><i class="fa fa-spinner fa-spin fa-lg"></i> 正在加载，请稍候...</div>');
		}
		var isLoad = true;
		if(isCheckLogin) {
			isLoad = false;
			//判断是否登录
		}
		if(isLoad) 
			target.attr("src",url);
	}
}

/**
 * iframe高度自适应
 * @param target iframe对象或id或class
 */
utils.iframeAutoListner = function(target) {
	if(this.isNotEmpty(target)) {
		target = (typeof(target) == 'string')?$(target):target;
		var mainHeight = LayoutUtils.mainHeight();
		target.load(function() {
			$(".float-loading").remove();
			var iframeContentHeight = $(this).contents().find("body").height();
			if(mainHeight<iframeContentHeight) {
				$(this).height(iframeContentHeight);
			} else {
				$(this).height(mainHeight);
			}
		});
	}
}
