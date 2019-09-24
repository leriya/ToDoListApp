//import ToDoList from './ToDoList.mjs/index.js';
class ToDoRender {

  createItemRender(value){
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
    //del.onclick = function() {deleteElement(del);};
     
    newToDo.appendChild(check);
    newToDo.appendChild(del);
    let list = document.querySelector('div');
    list.appendChild(newToDo);
    return [del,check];      
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
      Node = Node.next;
    }
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



let buttonAdd = document.getElementById("Create");
let input = document.querySelector("input");
  
function CheckInput() {
  if (input.value==="") buttonAdd.disabled = true;
  else  buttonAdd.disabled = false;
}

function AddNew() {                
  ToDo1.addToHead(input.value);
  ToDo1.createItem(input.value);      
  input.value='';
  buttonAdd.disabled = true;
}

function deleteElement(element) {
  let value = element.value;    
  ToDo1.removeItem(value);
  //ToDo1.clearRender(element);        
  console.log(ToDo1)
}

let ToDo1 = new ToDoList();  
console.log(ToDo1);
ToDo1.addToHead('first');
ToDo1.createItem('first');
ToDo1.addToHead('second');
ToDo1.createItem('second');
