var SelectViewCont = function(view, model, app){
	view.searchBarButton.click(function(){
		view.update();
	})
	
	this.addListner =(dishButton)=>{
		dishButton.click(function(){
			var currentDishID = $(this).attr("id");
			model.setDishID(currentDishID);
			app.showDetailPage();
		});  
	}
}



