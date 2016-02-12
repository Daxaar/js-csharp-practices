(function (customer) {

	//Using var makes this a private scoped variable
	var privateNumber = 100;
	//this however is globally scoped
	anotherNumber = 200;

	customer.firstName = "Darren";
	customer.lastName = "Lewis";

}(customer = window.customer || {}));


console.log(window.anotherNumber);
console.log(window.privateNumber); //undefined

console.log(customer.firstName);
console.log(customer.lastName);
