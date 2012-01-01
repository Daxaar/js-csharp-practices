(function ($) {

	'use strict'; //Introduced as part of Ecmascript 5.  Always use this.

	//Customer is how we create pseudo classes in javascript.  See following comment for info on
	//adress and customer declarations
	var address, customer, Customer = function (firstname, lastname) {
		this.firstName = firstname;
		this.lastName = lastname;
	};

	/* 
	Notice how the customer variable defined above is still undefined in the following test.
	It was only Customer (capital C) that was assigned the function.  This is a pattern required for JSLint
	verification.  The reason for this is braces don't define scope in javascript.  Therefore, variables get
	hoisted to the top level function.  Defining them all at this point explicitly is good practice.
	Nice description in the accepted answer to this question on StackOverflow
	http://stackoverflow.com/questions/7357736/jslint-problems-declaring-variables
	*/
	console.log('customer is type of: ' + typeof (customer));

	//Consider this a class definition with a ctor taking two params ( same as Customer )
	//This is scoped to the function level also
	function Address (line1, postcode) {
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
This funky bit down here shows this is a self executing anonymous function.  Not required for this sample 
but good to get into the habit for better scoping.  The funky statement in parens essentially says pass 
in JQuery from the global window object as long as it isn't undefined || if it is undefined then send in 
a new empty object instance.  The undefined param protects against the malicious update of undefined
*/

//This will be out of scope as Address is only available within the anon func
var a = new Address("here","postcode");
console.log(a.postcode);

//Customer is out of scope also as we declared through var so it has function scope
var c = new Customer("daz","lewis");
console.log(c.firstName);

/*
If we wanted Address to be global we would have needed to define var Address at the global level 
( outside ) the anon func if using 'use strict'
*/