var SelectView = function (container, model, app) {		
		
	model.addObserver(this);
	
	//Find placement
	var allDishes = container.find("#allDishes");
	
	//Find Searchvalue
	var oldSearchText = container.find("#searchText").val();
    var oldSearchType = container.find("#searchType").val();
	
	var oldNumOfGuests = model.getNumberOfGuests();
	container.find("#allDishes").hide();
	container.find("#loader").show();
	
	//Find button
	this.searchBarButton = container.find("#searchBarButton");
	
	var selectViewCont = new SelectViewCont(this, model, app);
	
	//Create html string
	model.getAllDishes(oldSearchType, oldSearchText)
	.then(function(input){
		//console.log("selectView model.getAllDishes");
		return input.results
	})
	.then(function(dishes){
		var dishHTML = "<div class='dishboxes'>";
		if(dishes === undefined || dishes.length == 0){
				dishHTML += "<h3>No dishes with type: " + oldSearchType + " and with ingredient: " + oldSearchText + "</h3>" //If there are no dishes found
		}else{
		for (var i = 0; i < dishes.length; i++) {						
			dishHTML += '<button type="button" id="' + dishes[i].id + '" class = "dishImage" role="button"><img src="https://spoonacular.com/recipeImages/'+dishes[i].image+'" style="height:200px;width:200px;"></img> <p>'+dishes[i].title+'</p></button>';
		}}
		dishHTML += '</div>'
		allDishes.html(dishHTML)
		
		//find dish buttons
		this.dishButton = container.find(".dishImage");
	
		selectViewCont.addListner(this.dishButton)
		
		//hide loader, show dishes
		container.find("#loader").hide();
		container.find("#allDishes").show();	
		return dishHTML	
	})
	.catch(function(err){
			console.log(err);
			var dishHTML = "<h3>No dishes with type: " + oldSearchType + " and with ingredient: " + oldSearchText + "</h3>" //If there are no dishes found
			container.find("#loader").hide();
			container.find("#allDishes").show();
			allDishes.html(dishHTML)

		});

	

	
		
	//Uppdate
	this.update = function(){
		var NumOfGuests = model.getNumberOfGuests();
		
		if(oldNumOfGuests != NumOfGuests){ //Don't update dishes when we change number of guests
			 //console.log("Number of guests is uppdated, no skip update fuction");
			oldNumOfGuests = NumOfGuests //Update the old value of guests
			return		
		}else{
			container.find("#allDishes").hide();
			container.find("#loader").show();
			
			//Find Searchvalue
			var searchText = container.find("#searchText").val();
			var searchType = container.find("#searchType").val();
			
			if(searchText === oldSearchText && searchType === oldSearchType){ //Don't update when the search is the same (if the user add a dish to the menu)
				//console.log("searchText " + searchText + "oldSearchText " + oldSearchText + "searchType " + searchType + "oldSearchType " + oldSearchType)
				container.find("#allDishes").show();
				container.find("#loader").hide();
				return
			}else{
			
			//Create html string	
				model.getAllDishes(searchType, searchText)
				.then(function(start){
					//console.log("selectView model.getAllDishes UPDATE");
					return start
				})
				.then(function(input){
					return input.results
				})
				.then(function(dishes){
					var dishHTML = "<div class='dishboxes'>";
					if(dishes === undefined || dishes.length == 0){
						dishHTML += "<h3>No dishes with type: " + searchType + " and with ingredient: " + searchText + "</h3>" //If there are no dishes found
					}else{
					for (var i = 0; i < dishes.length; i++) {			
						dishHTML += '<button type="button" id="' + dishes[i].id + '" class = "dishImage" role="button"><img src="https://spoonacular.com/recipeImages/'+dishes[i].image+'" style="height:200px;width:200px;"></img> <p>'+dishes[i].title+'</p></button>';
					}}
					dishHTML += '</div>'
					allDishes.html(dishHTML)

					//find dishes
					this.dishButton = container.find(".dishImage");

					//new controller
					//var selectViewCont = new SelectViewCont(this, model, app);
					
					selectViewCont.addListner(this.dishButton);
					
					oldSearchText = searchText
					oldSearchType = searchType
					
					//hide loader, show dishes
					container.find("#allDishes").show();
					container.find("#loader").hide();
					return dishHTML
					
				})
				.catch(function(err){
				console.log(err);
				var dishHTML = "<h3>No dishes with type: " + oldSearchType + " and with ingredient: " + oldSearchText + "</h3>" //If there are no dishes found
				container.find("#loader").hide();
				container.find("#allDishes").show();
				allDishes.html(dishHTML)
				})	
			}
		}
	}
	
	container.find("#allDishes").show();
	container.find("#loader").hide();
	
	//Observer

	this.dishButton = container.find(".dishImage");
	
}

