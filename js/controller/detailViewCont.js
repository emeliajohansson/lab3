var DetailViewCont = function(view, model, app){
	view.addToMenuButton.click(function(){
		var currentDishID = model.getCurrentDishID();
		model.addDishToMenu(currentDishID);
		var menu = model.getFullMenu()
	});
	
	view.backEditDinnerButton.click(function(){
    app.showSelectDishPage();
	
  });
}