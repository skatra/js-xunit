describe("A Stack Data Structure",function(){
	
	var stack;

	//Positive Test Cases
	it("should initialize an empty stack",function(){
		stack = new Stack();
		expect(stack).toBeDefined();
	});

	it("should allow you to obtain the size of the stack",function(){
		stack = new Stack();
		expect(stack.size()).toBe(0);
	});
	
	it("should allow a value to be pushed on to the stack",function(){
		stack = new Stack();
		stack.push(1);
		expect(stack.size()).toBe(1);
	});

	it("should allow multiple values to be pushed on to the stack",function(){
		stack = new Stack();
		stack.push(1);
		stack.push(2);
		expect(stack.size()).toBe(2);
	});

	it("should allow a value to be popped from the stack",function(){
		stack = new Stack();
		stack.push(1);
		stack.push(2);
		expect(stack.size()).toBe(2);
		expect(stack.pop()).toBe(2);
		expect(stack.size()).toBe(1);
	});

	it("should allow multiple values to be popped from the stack",function(){
		stack = new Stack();
		stack.push(1);
		stack.push(2);
		expect(stack.size()).toBe(2);
		expect(stack.pop()).toBe(2);
		expect(stack.size()).toBe(1);
		expect(stack.pop()).toBe(1);
		expect(stack.size()).toBe(0);
	});

	it("should allow you to peek at the top value on the stack without removing it",function(){
		stack = new Stack();
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
		expect(stack.size()).toBe(2);
	});

	//Negative Test Cases
	it("should not allow you to pop from an empty stack",function(){
		stack = new Stack();
		expect(function() { stack.pop(); }).toThrowError("Can't pop from an empty stack!");
	});

});