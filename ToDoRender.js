class ToDoRender extends ToDoList {

  createItemRender(value){
    let newToDo = document.createElement("LI");
    newToDo.innerHTML = value;
     
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox";
    check.value = value;
    check.onchange = () => {this.checkElement(check);};
 
    let del = document.createElement("button");
    del.value = value;
    del.innerHTML = "&#10008";
    del.className = "clear";
    del.onclick = () => {this.deleteElement(del);};
     
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