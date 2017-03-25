// Define var with dummy data
var numbers = ["301", "401", "501", "601", "701"];
var streets = ["Pine", "Myrtle", "Spruce", "Poplar", "Cedar"];
var citys = ["Riverside", "Springfield", "Fairview", "Franklin", "Washington"];
var states = ["Illinois", "New York", "Georgia", "Oregon", "Colorado"];
var zipCodes = ["60001", "10018", "30002", "97004", "80001"];

// Pick Random Addresses by:
// Multiply Math.floor (round down b/c can only use whole numbers in array)
// by Math.random (chooses random numbers bet 0 and <1)
// Multiply by length of Array
var number = numbers[Math.floor(Math.random()*5)];
var street = streets[Math.floor(Math.random()*5)];
var city = citys[Math.floor(Math.random()*5)];
var state = states[Math.floor(Math.random()*5)];
var zipCode = zipCodes[Math.floor(Math.random()*5)];

// Print Random Addresses
var randomAddresses = number + " " + street +  ", " + city + " " + state + ", " + zipCode + ".";
randomAddresses;
