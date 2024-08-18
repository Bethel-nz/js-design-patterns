//This is an old approach, and ambigous in the sense that in a large codebase we would have to rename each methods,e.g changing placeOrder to addOrder

class OrderManager {
	constructor() {
		this.orders = []
	}

	placeOrder(order, id) {
		this.orders.push(id)
		return `You have successfully ordered ${order} (${id})`;
	}

	trackOrder(id) {
		return `Your order ${id} will arrive in 20 minutes.`
	}

	cancelOrder(id) {
		this.orders = this.orders.filter(order => order.id !== id)
		return `You have canceled your order ${id}`
	}
}

const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

//Here's were the command method comes in

class CommandOrderManager {
	constructor() {
		this.orders = []
	}
	execute(command, ...args) {
		return command.execute(this.orders, ...args)
	}
}

class Command {
	constructor(execute) {
		this.execute = execute
	}
}

function PlaceOrderCommand(order, id) {
	return new Command((orders) => {
		orders.push(id);
		return `You have successfully ordered ${order} (${id})`;
	});
}

function CancelOrderCommand(id) {
	return new Command((orders) => {
		orders = orders.filter((order) => order.id !== id);
		return `You have canceled your order ${id}`;
	});
}

function TrackOrderCommand(id) {
	return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

const order_manager = new CommandOrderManager();

console.log(order_manager.execute(new PlaceOrderCommand("Pad Thai", "1234")))
console.log(order_manager.execute(new TrackOrderCommand("1234")))
console.log(order_manager.execute(new CancelOrderCommand("1234")))
