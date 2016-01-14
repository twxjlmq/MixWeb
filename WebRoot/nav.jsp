<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<jsp:include page="./header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/js/init-menu.js"></script>
<script type="text/javascript">
$(function(){
	var $iframe = $('#mix-iframe-content');
	utils.iframeAutoListner($iframe);
	$iframe.height(LayoutUtils.mainHeight());
});
</script>
<div class="mix-header">
	 <nav class="navbar navbar-inverse navbar-fixed-top">
	      <div class="container-fluid">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">导航</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">框架Demo</a>
	        </div>
	        <div id="navbar" class="navbar-collapse collapse">
	          <ul class="nav navbar-nav navbar-right">
	            <li><a href="#"><i class="fa fa-lg fa-home"></i> 主页</a></li>
	            <li class="dropdown">
	            <a href="#" id="user-dropdown" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" 
	            data-hover="dropdown" aria-haspopup="true" aria-expanded="false" data-delay="0" data-close-others="true">
	               <i class="fa fa-lg fa-user"></i> 管理员 <span class="caret"></span></a>
	                <ul class="dropdown-menu" id="user-dropdown-menu">
	                    <li class="user-depart">
	                        <a href="javascript:void(0)">
		                    <div class="user-depart-label"><i class="fa fa-users"></i> 所在部门</div>
		                    <div class="user-depart-name">中网信网络信息技术有限公司>>软件一部</div>
		                    </a>
	                    </li>
	                     
	                    <li role="separator" class="divider"></li>
			            <li>
			               <a href="javascript:void(0)" id="change-pwd">
			                 <div><i class="fa fa-lg fa-pencil-square-o"></i> 修改密码</div>
			               </a>
			            </li>
			          </ul>
	            </li>
	             <li>
	             <a href="javascript:void(0)" id="msg-dropdown" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" 
	            data-hover="dropdown" aria-haspopup="true" aria-expanded="false" data-delay="0" data-close-others="true">
	            <i class="fa fa-lg fa-envelope"></i> <span class="badge"> 10 </span> <span class="caret"></span></a>
	               <ul class="dropdown-menu" id="msg-dropdown-menu">
	                    <li>
	                        <a href="javascript:void(0)">
			                    <div class="media">
								  <div class="media-left media-middle">
								    <div class="icon-circle danger-bg"><i class="fa fa-briefcase"></i> </div>
								  </div>
								  <div class="media-body">
								    <h4 class="media-heading">代表公文</h4>
								    <p>消息内容消息内容，消息内容消息内容。</p>
								  </div>
								</div>
							</a>
	                    </li>
	                    <li role="separator" class="divider"></li>
	                    <li>
	                        <a href="javascript:void(0)">
			                    <div class="media">
								  <div class="media-left media-middle">
								    <div class="icon-circle bule-bg"><i class="fa fa-envelope"></i> </div>
								  </div>
								  <div class="media-body">
								    <h4 class="media-heading">消息标题1</h4>
								    <p>消息内容消息内容，消息内容消息内容。</p>
								  </div>
								</div>
							</a>
	                    </li>
	                    <li role="separator" class="divider"></li>
	                    <li>
		                    <a href="javascript:void(0)">
			                    <div class="media">
								  <div class="media-left media-middle">
								    <div class="icon-circle warning-bg"><i class="fa fa-bullhorn"></i> </div>
								  </div>
								  <div class="media-body">
								    <h4 class="media-heading">消息标题2</h4>
								    <p>消息内容消息内容，消息内容消息内容。</p>
								  </div>
								</div>
							</a>
	                    </li>
	               </ul>
	             </li>
			     <li><a href="#"><i class="fa fa-lg fa-power-off"></i> 安全退出</a></li>
			     <li><a href="#"><i class="fa fa-lg fa-question-circle"></i> 帮助</a></li>
	          </ul>
	         
	          <form class="navbar-form navbar-right"> 
	            <input type="text" class="form-control" placeholder="搜索...">
	          </form>
	           
	        </div>
	      </div>
	 </nav>
  </div> <!-- end mix-header -->
  <div class="mix-body">
     <div class="container-fluid">
      <div class="row">
         <div class="menu-arrow-show" title="显示菜单">
            <div class="menu-arrow-icon">
              <i class="fa fa-angle-double-right fa-lg"></i> 
            </div>
         </div>
         <div class="col-sm-4 col-md-3 col-lg-2 mix-nav-menu">
           <div class="sidebar">
              <div class="mix-nav-menu-title"><i class="fa fa-th-large fa-lg"></i> 系统菜单 
                 <div class="menu-arrow" title="收起菜单">
                 	<div class="menu-arrow-icon">
                 	<i class="fa fa-angle-double-left fa-lg"></i> 
                 	</div>
                 </div>
              </div>
	          <div class="sidebar-nav">
	             <ul id="mix-menu-nav" class="metismenu"></ul>
	          </div>
          </div>
         </div><!-- end col-sm-* -->
         <div id="mix-main-content" class="col-sm-8 col-md-9 col-lg-10 main">
              <iframe id="mix-iframe-content" name="mixIframeContent" width="100%" frameborder="no" border="0" scrolling="no" src="./welcome.jsp"></iframe>
         </div><!-- end main -->
      </div>
     </div><!-- end container-fluid -->
  </div><!-- end mix-body -->
  <script type="text/javascript">
      $("#mix-menu-nav").initMenu({
    	  datas:[{"menu":{"id":40,"name":"系统插件","url":"","icon":"fa fa-th"},
    		  "childs":[
    		            {"menu":{"id":43,"name":"jqGrid表格","url":"","icon":"fa fa-table","openModel":""},
    		            	"childs":[{"menu":{"id":43001,"name":"表格列表","url":"./page/jqGrid/table.jsp","icon":"fa fa-th-list","openModel":""},"childs":null,"isChild":0},
    		            	          {"menu":{"id":43002,"name":"表格树","url":"./page/jqGrid/tableTree.jsp","icon":"fa fa-tree","openModel":""},"childs":null,"isChild":0},
    		            	          ],"isChild":1},
    		            {"menu":{"id":55,"name":"zTree树","url":"","icon":"fa fa-sitemap","openModel":""},
    		            	"childs":[{"menu":{"id":55001,"name":"面板树","url":"./page/ztree/panelTree.jsp","icon":"fa fa-th-list","openModel":""},"childs":null,"isChild":0},
    		            	          {"menu":{"id":55002,"name":"输入框树","url":"./page/ztree/inputTree.jsp","icon":"fa fa-th-list","openModel":""},"childs":null,"isChild":0}],"isChild":1},
    		            {"menu":{"id":57,"name":"日期控件","url":"./page/datetimepicker.jsp","icon":"fa fa-calendar","openModel":""},"childs":null,"isChild":0},
    		            {"menu":{"id":59,"name":"Combo控件","url":"./page/combo.jsp","icon":"fa fa-list-alt","openModel":""},"childs":null,"isChild":0}],
    		  "isChild":1},
    		   {"menu":{"id":63,"name":"Bootstrap","url":"","icon":"fa fa-bold","openModel":""},
    			  "childs":[{"menu":{"id":63001,"name":"弹出窗口","url":"./page/bootstrap/window.jsp","icon":"fa fa-windows","openModel":""},"childs":null,"isChild":0},
    			            {"menu":{"id":63002,"name":"弹出对话框","url":"./page/bootstrap/dialog.jsp","icon":"fa fa-th-list","openModel":""},"childs":null,"isChild":0},
    			            {"menu":{"id":63003,"name":"bootstrap官网","url":"http://www.bootcss.com/","icon":"fa fa-link","openModel":"__blank"},"childs":null,"isChild":0}
    			            ],"isChild":1},
    		   {"menu":{"id":64,"name":"jQuery-UI","url":"http://jqueryui.com/","icon":"fa fa-list-ul","openModel":"__blank"},"childs":null,"isChild":0},
    		   {"menu":{"id":64,"name":"Font Awesome","url":"http://fortawesome.github.io/Font-Awesome/icons/","icon":"fa fa-list-ul","openModel":"__blank"},"childs":null,"isChild":0}
    		   ]
      });
      $(".dropdown-toggle").dropdownHover();
  </script>