// 01 Blueprint
class AnotherClass {
	constructor(property1) {
		this.property1 = property1;
	}

	// Methods
	method1() {
		console.log(`Method 1 called. Property 1: ${this.property1}`);
	}
}

// 02 Object
// Create an Instance
const obj1 = new AnotherClass('Value 1');
console.log(obj1);
console.log(obj1.method1());

console.log('-------------------');

// Here, MyClass inherits methods and properties from a AnotherClass.
class MyClass extends AnotherClass {
	constructor(property1, property2) {
		super(property1); // Call the parent class constructor with arguments
		this.property2 = property2;
	}

	// use Parent class Method
	method2() {
		super.method1();
	}
}

// Create an Instance
const obj2 = new MyClass('Argument 1', 'Argument 2');
console.log(obj2);
console.log(obj2.method1());
console.log(obj2.method2());
