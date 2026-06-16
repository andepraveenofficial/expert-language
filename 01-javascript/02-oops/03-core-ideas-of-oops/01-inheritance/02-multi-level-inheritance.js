// blueprint
class Vehicle {
	start() {
		console.log('Vehicle started');
	}
}

// blueprint
class Car extends Vehicle {
	drive() {
		console.log('Car is driving');
	}
}

// blueprint
class SportsCar extends Car {
	race() {
		console.log('Sports car is racing');
	}
}

// Create an Instance
const obj = new SportsCar();
console.log(obj);
obj.start();
obj.drive();
obj.race();
