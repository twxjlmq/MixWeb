<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
var setting = {};

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
	$.fn.zTree.init($("#panel-tree"), setting, zNodes);
	$.fn.zTree.init($("#panel-tree-checkbox"), {
		check:{
			enable: true,
			chkStyle: "checkbox"
		}
	}, zNodes);
	
	$.fn.zTree.init($("#panel-tree-click"), {
		check:{
			enable: true,
			chkStyle: "checkbox"
		},
		callback: {
			onClick: function(event, treeId, treeNode) {
				alert(treeNode.name);
			},
			onCheck : function(event, treeId, treeNode) {
				if(treeNode.checked) {
					alert(treeNode.name);
				}
			}
		}
	}, zNodes);
	
	$.fn.zTree.init($("#panel-tree-search"), {
		check:{
			enable: true,
			chkStyle: "checkbox"
		}
	}, zNodes);
	$(".search-btn").click(function(){
		searchNode($(".search-key").val());
	});
});

/**
 * 搜索节点
 */
function searchNode(value) {
	var zTree = $.fn.zTree.getZTreeObj("panel-tree-search");
	var allNodes = zTree.getNodes();
	var allNodes = zTree.transformToArray(allNodes);
	for(var i=0;i<allNodes.length;i++) {
		allNodes[i].highlight = false;
	}
	if(!utils.isEmpty(value)) {
		var nodes = zTree.getNodesByParamFuzzy('name',value);
		zTree.hideNodes(allNodes);
		if(nodes.length>0) {
			var nodeArray = new Array();
			for(var i=0;i<nodes.length;i++) {
				nodes[i].highlight = true;
				nodeArray.push(nodes[i]);
			}
			while(nodeArray.length>0) {
				var node = nodeArray.pop();
				zTree.showNode(node);
				if(node.highlight) {
					zTree.updateNode(node);
				}
				var parentNode = node.getParentNode();
				if(null != parentNode) {
					var isPush = true;
					for ( var i = 0; i < nodeArray.length; i++) {
						if(nodeArray[i].id == parentNode.id) {
							isPush = false;
							break;
						}
					}
					if(isPush) {
						nodeArray.push(parentNode);
					}
				}
			}
			nodeArray = null;
	   } else {
		   utils.showMsg("没有搜索到相关数据！");
	   }
	} else {
		for(var i=0;i<allNodes.length;i++) {
			zTree.showNode(allNodes[i]);
			zTree.updateNode(allNodes[i]);
		}
	}
}
</script>
   <div class="container-fluid">
	   <div class="row" style="padding-top: 15px;">
	      <div class="col-sm-6">
			   <div class="panel panel-default">
				  <div class="panel-heading">面板树</div>
					  <div class="panel-body" style="height: 250px;overflow: auto;">
					    <ul id="panel-tree" class="ztree"></ul>
					  </div>
			   </div>
		  </div>
		  <div class="col-sm-6">
			   <div class="panel panel-default">
				  <div class="panel-heading">面板树（复选框）</div>
					  <div class="panel-body" style="height: 250px;overflow: auto;">
					    <ul id="panel-tree-checkbox" class="ztree"></ul>
					  </div>
			   </div>
		  </div>
		</div><!-- end row -->
		<div class="row" style="padding-top: 15px;">
		    <div class="col-sm-6">
			   <div class="panel panel-default">
				  <div class="panel-heading">面板树（单击事件或选中）</div>
					  <div class="panel-body" style="height: 250px;overflow: auto;">
					    <ul id="panel-tree-click" class="ztree"></ul>
					  </div>
			   </div>
		    </div>
		    
		    <div class="col-sm-6">
			   <div class="panel panel-default">
				  <div class="panel-heading">面板树搜索</div>
					  <div class="panel-body" style="height: 250px;overflow: auto;">
					    <div class="input-group input-group-sm">
						   <input type="text" class="form-control search-key" placeholder="请输入节点名称..">
						    <span class="input-group-btn">
						      <button class="btn btn-default search-btn" type="button">搜索</button>
						    </span>
						  </div><!-- /input-group -->
					    <ul id="panel-tree-search" class="ztree"></ul>
					  </div>
			   </div>
		    </div>
		</div>
	</div>
  </body>
</html>
