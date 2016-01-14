<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <base href="<%=basePath%>">
    <title>Demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<!-- jQuery -->
	<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>

	<!-- Font Awesome -->
	<link href="${pageContext.request.contextPath}/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	
	<!-- Bootstrap -->
	<link href="${pageContext.request.contextPath}/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/plugins/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/plugins/bootstrap/js/bootstrap.min.js"></script>  
	<script src="${pageContext.request.contextPath}/plugins/bootstrap/js/bootstrap-hover-dropdown.min.js"></script>
	
	<!-- Bootstrap dialog -->
	<link href="${pageContext.request.contextPath}/css/bootstrap-dialog.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/js/bootstrap-dialog.js"></script>
	<script src="${pageContext.request.contextPath}/js/utils.js"></script>
	<script src="${pageContext.request.contextPath}/js/bootstrap-dialog-util.js"></script>
	
	<!-- Bootstrap Datetimepicker 日期插件-->
	<link href="${pageContext.request.contextPath}/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
	<script src="${pageContext.request.contextPath}/plugins/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script>
	
	<!-- jQuery UI -->
	<link href="${pageContext.request.contextPath}/plugins/jquery-ui/jquery-ui.min.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/plugins/jquery-ui/jquery-ui.min.js"></script>
	
	<!-- zTree -->
	<link href="${pageContext.request.contextPath}/plugins/zTree/css/zTreeStyle/zTreeStyle.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/plugins/zTree/js/jquery.ztree.all-3.5.min.js"></script>
	<script src="${pageContext.request.contextPath}/plugins/zTree/js/jquery.ztree.exhide-3.5.min.js"></script>
	
	<!-- jqGrid 表格-->
	<link href="${pageContext.request.contextPath}/plugins/jqGrid/css/ui.jqgrid-bootstrap.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/plugins/jqGrid/js/jquery.jqGrid.bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/plugins/jqGrid/i18n/grid.locale-cn.js"></script>
	
    <!-- metisMenu 菜单插件 -->
    <link href="${pageContext.request.contextPath}/plugins/metisMenu/css/metisMenu.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/plugins/metisMenu/css/metisMenu-theme.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/plugins/metisMenu/js/metisMenu.min.js"></script>
    
    <!-- 自定义样式 及 JS-->
	<link href="${pageContext.request.contextPath}/css/ztree-rewrite.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/css/mix-layout.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/css/mix-custom-plugin.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/css/mix-nav.css" rel="stylesheet">
	<script src="${pageContext.request.contextPath}/js/check-form.js"></script>
	<script src="${pageContext.request.contextPath}/js/auto-complete.js"></script>
	<script src="${pageContext.request.contextPath}/js/ztree-util.js"></script>
	<script src="${pageContext.request.contextPath}/js/jqGrid-utils.js"></script>
	<script src="${pageContext.request.contextPath}/js/layout-utils.js"></script>
	<script src="${pageContext.request.contextPath}/js/input-select.js"></script>
	
	<!--[if lt IE 9]>
    <script type="text/javascript" src="${pageContext.request.contextPath}/plugins/bootstrap/js/html5shiv.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/plugins/bootstrap/js/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>