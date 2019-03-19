var SidebarView = function (container, model) {	
	
	//Find placement
	var totalMenuPrice = container.find("#totalMenuPrice")
	var navbarPrice = container.find("#navbarPrice")
	var fullMenu = container.find("#fullMenu");
	var guests = container.find("#NumberOfGuests");	

	//Find button
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");	
	this.confirmDinnerButton = container.find("#confirmDinnerButton");
	
	//Get info
	var totalPrice = model.getTotalMenuPrice();
	var menu = model.getFullMenu();	
	var numberOfGuests = model.getNumberOfGuests();

	var dishesInMenuHtml = "<table id='menuTable'><tr><td><b>Dish Name</b></td><td><b>Cost</b></td></tr>";
		for(var i = 0; i < menu.length; i++){
				var dishPrice = model.getDishPrice(menu[i]);
				dishesInMenuHtml += "<tr><td>" + menu[i].title + "</td><td>" + Math.round(dishPrice) + "</td></tr>";
			}
			dishesInMenuHtml += "</table>";
	
	//Print info
	totalMenuPrice.html("<p>SEK " + totalPrice + "</p>");
	navbarPrice.html("<b>MY DINNER</b> --- SEK " + totalPrice);
	fullMenu.html(dishesInMenuHtml);
	guests.html(numberOfGuests);
	
	//Uppdate info
	this.update = function(){		

	var totalPrice = model.getTotalMenuPrice();
	var menu = model.getFullMenu();	
	var numberOfGuests = model.getNumberOfGuests();

	var dishesInMenuHtml = "<table id='menuTable'><tr><td><b>Dish Name</b></td><td><b>Cost</b></td></tr>";
		for(var i = 0; i < menu.length; i++){
				var dishPrice = model.getDishPrice(menu[i]);
				dishesInMenuHtml += "<tr><td>" + menu[i].title + "</td><td>" + Math.round(dishPrice) + "</td></tr>";
			}
			dishesInMenuHtml += "</table>";

		
		totalMenuPrice.html("<p>SEK " + Math.round(totalPrice) + "</p>");
		navbarPrice.html("<b>MY DINNER</b> --- SEK " + Math.round(totalPrice));
		fullMenu.html(dishesInMenuHtml);
		guests.html(numberOfGuests);
		
	
	}
	model.addObserver(this);	
}