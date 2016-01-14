<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
var zNodes =[
         	{ name:"父节点1 - 展开", open:true,
         		children: [
         			{ name:"父节点11 - 折叠",
         				children: [
         					{ name:"叶子节点111"},
         					{ name:"叶子节点112"},
         					{ name:"叶子节点113"},
         					{ name:"叶子节点114"}
         				]},
         			{ name:"父节点12 - 折叠",
         				children: [
         					{ name:"叶子节点121"},
         					{ name:"叶子节点122"},
         					{ name:"叶子节点123"},
         					{ name:"叶子节点124"}
         				]},
         			{ name:"父节点13 - 没有子节点", isParent:true}
         		]},
         	{ name:"父节点2 - 折叠",
         		children: [
         			{ name:"父节点21 - 展开", open:true,
         				children: [
         					{ name:"叶子节点211"},
         					{ name:"叶子节点212"},
         					{ name:"叶子节点213"},
         					{ name:"叶子节点214"}
         				]},
         			{ name:"父节点22 - 折叠",
         				children: [
         					{ name:"叶子节点221"},
         					{ name:"叶子节点222"},
         					{ name:"叶子节点223"},
         					{ name:"叶子节点224"}
         				]},
         			{ name:"父节点23 - 折叠",
         				children: [
         					{ name:"叶子节点231"},
         					{ name:"叶子节点232"},
         					{ name:"叶子节点233"},
         					{ name:"叶子节点234"}
         				]}
         		]},
         	{ name:"父节点3 - 没有子节点", isParent:true}
         ];
   $(function(){
	  $("#select-tree").click(function(){
		  $(this).zTreeUtil({
			  jsonData:zNodes,
			  isInput:true,
			  isSearch:false
		  });
	  });
	  $("#select-tree-search").click(function(){
		  $(this).zTreeUtil({
			  jsonData:zNodes,
			  isInput:true,
			  isSearch:true
		  });
	  });
	  
	  $("#select-tree-all").click(function(){
		  $(this).zTreeUtil({
			  jsonData:zNodes,
			  isInput:true,
			  isSearch:true,
			  isShowNone : true,
			  callback : function(objTree) {
				  alert("树加载完成...");
			  }
		  });
	  });
   });
</script>
   <div class="container-fluid">
       <div class="row" style="padding-top: 15px;">
	      <div class="col-sm-6">
	         <div class="panel panel-default">
				  <div class="panel-heading">输入框树</div>
					  <div class="panel-body" style="height: 300px;overflow: auto;">
					     <form class="form-horizontal">
						  <div class="form-group">
						    <div class="col-sm-12">
						      <input type="text" name="selectTree" class="form-control" id="select-tree" />
						    </div>
						  </div>
						  </form>
					  </div>
			   </div>
	        </div>
	        
	        <div class="col-sm-6">
	         <div class="panel panel-default">
				  <div class="panel-heading">输入框树（搜索）</div>
					  <div class="panel-body" style="height: 300px;overflow: auto;">
					     <form class="form-horizontal">
						  <div class="form-group">
						    <div class="col-sm-12">
						      <input type="text" name="selectTreeSearch" class="form-control" id="select-tree-search" />
						    </div>
						  </div>
						  </form>
					  </div>
			   </div>
	        </div>
	   </div>
	   
	   <div class="row" style="padding-top: 10px;">
	       <div class="col-sm-6">
	         <div class="panel panel-default">
				  <div class="panel-heading">输入框树（完整版）</div>
					  <div class="panel-body" style="height: 300px;overflow: auto;">
					     <form class="form-horizontal">
						  <div class="form-group">
						    <div class="col-sm-12">
						      <input type="text" name="selectTreeAll" class="form-control" id="select-tree-all" />
						    </div>
						  </div>
						  </form>
					  </div>
			   </div>
	        </div>
	   </div>
   </div>
  </body>
</html>
