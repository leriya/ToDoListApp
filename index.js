//import ToDoList from './ToDoList.mjs/index.js';
class ToDoRender {

  createItemRender(value){
    let newToDo = document.createElement("LI");
    newToDo.innerHTML = value;
     
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox";
    check.value = value;
    check.onchange = () => {checkElement(check);};
 
    let del = document.createElement("button");
    del.value = value;
    del.innerHTML = "&#10008";
    del.className = "clear";
    del.onclick = () => {deleteElement(del);};
     
    newToDo.appendChild(check);
    newToDo.appendChild(del);
    let list = document.querySelector('div');
    list.appendChild(newToDo);         
  }   

  itemDone(element) { 
    element.parentElement.style.textDecoration = "line-through";
    element.parentElement.style.color = "#a79a9afd"; 
  }

  itemUndone(element) { 
    element.parentElement.style.textDecoration = "";
    element.parentElement.style.color = "";
  }       
   

  clearRender(element) {
    element.parentElement.remove()
  }
}

class ToDoList {
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


let buttonAdd = document.getElementById("Create");
let input = document.querySelector("input");
  
function CheckInput() {
  if (input.value==="") buttonAdd.disabled = true;
  else  buttonAdd.disabled = false;
}

function AddNew() {                
  ToDo1.addToHead(input.value);
  ToDoRender.createItemRender(input.value);      
  input.value='';
  buttonAdd.disabled = true;
}

function deleteElement(element) {
  let value = element.value;    
  ToDo1.removeItem(value);
  ToDoRender.clearRender(element);        
  console.log(ToDo1)
}

function checkElement(element) {
  if (element.checked){
    ToDoRender.itemDone(element);
    ToDo1.done(element);
  }
  else {
    ToDoRender.itemUndone(element);
    ToDo1.undone(element);
  }
}

let ToDo1 = new ToDoList();  
console.log(ToDo1);

