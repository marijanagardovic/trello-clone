const tasks = document.querySelectorAll('.tasks');
const columns = document.querySelectorAll('.columns');
let draggableTask = null;
const submit = document.querySelector('#task-submit');
const columnAdd = document.querySelector('#column_add');
const close_btns = document.querySelectorAll(".close");
const addTask = document.querySelector('#add-task');


//create drag and drop functions

tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});

function dragStart() {
    draggableTask = this;
}

function dragEnd () {
    draggableTask = null;
}


columns.forEach((column) =>{
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = "2px solid #426f85";
}

function dragLeave() {
    this.style.border = "none";
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTask);
}

//create new task

submit.addEventListener('click', createTask);

function createTask() {
    const task_div = document.createElement("div");
    const addTask = document.querySelector('#add-task').value;

    if (addTask) {
        const txt = document.createTextNode(addTask);
        task_div.appendChild(txt);
    
        task_div.classList.add("tasks");
        task_div.setAttribute("draggable", "true");
    
        /*create span */
    
        const span = document.createElement("span");
        const span_txt = document.createTextNode("\u00D7");
        span.classList.add("close");
        span.appendChild(span_txt);
    
        /* close span */
    
        span.addEventListener("click", () => {
            span.parentElement.style.display = "none";
          });
    
        task_div.addEventListener("dragstart", dragStart);
        task_div.addEventListener("dragend", dragEnd);
    

        localStorage.setItem(task_div, addTask);
        location.reload();

        task_div.appendChild(span);
        columnAdd.appendChild(task_div);
    }
}


/* close task */

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

localStorage.removeItem("name");
console.log(window.localStorage);