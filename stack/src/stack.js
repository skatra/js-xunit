function Stack() {
	var storage = [];
	
	this.size = function() {
		return storage.length;
	}

	this.push = function(_value) {
		storage.push(_value);
	}

	this.pop = function() {
		if(storage.length == 0)
			throw new Error("Can't pop from an empty stack!");
		return storage.pop();
	}

	this.peek = function() {
		return storage[storage.length - 1];
	}
}