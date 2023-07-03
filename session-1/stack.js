
// Homework #2

class Stack {
    constructor() {
        this.items = [];
    }
    // Add items to the top of stack
    push(element) {
        return this.items.push(element);
    }
    
    // Remove items from the stack and return the top item from the stack. If the stack is empty, return "Stack is currently empty".
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        } else {
            console.log("Stack is currently empty.");
        }
    }
    
    // Returns an array containing all the items in the stack.
    check() {
        // The slice() method returns selected elements in an array, as a new array.
        console.log(this.items.slice());
    }
    
    // Checks if the stack is empty.
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
    stack.push("Milk");
    stack.push("Eggs");
    stack.check();
    stack.pop();
    stack.check();
    stack.pop();
    stack.check();
    stack.pop();

