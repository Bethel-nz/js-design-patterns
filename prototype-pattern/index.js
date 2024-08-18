//The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		return `Woof!`;
	}
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = function () { console.log(`${this.name} is Playing now!`) };

dog1.play();
dog2.play();
dog3.play();