<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
   $(function(){
	   $("#jqGrid").jqGridUtils({
			"url":"page/jqGrid/datas.json",
			"colModel":[
				{
					"name":"category_id",
					"index":"accounts.account_id",
					"sorttype":"int",
					"key":true,
					"hidden":true,
					"width":50
				},{
					"name":"name",
					"index":"name",
					"sorttype":"string",
					"label":"Name",
					editable: true,
					"width":170
				},{
					"name":"price",
					"index":"price",
					"sorttype":"numeric",
					"label":"Price",
					"width":90,
					editable: true,
					"align":"right"
				},{
					"name":"qty_onhand",
					"index":"qty_onhand",
					"sorttype":"int",
					"label":"Qty",
					"width":90,
					editable: true,
					"align":"right"
				},{
					"name":"color",
					"index":"color",
					"sorttype":"string",
					"label":"Color",
					editable: true,
					"width":100
				},{
					"name":"lft",
					"hidden":true
				},{
					"name":"rgt",
					"hidden":true
				},{
					"name":"level",
					"hidden":true
				},{
					"name":"uiicon",
					"hidden":true
				}
			],
			caption: "树形列表",
			"hoverrows":false,
			"gridview":true,
			"sortname":"lft",
			"loadonce":true,
			"rowNum":1000,
			tableStyle:"table",
			"scrollrows":true,
			// enable tree grid
			"treeGrid":true,
			// which column is expandable
			"ExpandColumn":"name",
			// expand a node when click on the node name 
			"ExpandColClick" : true,
			// datatype
			//"treedatatype":"json",
			// the model used
			"treeGridModel":"nested",
			// configuration of the data comming from server
			"treeReader":{
				"left_field":"lft",
				"right_field":"rgt",
				"level_field":"level",
				"leaf_field":"isLeaf",
				"expanded_field":"expanded",
				"loaded":"loaded",
				"icon_field":"icon"
			},
			"sortorder":"asc",
			"datatype":"json",
			"pager":"#jqGridPager"
		});
	   $("#jqGrid").jqGrid('navGrid','#jqGridPager',
			   {add:true,edit:true, del:true,view:true},
			   {edittext:'修改'},
			   {addtext:'添加'});
   });

</script>
    <table id="jqGrid"></table>
    <div id="jqGridPager"></div>
  </body>
</html>
