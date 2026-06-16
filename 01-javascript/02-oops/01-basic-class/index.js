// 01 Blueprint
class MyClass {
	constructor(property1) {
		this.property1 = property1;
	}

	// Methods
	method1() {
		console.log(`Method 1 called. Property 1: ${this.property1}`);
	}
}

// 02 Object
const obj1 = new MyClass('Value 1');
console.log(obj1);
