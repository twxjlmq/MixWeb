<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
$(function(){
	$("#df-dialog").click(function(){
		BootstrapDialogUtil.infoAlert("提示","欢迎使用Bootstrap对话框！");
	});
	$("#df-dialog-warning").click(function(){
		BootstrapDialogUtil.warningAlert("提示","欢迎使用Bootstrap对话框！");
	});
	
	$("#df-dialog-ok").click(function(){
		BootstrapDialogUtil.confirmDialog("确认对话框","欢迎使用Bootstrap对话框！",function(){
			alert("OK");
		});
	});
});
</script>
<div class="container-fluid" style="margin-top: 20px;">
    <div class="row"> 
     <div class="col-sm-4">
        <button　type="button" id="df-dialog" class="btn btn-default">提示对话框</button>
    </div>
    <div class="col-sm-4">
        <button　type="button" id="df-dialog-warning" class="btn btn-danger">告警对话框</button>
    </div>
    <div class="col-sm-4">
        <button　type="button" id="df-dialog-ok" class="btn btn-default">确认对话框</button>
    </div>
   </div>
</div>