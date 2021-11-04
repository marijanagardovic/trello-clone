const tasks = document.querySelectorAll('.tasks');
const columns = document.querySelectorAll('.columns');
const submit = document.querySelector('#task-submit');
const columnAdd = document.querySelector('#column_add');
const close_btns = document.querySelectorAll(".close");



//create drag and drop functions
tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
      task.classList.add('dragging')
    })
  
    task.addEventListener('dragend', () => {
      task.classList.remove('dragging')
    })
})
  
columns.forEach(column => {
      column.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(column, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        column.appendChild(draggable)
      } else {
        column.insertBefore(draggable, afterElement)
      }
    })
})
  
function getDragAfterElement(column, y) {

    const draggableElements = [...column.querySelectorAll('.tasks:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

//create new task

submit.addEventListener('click', createTask);

function createTask() {
    
    const task_div = document.createElement("div");
    const addTask = document.querySelector('#add-task').value;

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

    task_div.appendChild(span);
    columnAdd.appendChild(task_div);


 /*     local storage doesn't work properly 
    const taskArray = [];
    tasks.forEach((task) => {
        taskArray.push({
        name: "task",
        column: "backlog"
        })
    })

    localStorage.setItem("taskArray",JSON.stringify(taskArray)); */

}

/* close task */

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
