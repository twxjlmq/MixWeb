<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="../header.jsp"></jsp:include>
<script type="text/javascript">

$(function(){
	$("#mix-date").datetimepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		language: 'zh-CN',
		minView: 2
	});
	$("#mix-time").datetimepicker({
		format: 'hh:ii:ss',
		autoclose: true,
		language: 'zh-CN',
		startView: 1,
		maxView: 1
	});
	
	$("#mix-datetime").datetimepicker({
		format: 'yyyy-mm-dd hh:ii:ss',
		autoclose: true,
		language: 'zh-CN'
	});
});

</script>
  
  <div class="container-fluid">
       <div class="row" style="padding-top: 15px;">
          <div class="col-sm-6">
            <form class="form-horizontal">
	             <div class="form-group has-feedback">
				     <label for="mix-date" class="col-sm-2 control-label">日期：</label>
				     <div class="col-sm-10">
					     <input type="text" class="form-control" id="mix-date" aria-describedby="input-mix-date"/>
					     <span class="fa fa-calendar form-control-feedback" aria-hidden="true"></span>
		                 <span id="input-mix-date" class="sr-only">(success)</span>
	                 </div>
				  </div>
			  </form>
          </div>
          
          <div class="col-sm-6">
            <form class="form-horizontal">
	             <div class="form-group has-feedback">
				     <label for="mix-time" class="col-sm-2 control-label">时间：</label>
				     <div class="col-sm-10">
					     <input type="text" class="form-control" id="mix-time" aria-describedby="input-mix-time"/>
					     <span class="fa fa-calendar form-control-feedback" aria-hidden="true"></span>
		                 <span id="input-mix-time" class="sr-only">(success)</span>
	                 </div>
				  </div>
			  </form>
          </div>
       </div>
       
       <div class="row" style="padding-top: 15px;">
         <div class="col-sm-6">
            <form class="form-horizontal">
	             <div class="form-group has-feedback">
				     <label for="mix-datetime" class="col-sm-2 control-label">日期时间：</label>
				     <div class="col-sm-10">
					     <input type="text" class="form-control" id="mix-datetime" aria-describedby="input-mix-datetime"/>
					     <span class="fa fa-calendar form-control-feedback" aria-hidden="true"></span>
		                 <span id="input-mix-datetime" class="sr-only">(success)</span>
	                 </div>
				  </div>
			  </form>
          </div>
       </div>
  </div>
  </body>
</html>
