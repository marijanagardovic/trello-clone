let input = document.querySelector('#add-one');
let iconAdd = document.querySelector('#task-submit');
let addTask = document.querySelector('.task-list');
let tasks = document.querySelector('.tasks');
let li = document.createElement('li');

//adding cards

iconAdd.addEventListener('click', () => {
    if(input.value == '') {
        input.value = 'Add a card';
    }
    li.appendChild(document.createTextNode(input.value));
    addTask.appendChild(li);
    
/*     addTask.classList.add('active');
    addTask.innerHTML = input.value; */
})

