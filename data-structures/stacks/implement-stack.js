// Exercise
// Implement a Stack
class Stack {
  constructor() {
    this.data = [];
  }

  pushToStack(element) {
    if (typeof element === 'string' && element.length > 1) {
      return;
    }
    this.data.push(element);
  }

  popFromStack() {
    if (this.isStackEmpty()) {
      return;
    }
    return this.data.pop();
  }

  peekStack() {
    return this.data[this.data.length - 1];
  }

  isStackEmpty() {
    return this.data.length === 0;
  }
}

const stack = new Stack();
