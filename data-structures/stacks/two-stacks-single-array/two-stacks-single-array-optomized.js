class TwoStacks {
  constructor(n) {
    this.arr = Array(n).fill(0);
    this.size = n;
    this.top1 = -1;
    this.top2 = this.size;
  }

  // Method to push an element x to stack1
  push1(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
    } else {
      console.log('Stack Overflow');
      System.exit(1);
    }
  }

  // Method to push an element x to stack2
  push2(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
    } else {
      console.log('Stack Overflow');
      System.exit(1);
    }
  }

  // Method to pop an element from first stack
  pop1() {
    if (this.top1 >= 0) {
      var x = this.arr[this.top1];
      this.top1--;
      return x;
    } else {
      console.log('Stack Underflow');
      System.exit(1);
    }
    return 0;
  }

  // Method to pop an element from second stack
  pop2() {
    if (this.top2 < this.size) {
      var x = this.arr[this.top2];
      this.top2++;
      return x;
    } else {
      console.log('Stack Underflow');
      System.exit(1);
    }
    return 0;
  }

  // Driver program to test twoStack class
}
var ts = new TwoStacks(5);
ts.push1(5);
ts.push2(10);
ts.push2(15);
ts.push1(11);
ts.push2(7);
console.log('Popped element from' + ' stack1 is ' + ts.pop1());
ts.push2(40);
console.log('<br/>Popped element from' + ' stack2 is ' + ts.pop2());
