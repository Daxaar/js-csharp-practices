
function Customer(firstName, lastName)
{
	this.firstName = firstName;
	this.lastName = lastName;
}

//* Comment out this line and fred's age will be undefined
Customer.prototype.age = 30;

var namelabel = 'first name is: ';
var agelabel = 'age is: ';

var wilma = new Customer("wilma","hope");
var fred = new Customer("fred","flintstone");

wilma.age = 21;

console.log(namelabel + wilma.firstName);
console.log(agelabel + wilma.age);
console.log(namelabel + fred.firstName)

//undefined if not on prototype (uncomment * above to add to prototype)
console.log(agelabel + (fred.age || "fred's age hasn't been set on the prototype.  Uncomment line marked *"));