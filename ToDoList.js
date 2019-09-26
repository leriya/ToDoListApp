
class ToDoList {
  constructor() {
    this.head = null;
    this.lenght = 0;    
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    newNode.done = false;
    this.head = newNode;
    this.lenght++; 
    console.log(this);   
  }

  addToEnd(value){
    const newNode = { value };
    let Node = this.head.next;

    while(Node){

      if (Node.next == null){
        Node.next = newNode;
        newNode.next = null;
        newNode.done = false;
        this.lenght++;

        break;        
      }
      Node = Node.next;
    }    
  }  
    

  done(element) {
    const value = element.value;
    let Node = this.head;

    while (Node){
      if (Node.value === value)

      break;
      Node = Node.next;
    }
    Node.done = true;            
  }

  undone(element) {
    const value = element.value;
    let Node = this.head;

    while (Node){
      if (Node.value === value)
        break;
      Node = Node.next;
    }
    Node.done = false;            
  }  

  removeItem(value) {     
    if (this.head.value === value) {        
      this.removeFromHead();
      return this;
    }
    else {        
      let prevNode = this.head;
      let currNode = this.head.next;

      while (currNode) {
        if (currNode.value === value) {
          break;
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
      
      prevNode.next = currNode.next;
      this.lenght--;
      console.log(value, 'was removed');
      return this;
    }    
  }

  removeFromHead() {    
    const value = this.head.value;
    this.head = this.head.next;
    this.lenght--;
    console.log(value, 'was removed');
    return this;
  }
}