class ToDoApp extends ToDoRender{
  constructor() {
    super();
    this.buttonAdd = document.getElementById("Create");
    this.input = document.querySelector("input");
  }
  
  CheckInput() {
    if (this.input.value==="") this.buttonAdd.disabled = true;
    else  this.buttonAdd.disabled = false;
  }

  AddNew() {                
    this.addToHead(this.input.value);
    this.createItemRender(this.input.value);      
    this.input.value='';
    this.buttonAdd.disabled = true;
  }

  deleteElement(element) {
    let value = element.value;    
    this.removeItem(value);
    this.clearRender(element);        
    console.log(ToDo1);
  }

  checkElement(element) {
    if (element.checked){
      this.itemDone(element);
      this.done(element);
    }
    else {
      this.itemUndone(element);
      this.undone(element);
    }
  }
}

let ToDo1 = new ToDoApp();  
console.log(ToDo1);

