const tasks = document.querySelectorAll('.tasks');
const columns = document.querySelectorAll('.columns');
let draggableTask = null;

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



