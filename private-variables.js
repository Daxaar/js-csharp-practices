(function (customer){

	//This is private
	var privateNumber = 100;
	globalNumber = 200;
	
	customer.firstName = "Darren";
	customer.lastName = "Lewis";

})(customer = window.customer || {});


console.log(globalNumber);
console.log(customer.firstName);
console.log(customer.lastName);
