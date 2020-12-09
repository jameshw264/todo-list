import './load_page'
import create_item from './manage_items';
import display_list from './display_controller';
import {create_project, add_item, give_projects, give_project} from './manage_projects';
import init_buttons from './manage_buttons'

const project = create_project('default', 'description', 'color', []);

const add_button = document.querySelector('.add-button')

add_button.onclick = () => {
    
    if (!(document.querySelector('.add-section'))){
        const base_item = '<div class="todo-item base-item"><h3><input placeholder="Title"></h3><i class="far fa-trash-alt base-button"</i></div>';
        const add_section = document.createElement('div')
        add_section.classList.add('add-section')
        add_section.innerHTML = base_item;
        const todo_section = document.querySelector('.todo-section')
        const page = document.getElementById('content')
        page.insertBefore(add_section, todo_section)
        init_buttons(project)
    }
    build_item('Title', 'Description', 'Due Date', 'Priority', 'Checklist', project)
    
}

const build_item = (title, description, due_date, priority, checklist, project) => {
    const test_item = create_item(title, description, due_date, priority, checklist);
    add_item(project, test_item)
    const project_export = display_list(project)
    init_buttons(project)
}

