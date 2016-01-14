<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../../header.jsp"></jsp:include>
<script type="text/javascript">
   $(function(){
	   $("#jqGrid").jqGridUtils({
           colModel: [{label: '标题',name: 'Title',editable: true,width: 150,formatter: formatTitle},
               {label: '链接',name: 'Link',editable: true,width: 80,formatter: formatLink},
               {label: '查看数量',name: 'ViewCount',editable: true,width: 35,sorttype:'integer',formatter: 'number',align: 'right'},
               {label: '提问数量',name: 'AnswerCount',editable: true,width: 25}],
           viewrecords: true, // show the current page, data rang and total records on the toolbar
           datatype: 'local',
           pager: "#jqGridPager",
           rownumbers: true, // show row numbers
           rowNum:15,
           /*height:'auto',*/
           multiselect: true,
		   caption: "表格列表",
		   theme:'panel-primary',
		   tableTitleIcon:'fa-th',
       });
	   $("#jqGrid").jqGrid('bindKeys');
	   $("#jqGrid").jqGrid('navGrid','#jqGridPager',
			   {add:true,addStyle:"btn-primary",edit:true, del:true,view:false,search:false});
	   $("#jqGrid").jqGrid('navButtonAdd','#jqGridPager',{
		   caption:'自定义按钮',
		   onClickButton: function(){
			   alert("111");
		   }
		   
	   });
       fetchGridData();

       function fetchGridData() {
           var gridArrayData = [];
			// show loading message
			$("#jqGrid")[0].grid.beginReq();
			for (var i = 0; i < 50; i++) {
                gridArrayData.push({
                    Title: '标题'+(i+1),
                    Link: '链接'+(i+1),
                    CreationDate: '2016-01-07',
                    ViewCount: parseInt(Math.random()*1000),
                    AnswerCount: parseInt(Math.random()*1000)
                });                            
            }
			// set the new data
			$("#jqGrid").jqGrid('setGridParam', { data: gridArrayData});
			// hide the show message
			$("#jqGrid")[0].grid.endReq();
			// refresh the grid
			$("#jqGrid").trigger('reloadGrid');
       }

       function formatTitle(cellValue, options, rowObject) {
           return cellValue.substring(0, 50) + "...";
       };

       function formatLink(cellValue, options, rowObject) {
           return "<a href='" + cellValue + "'>" + cellValue.substring(0, 25) + "..." + "</a>";
       };
   });

</script>
    <table id="jqGrid"></table>
    <div id="jqGridPager"></div>
  </body>
</html>
