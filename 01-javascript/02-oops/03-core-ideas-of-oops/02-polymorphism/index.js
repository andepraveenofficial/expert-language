// blueprint
class Vehicle {
	constructor(name = 'Vehicle', brand) {
		this.name = name;
	}
	start() {
		console.log(`${this.name} started`);
	}
}

const vehicle = new Vehicle();
vehicle.start(); // Vehicle started

class Car extends Vehicle {
	constructor(name) {
		super(name); // call the extended class constructor
	}
}

const car = new Car('Car');
car.start(); // Car started

class Bike extends Vehicle {
	constructor(name) {
		super(name); // call the extended class constructor
	}
}

const bike = new Bike('Bike');
bike.start(); // Bike started
