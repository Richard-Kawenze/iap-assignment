//RICHARD MUNYWOKI - SCT211-0053/2022
//KEN MUTUKU - SCT211-0053/2022
//VICTOR MULILA - SCT211-0049/2022
const submit = document.getElementById('submit');
const newTask = document.getElementById('task');


document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');
    submit.disabled = true;

    newTask.addEventListener('input', function() {
        submit.disabled = !newTask.value.trim();
    });


    document.querySelector('form').addEventListener('submit', function(event) {
        if (submit.disabled) {
            event.preventDefault();
            alert('Please Enter a Task Before submitting');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const newTask = document.getElementById('task');

    newTask.addEventListener('input', function() {
        console.log('Input changed:', newTask.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted!');
        alert("Form submitted");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');
    const tasksList = document.getElementById('tasks');

    submit.disabled = true;

    newTask.addEventListener('input', function() {
        submit.disabled = !newTask.value.trim();
    });
    document.querySelector('form').addEventListener('submit', function(event) {
        if (submit.disabled) {
            event.preventDefault();
            alert('Please enter a task before submitting.');
        } else {
            const newTaskItem = document.createElement('li');
            newTaskItem.textContent = newTask.value;
            tasksList.appendChild(newTaskItem);
            newTask.value = '';
            submit.disabled = true;
            event.preventDefault();
        }
        return false;
    });
});
