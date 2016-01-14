/**
 * @author lmq
 * 重新封装bootstrap弹出窗口
 * @returns
 */
var BootstrapDialogUtil = function() {
	
}

/**
 * 弹出一个uri窗口
 * @param title
 * @param uri
 * @param icon
 * @param popWidth
 * @param bgColor
 * @param isFooter
 * @param callback 页面加载成功后执行回调函数
 */
BootstrapDialogUtil.loadUriDialog = function(title,uri,icon,popWidth,bgColor,isFooter,callback) {
	if(isNaN(popWidth) || typeof(popWidth) === 'undefined' || popWidth == null) {
		popWidth = 600;
	}
	if(typeof(isFooter) === 'undefined') {
		isFooter = false;
	}
	$.ajax({
		 url: uri,global: false,type: "get",dataType: "html",async:false,
	     success: function(msg){
	    	 if(typeof(callback) !== 'function') {
	    		 callback = null;
		     }
	    	 BootstrapDialog.show({
	 			title:title,icon:icon,draggable: true,width:popWidth,backgroundColor:bgColor,
	 			message: function(dialog) {
	 				var html = dialog.getModalFooter();
	 				if(!isFooter)
	 				    $(html).find(".bootstrap-dialog-footer").parent().addClass("not-modal-footer");
	 				else 
	 					$(html).find(".bootstrap-dialog-footer").parent().removeClass("not-modal-footer");
	 				return msg;
	 			},
	 			callback:callback
	 		});
	       
	     }
	 });
}

/**
 * 弹出一个DIV对话框
 * @param title
 * @param id
 * @param popWidth
 * @param bgColor
 * @param isFooter
 */
BootstrapDialogUtil.dialog = function(title,id,popWidth,bgColor,isFooter) {
	if(isNaN(popWidth) || typeof(popWidth) === 'undefined' || popWidth == null) {
		popWidth = 600;
	}
	if(typeof(isFooter) === 'undefined') {
		isFooter = false;
	}
	 BootstrapDialog.show({
	 	title:title,draggable: true,width:popWidth,backgroundColor:bgColor,
	 	message: function(dialog) {
	 		var html = dialog.getModalFooter();
	 		if(!isFooter)
	 			$(html).find(".bootstrap-dialog-footer").parent().addClass("not-modal-footer");
	 		else 
	 			$(html).find(".bootstrap-dialog-footer").parent().removeClass("not-modal-footer");
	 		return $(id).html();
	 	}
	 });
}

/**
 * 弹出指定内容的窗口
 * @param title
 * @param contents
 * @param popWidth
 * @param bgColor
 * @param isFooter
 * @param callback
 */
BootstrapDialogUtil.dialogContent = function(title,contents,popWidth,bgColor,isFooter,callback) {
	if(isNaN(popWidth) || typeof(popWidth) === 'undefined' || popWidth == null) {
		popWidth = 600;
	}
	if(typeof(isFooter) === 'undefined') {
		isFooter = false;
	}
	 BootstrapDialog.show({
	 	title:title,draggable: true,width:popWidth,backgroundColor:bgColor,
	 	message: function(dialog) {
	 		var html = dialog.getModalFooter();
	 		if(!isFooter)
	 			$(html).find(".bootstrap-dialog-footer").parent().addClass("not-modal-footer");
	 		else 
	 			$(html).find(".bootstrap-dialog-footer").parent().removeClass("not-modal-footer");
	 		return contents;
	 	}
	 });
	 if(typeof(callback) !== 'undefined' && null != callback && typeof(callback) === 'function') {
  	   callback();
     }
}

/**
 * 确认对话框
 * @param title
 * @param msg
 * @param callback
 */
BootstrapDialogUtil.confirmDialog = function(title,msg,callback) {
	title = utils.isEmpty(title)?"提示":title;
	BootstrapDialog.show({
		title:title,message:msg,
		buttons: [{
            label: '确定',cssClass: 'btn-primary btn-sm',icon:'glyphicon glyphicon-ok-sign',
            action: function(dialog) {
            	if(typeof(callback) != 'undefined' && 
            					callback != null && 
            					typeof(callback) == 'function') {
            				callback();
            	}
            	dialog.close();
            }
        }, {
            label: '取消',cssClass: 'btn-warning btn-sm',icon:'glyphicon glyphicon-remove-sign',
            action: function(dialog) {
                dialog.close();
            }
        }]
   });
}

/**
 * 删除对话框
 * @param title
 * @param name
 * @param uri
 * @param ids
 * @param callback
 */
BootstrapDialogUtil.delDialog = function(title,name,uri,ids,callback) {
	title = utils.isEmpty(title)?"提示":title;
	BootstrapDialog.show({
		title:title,message:"确定要删除<strong>“"+name+"”</strong>吗？",
		buttons: [{
            label: '确定',cssClass: 'btn-primary btn-sm',icon:'glyphicon glyphicon-ok-sign',
            action: function(dialog) {
            	$.post(uri,{id:ids},
            	    function(data){
            		if(data.result=='1') {
            			if(typeof(callback) != 'undefined' && 
            					callback != null && 
            					typeof(callback) == 'function') {
            				callback();
            			}
            		} else {
            			BootstrapDialog.show({title:"提示",message:data.msg,type:BootstrapDialog.TYPE_DANGER});
            		}
            		dialog.close();
            	});
            }
        }, {
            label: '取消',cssClass: 'btn-warning btn-sm',icon:'glyphicon glyphicon-remove-sign',
            action: function(dialog) {
                dialog.close();
            }
        }]
   });
}

/**
 * 提示信息
 * @param title 标题
 * @param msg　提示内容
 */
BootstrapDialogUtil.infoAlert = function(title,msg) {
	title = utils.isEmpty(title)?"提示":title;
	BootstrapDialog.show({title:title,message:msg,type:BootstrapDialog.TYPE_PRIMARY,
		buttons: [{
			label: '确定',cssClass: 'btn-primary btn-sm',icon:'glyphicon glyphicon-ok-sign',
	        action: function(dialogItself){
	            dialogItself.close();
	        }
	    }]
	});
}

/**
 * 提示信息
 * @param title 标题
 * @param msg　提示内容
 */
BootstrapDialogUtil.warningAlert = function(title,msg) {
	title = utils.isEmpty(title)?"提示":title;
	BootstrapDialog.show({title:title,message:msg,type:BootstrapDialog.TYPE_DANGER,
		buttons: [{
			label: '确定',cssClass: 'btn-primary btn-sm',icon:'glyphicon glyphicon-ok-sign',
	        action: function(dialogItself){
	            dialogItself.close();
	        }
	    }]	
	});
}

/**
 * 关闭弹出窗口
 */
BootstrapDialogUtil.close = function() {
	BootstrapDialog.closeAll();
}