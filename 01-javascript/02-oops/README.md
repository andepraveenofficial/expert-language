# OOPs

- **OOPs** stands for **Object Oriented Programming** language.

## Object

- An object is a collection of data (properties) and actions (methods).
- An object is collection of properties (variables) and methods (functions).

1. Properties → its data → details of the object
2. Methods → its actions → behaviors of the object

## Class

- A class is a blueprint for creating objects with pre-defined properties and methods.

1.  Class = Blueprint of a house
2.  Instance = An actual house built from that blueprint

### Create a Instance

- When we create an instance of a class, it automatically calls the constructor method and initializes the properties with the given arguments..
- The **new** keyword is used to create instance from a class.
- Steps

1. Creates an empty object {}.
2. Sets **this** to that object.
3. Runs the **constructor** method.
4. Returns the new object.

```js
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
```

### Core Ideas of OOP

1. Inheritance
2. Encapsulation
3. Abstraction -> Hide the Details
4. Polymorphism

#### 1. Inheritance

- Inheritance means receiving something from another source.
- Inheritance allows a class to reuse the properties and methods of another class.
- The `extends` keyword is used to reuse the properties and methods of another class.
- The `super()` keyword is used to call the parent class constructor and initialize parent class properties.
- The `super` keyword is used to access parent class methods and properties.
- Multi-Level-Inheritance : In Multi-Level Inheritance, features are passed from a parent class to a child class, and then to another child class.

```js
Vehicle
   ↓
  Car
   ↓
SportsCar
```

#### 2. Encapsulation

- Encapsulation means keeping data and methods together in a class and protecting the data from direct access.
- It helps keep important data safe and prevents unwanted changes.
- Access modifiers control who can access the data.

1. Public → Accessible from anywhere.
2. Protected → Accessible inside the class and its child classes.
3. Private → Accessible only inside the class.

- So we can give the Protection to the Our data.

- Example : In a bank account, users can deposit or withdraw money, but they cannot directly change the account balance.

#### 3. Abstraction

- It is used to hide the background process.
- Abstraction means hiding the internal working and showing only the functionality.
- We just know what the method does and how to use it, but we don't know how it works internally.
- Example: Users can use deposit() and withdraw(), but they don't need to know what happens behind the scenes.
- Example : We know how to switch off or switch on the mobile phone with the power button, but we don't know internal process.

#### 4. Polymorphism

- Poly → Many
- Morph → Forms/Shapes
- Polymorphism → Many Forms (or Many Shapes)
- The same method can behave differently in different situations.
- Polymorphism means the same method can behave differently for different objects.
