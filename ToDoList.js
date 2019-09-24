import ToDoRender from "./ToDoRender.js";

export class ToDoList {
  constructor() {
    this.head = null;
    this.lenght = 0;
    ToDoRender = new ToDoRender(); 
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    newNode.done = false;
    this.head = newNode;
    this.lenght++;
    
    this.createItem(value);
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
    this.createItem(value);
  }  
  
  createItem(value) {        
      const [del, check] = ToDoRender.createItemRender(value);
      console.log(this);
      this.clear(del);
      this.done(check);        
      return this;
  }

  done(element) {
  const value = element.value;
  let Node = this.head;

  while (Node){
    if (Node.value === value)
    break;
    Node = Node.next;}     

    element.onchange = () => {             
      if (element.checked){                   
          Node.done = true;
          ToDoRender.itemDone(element); 
      }
      else {            
        Node.done = false;
        ToDoRender.itemUndone(element); 
      }        
    }         
  }
   
  clear(element) {
    let value = element.value;
    element.onclick = () => {
      this.removeItem(value);
      ToDoRender.clearRender(element);        
    }
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
        if (currNode.value === value) 
        break;

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