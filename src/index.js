import './load_page'
import create_item from './manage_items';
import display_list from './display_controller';
import {create_project, add_item, give_projects, give_project} from './manage_projects';
import init_buttons from './manage_buttons'

const project = create_project('project1', 'description', 'color', []);

const add_button = document.querySelector('.add-button')

add_button.onclick = () => {
    const test_item = create_item('title', 'description', 'due_date', 'urgent', 'checklist', 'project1');
    add_item(project, test_item)
    const project_export = display_list(project)
    init_buttons(project)
}

