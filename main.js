let input = document.querySelector('#add-one');
let iconAdd = document.querySelector('#task-submit');
let addTask = document.querySelector('.task-list');
let tasks = document.querySelector('.tasks');

//adding cards

iconAdd.addEventListener('click', () => {
    if(input.value == '') {
        input.value = 'Add a card';
    }
    addTask.classList.add('active');
    addTask.innerHTML = input.value;
    
})

