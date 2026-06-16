// 01 Blueprint
class MyClass {
	constructor(property1, property2) {
		this.property1 = property1;
		this.property2 = property2;
	}

	// Methods
	method1() {
		console.log(`Method 1 called. Property 1: ${this.property1}`);
	}

	method2() {
		console.log(`Method 2 called. Property 2: ${this.property2}`);
	}
}

// 02 Object
const obj1 = new MyClass('Value 1', 'Value 2');
console.log(obj1);

console.log('-----> Properties <-----');

console.log('-----> Object property Names <-----');
console.log(Object.getOwnPropertyNames(obj1)); // [ 'property1', 'property2' ]

console.log('-----> Object Keys <-----');
console.log(Object.keys(obj1)); // [ 'property1', 'property2' ]

console.log('-----> Object Values <-----');
console.log(Object.values(obj1)); // [ 'Value 1', 'Value 2' ]

console.log('-----> Methods <-----');
const prototype = Object.getPrototypeOf(obj1);
console.log(Object.getOwnPropertyNames(prototype)); // [ 'constructor', 'method1', 'method2' ]
