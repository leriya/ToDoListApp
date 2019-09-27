class ToDoApp{

  constructor(_render, _list) {
    
    if (!_render || !_list) {
      throw new Error("argument(s) for constructor is null");      
    }
    
    this.render = _render;
    this.list = _list;

    this.deleteElement = this.deleteElement.bind(this);
    this.checkElement = this.checkElement.bind(this);

    this.buttonAdd = document.getElementById("Create");
    this.input = document.querySelector("input");    
  }
  
  CheckInput() {
    if (this.input.value === "") {
      this.buttonAdd.disabled = true;
    }
    else { 
      this.buttonAdd.disabled = false;
    }
  }

  AddNew() {                
    this.list.addToHead(this.input.value);
    this.render.createItemRender(this.input.value, this.checkElement, this.deleteElement);      
    this.input.value='';
    this.buttonAdd.disabled = true;
  }

  deleteElement(element) {
    let value = element.value;    
    this.list.removeItem(value);
    this.render.clearRender(element);        
  }  
  
  checkElement(element) {
    if (element.checked){
      this.render.itemDone(element);
      this.list.done(element);      
    }
    else {
      this.render.itemUndone(element);
      this.list.undone(element);      
    }    
  }
}