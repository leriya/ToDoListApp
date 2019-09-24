
class ToDo {
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
        console.log(this)
        break;
      }
      Node = Node.next;
    }
    this.createItem(value);
  }

  createItem(value){
    let newToDo = document.createElement("LI");
    newToDo.innerHTML = value;
    
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox";
    check.value = value;

    let del = document.createElement("button");
    del.value = value;
    del.innerHTML = "&#10008";
    del.className = "clear";
    
    newToDo.appendChild(check);
    newToDo.appendChild(del);
    let list = document.querySelector('div');
    list.appendChild(newToDo);
    
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
        element.parentElement.style.textDecoration = "line-through";
        element.parentElement.style.color = "#a79a9afd";        
        Node.done = true;
      }
      else {element.parentElement.style.textDecoration = "";
      element.parentElement.style.color = "";
        Node.done = false;}          
    }         
  }
   
  clear(element) {
    let value = element.value;
    element.onclick = () => {
      this.removeItem(value);
      element.parentElement.remove()
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
      console.log(value, 'was removed');
      return this;
    }    
  }

  removeFromHead() {    
    const value = this.head.value;
    this.head = this.head.next;
    this.lenght--;
    console.log(value, 'was removed');
    console.log(this);
    return this;
  }
}
console.log(document.getElementById('Create'))
let buttonAdd = document.getElementById("Create");

let input = document.querySelector("input");
console.log(buttonAdd)
  
input.onkeyup = () => {
  if (input.value==="") buttonAdd.disabled = true;
  else  buttonAdd.disabled = false;
}
  
buttonAdd.onclick = () => {                
  ToDo1.addToHead(input.value);      
  input.value='';
  buttonAdd.disabled = true;
}

let ToDo1 = new ToDo();  
console.log(ToDo1);
ToDo1.addToHead('first');
ToDo1.addToHead('second');
