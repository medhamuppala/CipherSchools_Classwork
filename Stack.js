class Stack { 
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(element) 
    { 
        this.items.push(element); 
    } 

    pop(){ 

    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
    }
    print() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
} 

}

var stack = new Stack(); 
stack.push(1); 
stack.push(2); 
stack.push(3); 
stack.push(4); 
stack.push(5); 
console.log(stack.print()); 
stack.pop(); 
stack.pop(); 
console.log(stack.print()); 

  