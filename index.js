// You're going to implement a simple counter class. 
// The counter will start at zero, and every time its `incr` 
// method is called, it will increase by 1.
//
// There's one caveat: Your counter must act like a 
// number and support arithmetic operations and 
// comparisons.


function Counter(){
  this.count = 0;
}

Counter.prototype.incr = function(){  

  return this.count++;
};

Counter.prototype.toString = function(){  
  return this.count;
};


var c = new Counter();
console.log(c + 1);


c.incr(); // counter is now at 1
console.assert(c+1, 2)
console.assert(c > 1 === false)
console.assert(c > 0)
console.assert(c == 1)
Math.sqrt(c); // 1

//inredment method
//toString
//constructor
//implement the constructor

// console.log(Counter())