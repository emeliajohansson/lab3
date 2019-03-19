var SelectView2 = function (container, model) {

	var totalMenuPrice = container.find("#totalMenuPrice")
	var navbarPrice = container.find("#navbarPrice")
	var fullMenu = container.find("#fullMenu");

	
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	model.addDishToMenu(2);
	var TotalMenuPrice = model.getTotalMenuPrice();
	var dishes = model.getFullMenu();
	var numberOfGuests = model.getNumberOfGuests();
	sum = 0;

	




	var dishesInMenuHtml = "<table><tr><td>Dish Name</td><td>Cost</td></tr>";
	
		for(var i in dishes){
			for (var j in dishes[i].ingredients){
				sum += dishes[i].ingredients[j].price;
			}
		dishesInMenuHtml += "<tr><td>" + dishes[i].name + "</td><td>" + (sum * numberOfGuests) + "</td></tr>";
		sum = 0; //så att vi börjar om och räkna kostnaden för nästa rätt
	}
	dishesInMenuHtml += "</table>";
	
	
	totalMenuPrice.html("<p>SEK " + TotalMenuPrice + "</p>");
	navbarPrice.html("<b>MY DINNER</b> --- SEK " + TotalMenuPrice );
	fullMenu.html(dishesInMenuHtml);
} 
