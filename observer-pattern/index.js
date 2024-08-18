class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(func) {
		this.observers.push(func);
	}

	unsubscribe(func) {
		this.observers = this.observers.filter((observer) => observer !== func);
	}

	notify(data) {
		this.observers.forEach((observer) => observer(data));
	}
}


const observable = new Observable();

function logger(data) {
	console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
	console.log('Toast:', data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

observable.notify("User has logged in");

observable.notify("User has paid for the premium plan");

console.log("Observers before unsubscribing:", observable.observers);

observable.unsubscribe(logger);
observable.unsubscribe(toastify);

console.log("Observers after unsubscribing:", observable.observers);

console.log("Observables Should be empty", observable.observers.length === 0);


new Promise((resolve) => {
	setTimeout(() => {
		console.log('Sleep....');
		resolve();
	}, 2000);
});
