// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstColumn = "Parameters";
    this.secondColumn = "Scope";
	this.thirdColumn = "Logger";
	this.email = ko.observable(null);
	this.password = ko.observable(null);
	this.enabled = ko.computed(function() {
		return !isEmpty(this.email) && !isEmpty(this.password);
	}, this);
}

function onLoaded() {
	// Activates knockout.js
	ko.applyBindings(new AppViewModel());
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

document.addEventListener("DOMContentLoaded", onLoaded);