const input = document.querySelector('input');
const Add_btn = document.querySelector('#addbtn');
const todo = document.querySelector('.todo-list');

Add_btn.addEventListener("click",function(){
 if(input.value.trim()==="")return; 
 todo.innerHTML += `<div class="task">
         <h1>${input.value}</h1>
         <div class="button-section">
            <button id="edit-btn">Edit</button>
            <button id="delete-btn">Delete</button>
         </div>
       </div>`

input.value = "";
})


todo.addEventListener("click",function(elem){
    if(elem.target.id === "delete-btn" ){
      elem.target.closest(".task").remove();
    }
    else if(elem.target.id === "edit-btn"){
     
    const getTask = elem.target.closest(".task");
    const getElem = getTask.querySelector("h1");
    let newTask = prompt("Enter new Task");
    if( newTask === null || newTask.trim()==="" )return;

    getElem.innerText = newTask;
    }

})
