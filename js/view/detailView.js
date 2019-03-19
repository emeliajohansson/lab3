var DetailView = function (container, model) {

	//Find placements
	var dishInfo = container.find("#dishInfo");
	var dishIngredients = container.find("#dishIngredients");
	
	//Find buttons
	this.backEditDinnerButton = container.find("#backEditDinnerButton");
	this.addToMenuButton = container.find("#addToMenuButton");	
	var oldDishID = model.getCurrentDishID();
	var oldNumberOfGuests = model.getNumberOfGuests();
		
	this.update = function(){
		container.find("#hideWhenLoader").hide();
		container.find("#loader").show();
		
		var dishID = model.getCurrentDishID();
		var numberOfGuests = model.getNumberOfGuests();
		
		//Ingredients and details
		
		//console.log("oldDishID: " + oldDishID + " dishID: " + dishID);
		
		if(oldDishID === dishID && oldNumberOfGuests === numberOfGuests){ //Don't update if the detail view if the id and number of guests is the same
			oldDishID = dishID
			container.find("#hideWhenLoader").show();
			container.find("#loader").hide();
			return
		}else if(oldDishID === dishID && oldNumberOfGuests != numberOfGuests){
			var ingredients = model.getCurrentDishDetails()
			var dishPrice = 0;
				var numberOfGuests = model.getNumberOfGuests();
				ingredientInfo = ""; 
				ingredientInfo += "<p><b>Ingredients for "+ numberOfGuests+ " people </b> </p> <hr>";
				ingredientInfo += "<table id='detailTable'>"
				for (var i = 0; i < ingredients.extendedIngredients.length; i++) {
					if (ingredients.extendedIngredients[i]["id"] == null) {
						continue;
					}
					var name = ingredients.extendedIngredients[i]["name"];
					var quantity = Math.round(ingredients.extendedIngredients[i]["amount"]*numberOfGuests*10)/10;	// Rounds the qty. to one decimal
					var unit = ingredients.extendedIngredients[i]["unit"];
					var price = numberOfGuests;
					dishPrice += parseInt(price);

					ingredientInfo += "<tr><td>" +quantity+ " " +unit+ "</td>";
					ingredientInfo += "<td>&nbsp; &nbsp; &nbsp; &nbsp;" +name+ "</td>";
					ingredientInfo += "<td>&nbsp; &nbsp; &nbsp; &nbsp; SEK</td>";
					ingredientInfo += "<td>" +price+ "</td></tr>";
				}
				ingredientInfo += "</table> <hr>";
				
				container.find("#hideWhenLoader").show();
				container.find("#loader").hide();
				oldDishID = dishID
				dishIngredients.html(ingredientInfo)
			
		}else{
			//TODO don't update when ID is the same
			model.getDish(dishID)
			.then(function(dish){
				//console.log("DetailView model.getDish UPDATE");
				var infoHTML = "<h2>" + dish.title + "</h2><br><p><img src='" + dish.image + "'></img></p><br><p>" + dish.instructions + "</p>"
				dishInfo.html(infoHTML);
				model.setCurrentDishDetails(dish);
				return dish.extendedIngredients
			})
			.then(function(ingredients){
				var dishPrice = 0;
				var numberOfGuests = model.getNumberOfGuests();
				ingredientInfo = ""; 
				ingredientInfo += "<p><b>Ingredients for "+ numberOfGuests+ " people </b> </p> <hr>";
				ingredientInfo += "<table id='detailTable'>"
				for (var i = 0; i < ingredients.length; i++) {
					if (ingredients[i]["id"] == null) {
						continue;
					}
					var name = ingredients[i]["name"];
					var quantity = Math.round(ingredients[i]["amount"]*numberOfGuests*10)/10;	// Rounds the qty. to one decimal
					var unit = ingredients[i]["unit"];
					var price = numberOfGuests;
					dishPrice += parseInt(price);

					ingredientInfo += "<tr><td>" +quantity+ " " +unit+ "</td>";
					ingredientInfo += "<td>&nbsp; &nbsp; &nbsp; &nbsp;" +name+ "</td>";
					ingredientInfo += "<td>&nbsp; &nbsp; &nbsp; &nbsp; SEK</td>";
					ingredientInfo += "<td>" +price+ "</td></tr>";
				}
				ingredientInfo += "</table> <hr>";
				
				container.find("#hideWhenLoader").show();
				container.find("#loader").hide();
				oldDishID = dishID
				dishIngredients.html(ingredientInfo)
			
			})
			.catch(function(err){
				console.log(err);
			});
		}
	};	
	model.addObserver(this);}