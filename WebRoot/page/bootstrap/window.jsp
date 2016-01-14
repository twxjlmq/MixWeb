<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
$(function(){
	$("#df-win").click(function(){
		BootstrapDialogUtil.loadUriDialog("Bootstrap简介","./page/bootstrap/msgContent.jsp","fa fa-th-list");
	});
	$("#df-win-w-set").click(function(){
		var w = $(window).width() - 30;
		BootstrapDialogUtil.loadUriDialog("Bootstrap简介","./page/bootstrap/msgContent.jsp","fa fa-th-list",w);
	});
	
	$("#df-win-footer").click(function(){
		var w = $(window).width() - 30;
		BootstrapDialogUtil.loadUriDialog("Bootstrap简介","./page/bootstrap/msgContentLimitH.jsp","fa fa-th-list",w,null,true,function(dialog){
			var $modelFooter = dialog.getModalFooter();
			var $footerButtons = $modelFooter.find(".bootstrap-dialog-footer-buttons");
			$footerButtons.append("<button type='button' class='btn btn-primary'>关闭窗口</button>");
			$footerButtons.find(".btn").click(function() {
				dialog.close();
			});
		});
	});
});
</script>
<div class="container-fluid" style="margin-top: 20px;">
    <div class="row"> 
     <div class="col-sm-4">
        <button　type="button" id="df-win" class="btn btn-default">默认窗口(默认宽度)</button>
    </div>
    <div class="col-sm-4">
        <button　type="button" id="df-win-w-set" class="btn btn-default">窗口(设置宽度)</button>
    </div>
    <div class="col-sm-4">
        <button　type="button" id="df-win-footer" class="btn btn-default">窗口</button>
    </div>
   </div>
</div>