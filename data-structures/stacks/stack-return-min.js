// Exercise
// Create a stack that returns the minimum element
// in constant time

const last = (stack) => stack[stack.length - 1];

class Stack {
  constructor() {
    this.data = [];
    this.min = [];
  }

  pushToStack(element) {
    if (this.min.length === 0 || element < last(this.min)) {
      this.min.push(element);
    }
    this.data.push(element);
  }

  popFromStack() {
    if (this.isStackEmpty()) {
      return;
    }
    if (last(this.min) === last(this.data)) {
      this.min.pop();
    }
    return this.data.pop();
  }

  peekStack() {
    return this.data[this.data.length - 1];
  }

  getMin() {
    return last(this.min);
  }

  isStackEmpty() {
    return this.data.length === 0;
  }
}

const stack = new Stack();

stack.pushToStack(5);
stack.pushToStack(3);
stack.pushToStack(1);

stack.popFromStack();
stack.popFromStack();

console.log(stack.data, stack.getMin());
