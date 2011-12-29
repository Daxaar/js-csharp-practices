(function ($) {

	'use strict'; //Introduced as part of Ecmascript 5.  Always use this

	//This way of creating a "class" Customer (ignore address and customer)
	var address, customer, Customer = function (firstname, lastname) {
		this.firstName = firstname;
		this.lastName = lastname;
	};

	/* As an aside - notice how the customer variable defined above is still undefined in the following test.
	It was only Customer (capital C) that was assigned the function.  This is a pattern required for JSLint
	verification.  The reason for this is braces don't define scope in javascript.  Therefore, variables get what is
	knows as hoisted to the top level function.  Defining them at this point explicitly is good practice.
	Nice description in the accepted answer to this question on StackOverflow
	http://stackoverflow.com/questions/7357736/jslint-problems-declaring-variables */
	console.log('customer is type of: ' + typeof (customer));

	//...is exactly the same as this
	function Address(line1, postcode) {
		this.line1 = line1;
		this.postcode = postcode;
	}

	//Create new instances
	customer = new Customer("fred", "flintstone");
	address = new Address("here", "FF1 4RF");

	//and access the members
	console.log(customer.firstName);
	console.log(address.line1);

}(window.JQuery || {}, undefined));
/*
We're a self executing anonymous function for better scoping.  Not required for this sample but good to get
into the habit.  The funky statement in parens essentially says pass in JQuery off the global window object 
as long as it isn't undefined || if it is undefined then send in a new empty object instance.
The undefined param protects against the malicious update of undefined
*/