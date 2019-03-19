$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//View
	var homeView = new HomeView($("#homeView"), model);
	var selectView = new SelectView($("#selectView"), model, this);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var detailView = new DetailView($("#detailView"), model);
	var overview = new Overview($("#overview"), model);
	var printView = new PrintView($("#printView"), model);

	//Controller
	var homeViewCont = new HomeViewCont(homeView, model, this);
	var sidebarViewCont = new SidebarViewCont(sidebarView, model, this);
	var detailViewCont = new DetailViewCont(detailView, model, this);
	var overviewViewCont = new OverviewViewCont(overview, model, this);
	var printViewCont = new PrintViewCont(printView, model, this);
	

	$("#homeView").show();
	$("#sidebarView").hide();
	$("#selectView").hide();
	$("#detailView").hide();
	$("#overview").hide();
	$("#printView").hide();
	
	this.showSelectDishPage =  function(){
		$("#homeView").hide();
		$("#sidebarView").show();
		$("#selectView").show();
		$("#detailView").hide();
		$("#overview").hide();
		$("#printView").hide();
	}
		
	this.showDetailPage =  function(dishId){
		$("#homeView").hide();
		$("#sidebarView").show();
		$("#selectView").hide();
		$("#detailView").show();
		$("#overview").hide();
		$("#printView").hide();
	}
	
	this.showOverviewPage =  function(){
		$("#homeView").hide();
		$("#sidebarView").hide();
		$("#selectView").hide();
		$("#detailView").hide();
		$("#overview").show();
		$("#printView").hide();
	}
	
	this.showPrintPage = function(){
		$("#homeView").hide();
		$("#sidebarView").hide();
		$("#selectView").hide();
		$("#detailView").hide();
		$("#overview").hide();
		$("#printView").show();
	}
});
