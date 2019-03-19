var PrintView = function(container, model){
	var numberOfGuests = container.find("#numberOfGuests");
	var fullMenu  = container.find("#fullMenu");
    var dishPreparation = container.find("#dishPreparation");
	
	this.backEditDinnerButton = container.find("#backEditDinnerButton");

	var fullMenu = model.getFullMenu();
	var guests = model.getNumberOfGuests();
	
    var menu = model.getFullMenu();
    var preparationHTML = "";

	for(var i = 0; i < menu.length; i++){
		preparationHTML += "<div class='row'><div class='col-md-6'><h4>" + menu[i].title + "</h4>" +
		"<img src=" + "https://spoonacular.com/recipeImages/" + menu[i].id + "-556x370.jpg" + "></div><div class='col-md-6'><h4>Preparation</h4>"
		+ menu[i].instructions + "</div></div><hr style='border-bottom: 1px solid black;'>";
	}
	dishPreparation.html(preparationHTML);
  
		
		
	this.update = function(){
		var fullMenu = model.getFullMenu();
		var guests = model.getNumberOfGuests();
		
		var menu = model.getFullMenu();
		var preparationHTML = "";

	for(var i = 0; i < menu.length; i++){
		preparationHTML += "<div class='row'><div class='col-md-6'><h4>" + menu[i].title + "</h4>" +
		"<img src=" + "https://spoonacular.com/recipeImages/" + menu[i].id + "-556x370.jpg" + "></div><div class='col-md-6'><h4>Preparation</h4>"
		+ menu[i].instructions + "</div></div><hr style='border-bottom: 1px solid black;'>";
	}
	
		dishPreparation.html(preparationHTML);	
		}
	
	model.addObserver(this);
}