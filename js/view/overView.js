var Overview = function (container, model) {

	var numOfGuests = container.find("#numOfGuests");
	var menu = container.find("#menu");
	var totalMenuPrice = container.find("#totalPrice")
	
	var totalPrice = model.getTotalMenuPrice();
	var allDishesItem = model.getFullMenu();
	var numberOfGuests = model.getNumberOfGuests();
	var dishHtml = "";
	
	this.printRecipeButton = container.find("#printRecipeButton");
	this.backEditDinnerButton = container.find("#backEditDinnerButton");
	
	/*
	
	for(var i in allDishesItem){
		var dishImage = "";
		var dishImage = "<img src='images/" + allDishesItem[i].image + "'/>";
		dishHtml += "<div id ='dishImage' >" + dishImage + "<h4>" + allDishesItem[i].name + "</h4></div>";
		var dishBoxes = "<div class='row' id='dishBoxes'>" + dishHtml + "</div>";
	} */

	
	for(var i = 0; i < allDishesItem.length; i++){
		var dishImage ="";
        dishImage += "<img src=" + "https://spoonacular.com/recipeImages/" + allDishesItem[i].id + "-312x150.jpg" + ">"
		dishHtml += "<div id ='dishImage' >" + dishImage + "<h4>" + allDishesItem[i].title + "</h4></div>";
		var dishBoxes = "<div class='row' id='dishBoxes'>" + dishHtml + "</div>";
    }

	totalMenuPrice.html("<h3>TOTAL: <br> <p>SEK " + totalPrice + "</p></h3>");
	numOfGuests.html("<h3>My Dinner: " + numberOfGuests + " people</h3>");
	menu.html(dishBoxes)
	
	
	
	
	this.update = function(){
			
		var totalPrice = model.getTotalMenuPrice();
		var allDishesItem = model.getFullMenu();
		var numberOfGuests = model.getNumberOfGuests();
		var dishHtml = "";
			
				
		for(var i = 0; i < allDishesItem.length; i++){
			var dishImage ="";
			dishImage += "<img src=" + "https://spoonacular.com/recipeImages/" + allDishesItem[i].id + "-312x150.jpg" + ">"
			dishHtml += "<div id ='dishImage' >" + dishImage + "<h4>" + allDishesItem[i].title + "</h4></div>";
			var dishBoxes = "<div class='row' id='dishBoxes'>" + dishHtml + "</div>";
		}

		totalMenuPrice.html("<h3>TOTAL: <br> <p>SEK " + totalPrice + "</p></h3>");
		numOfGuests.html("<h3>My Dinner: " + numberOfGuests + " people</h3>");
		menu.html(dishBoxes)
	}
	
	model.addObserver(this);
}