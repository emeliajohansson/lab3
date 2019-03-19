var HomeView = function (container, model) {

	var description = container.find("#description");
	var homebtn = container.find("#homebtn");

	description.html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque gravida leo, eu malesuada enim varius id. Suspendisse dapibus id erat in maximus. Mauris vitae eros libero. Vivamus non viverra ipsum. Ut sit amet varius turpis. Donec ut lectus orci. Cras velit urna, laoreet in suscipit eu, maximus sed turpis. Morbi vestibulum porttitor massa, id suscipit diam viverra vitae. Aliquam erat volutpat. Nulla sodales mauris nibh, a pulvinar dui faucibus eget. Duis auctor massa volutpat risus elementum, non cursus sem gravida.<p>");

	var buttonHTML = '<button type="button" class="btn btn-warning" id="createDinnerBtn">Create new dinner</button>';


	homebtn.html(buttonHTML);
	this.homebtn  = container.find("#createDinnerBtn");
}

 
