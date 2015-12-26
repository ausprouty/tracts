var EmployeeView = function(employee) {

    this.initialize = function() {
        this.el = $('<div/>');
		var that = this;
        this.el.on('click', '.add-location-btn', function(){that.addLocation(event);});
        this.el.on('click', '.add-contact-btn', this.addToContacts);
        this.el.on('click', '.change-pic-btn', this.changePicture);
    };

    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        return this;
    };

	
	
 

    this.initialize();

}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());