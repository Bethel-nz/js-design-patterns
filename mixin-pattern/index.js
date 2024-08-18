//A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance.

class Dog {
	constructor(name) {
		this.name = name;
	}
}

const animalFunctionality = {
	walk: () => console.log("Walking!"),
	sleep: () => console.log("Sleeping!")
};

const dogFunctionality = {
	__proto__: animalFunctionality,
	bark: () => console.log("Woof!"),
	wagTail: () => console.log("Wagging my tail!"),
	play: () => console.log("Playing!"),
	walk() {
		super.walk();
	},
	sleep() {
		super.sleep();
	}
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();