// Exercise
// Reverse a string using a Stack
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

  getAllInStack() {
    const allItems = [...this.data];
    this.data = [];
    return allItems;
  }

  getAllInStackReversed() {
    const allItems = [...this.data];
    this.data = [];
    return allItems.reverse();
  }

  isStackEmpty() {
    return this.data.length === 0;
  }
}

const stack = new Stack();
const string = 'ronix';
string.split('').forEach((char) => stack.pushToStack(char));
console.log(stack.getAllInStackReversed().join(''));
