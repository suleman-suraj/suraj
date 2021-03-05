const form=document.getElementById("task-form");
const subcontainer= document.getElementById("subcontainer");

 function addTask(e){
     e.preventDefault()if(form.task.value==){
         
     }
     let task =document.createElement("h2");
    task.textContent=form.task.value
    subcontainer.appendChild(task)
    form.task.value=""
 }
 
 form.addEventListener("submit",addTask)