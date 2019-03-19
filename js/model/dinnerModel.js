//DinnerModel Object constructor
var DinnerModel = function() {
	
	//razvanil@kth.se
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	
	var numberOfGuests = 1;
	var currentDishID = 1235;
	this.currentDishDetails = {};


	var menu = [];
	
	
	//Observer & navigation 	
	this.observerArray = [];

	this.addObserver = function(observer) {
		this.observerArray.push(observer);
	}

	this.notifyObservers = function(obj) {
		//console.log("NotifyObserver function körs")
		for (var i=0; i< this.observerArray.length; i++){
			this.observerArray[i].update();
		}
	} 
	
	//DinnerModel
	
	//Store current dish id
	this.setDishID = function(id) {
		currentDishID = id;
		//console.log("ändrar dishID" + id);
		this.notifyObservers();
	}

	//Return current dish ID
	this.getCurrentDishID = function() {
		return currentDishID;
	}	
		
		
	//Store current dish details	
	this.setCurrentDishDetails = function(dish){
		this.currentDishDetails = dish;
	}

	//Return current dish details
	this.getCurrentDishDetails = function(){
		return this.currentDishDetails;
	}
	
	//Change number of guests, never negative amount
	this.setNumberOfGuests = function(num) {
		if (num < 0){
			numberOfGuests = 0;
		}else{
			numberOfGuests = num;
		}	
	this.notifyObservers();
	}
	
	//Returns the current number of guests.
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var allIngredients =[];
		for(var i = 0; i < menu.length; i++) {
			for (var j = 0; j < menu[i].ingredients.length; j++){
				allIngredients.push(menu[i].ingredients[j]);
		}
	}
		return allIngredients;
	}
	
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalMenuPrice = 0;
		for(var key in menu){
			totalMenuPrice += menu[key].pricePerServing
		}
		return totalMenuPrice * this.getNumberOfGuests();
	}
	
	//Returns the  price of one dish.
	this.getDishPrice = function (dish) {
		return dish.pricePerServing * this.getNumberOfGuests();
	}

	//Adds the passed dish to the menu.
	this.addDishToMenu = function(id) {
		theDish = this.getCurrentDishDetails();
		 for(key in menu){
			 if(menu[key].id == id){
				 this.removeDishFromMenu(id);
			 }
		 }
			menu.push(theDish);
			this.notifyObservers("NEW_DISH");
	}
	
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var index = 0;
		menu.forEach(function(dish) {
			if(dish.id == id){
				menu.splice(index,1);
			}
			index++;
		});
		 	 this.notifyObservers("REMOVE_DISH");
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
		return fetch('http://sunset.nada.kth.se:8080/iprog/group/11/recipes/search/?query=' + filter + '&type=' + type,{ 
			headers:{   
			'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
		}
      	}).then(function(response){
			console.log("API call from getAllDishes");
      		return response.json();
		}).catch(function(err){
			console.log(err);
		})
	}
	
		
	//function that returns a dish of specific ID
	this.getDish = function (id) {
		return fetch('http://sunset.nada.kth.se:8080/iprog/group/11/recipes/' + id + '/information',{
			headers:{
				'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
			}
		}).then(function(response){
			console.log("API call from getDish");
      		return response.json();
		}).catch(function(err){
			console.log(err);
		});
	}
}
