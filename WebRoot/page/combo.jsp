<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../header.jsp"></jsp:include>
<script type="text/javascript">
   var datas = [["1","测试１"],["2","测试2"],["3","测试3"],["4","测试4"],["5","测试5"],["6","测试6"]];
   
   $(function(){
	   $("#input-select").click(function(){
		   $(this).inputSelect({
			   datas: datas,
			   isShowAll: false
		   }); 
	   });
	   
	   $("#input-select-search").click(function(){
		   $(this).inputSelect({
			   datas: datas,
			   isSearch:true,
			   isShowAll: false
		   }); 
	   });
	   
   });

</script>
   
   <div class="container-fluid">
       <div class="row" style="padding-top: 15px;">
          <div class="col-sm-6">
            <form class="form-horizontal">
	             <div class="form-group has-feedback">
				     <label for="input-select" class="col-sm-2 control-label">下拉框：</label>
				     <div class="col-sm-10">
					     <input type="text" class="form-control" id="input-select" aria-describedby="input-select-icon"/>
					     <span class="fa fa-caret-down form-control-feedback" aria-hidden="true"></span>
		                 <span id="input-select-icon" class="sr-only">图标</span>
	                 </div>
				  </div>
			  </form>
          </div>
          
          <div class="col-sm-6">
            <form class="form-horizontal">
	             <div class="form-group has-feedback">
				     <label for="input-select-search" class="col-sm-2 control-label">下拉框：</label>
				     <div class="col-sm-10">
					     <input type="text" class="form-control" id="input-select-search" aria-describedby="input-select-search-icon"/>
					     <span class="fa fa-caret-down form-control-feedback" aria-hidden="true"></span>
		                 <span id="input-select-search-icon" class="sr-only">图标</span>
	                 </div>
				  </div>
			  </form>
          </div>
       </div>
  </body>
</html>
