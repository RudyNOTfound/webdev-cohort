let todoIndex = 1;

function addToDo(){
    
    let element = document.getElementById("todoinput");
    let task = element.value;
    if(task==="") return;//bug fix

    //create
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","todo" + todoIndex);

    const newSpan = document.createElement("span");
    newSpan.innerHTML = task;

    const newButton = document.createElement("button");
    newButton.innerHTML = "Delete Todo";
    newButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");
    
    //append
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    const parent = document.getElementById("todos");
    parent.appendChild(newDiv);

    todoIndex++;
}

function deleteTodo(index){
    const divEle = document.getElementById("todo" + index) ;

    // const parent = document.getElementById("todo");
    // parent.removeChild(divEle);
    //alternatively

    divEle.parentElement.removeChild(divEle);
    
}