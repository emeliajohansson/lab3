var OverviewViewCont = function(view, model, app){
	view.backEditDinnerButton.click(function(){
    app.showSelectDishPage();
  })
  
  	view.printRecipeButton.click(function(){
    app.showPrintPage();
  })
}