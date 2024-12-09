const inputTodo = document.querySelector("#input");
const outputTodo = document.querySelector("#output");
const addTodoBtn = document.querySelector("#add");
const deleteTodoBtn = document.querySelector("#delete");

addTodoBtn.addEventListener('click', ()=> {
    if(inputTodo.value === ""){
        alert("No input found");
    }
    else{
        
        let li = document.createElement("li");
        let data = inputTodo.value;
        li.className = "view-list"

       li.innerHTML = ` <p class="show-text">${data}</p> <button id="delete">Delete</button>`

       outputTodo.appendChild(li);
    }

    inputTodo.value = "";
    saveData();
  
    

})

outputTodo.addEventListener('click', (e)=>{
    console.log(e.target.tagName);

    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "LI"){
           e.target.classList.toggle("slash");
           saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", outputTodo.innerHTML);
}

function showItem(){
    outputTodo.innerHTML = localStorage.getItem("data");
    
}
showItem();

