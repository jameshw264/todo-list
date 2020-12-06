const page = document.getElementById('content');

const heading = document.createElement('h1');
heading.innerText = 'ToDo List by jameshw';
page.appendChild(heading);

const todo_section = document.createElement('div');
todo_section.classList.add('todo-section')
const add_button = document.createElement('button');
add_button.textContent = 'Add item';
add_button.classList.add('add-button')
const create_project = document.createElement('button');
create_project.textContent = 'Create project';
create_project.classList.add('create-project')
const view_project = document.createElement('button');
view_project.textContent = 'View projects';
view_project.classList.add('view-project')
page.append(add_button)
page.append(create_project)
page.append(view_project)
page.appendChild(todo_section)

