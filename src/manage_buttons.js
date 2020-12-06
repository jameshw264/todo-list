import display_list from "./display_controller";

const init_buttons = (project) => {

    const remove_buttons = document.querySelectorAll('.fa-trash-alt');
    remove_buttons.forEach(button => {
        button.onclick = () => {
            const data_id = button.getAttribute('data-id') 
            delete_item(data_id, project)
            display_list(project)
            init_buttons(project)
        }})
    
    const edit_buttons = document.querySelectorAll('.fa-edit');
    edit_buttons.forEach(button => {
        button.onclick = () => {
            const data_id = button.getAttribute('data-id')
            edit_item(data_id, project)
            init_buttons(project)
        }})
    const dropdown_buttons = document.querySelectorAll('.fa-caret-square-down');
    dropdown_buttons.forEach(button => {
        button.onclick = () => {
            const data_id = button.getAttribute('data-id')
            display_dropdown_item(data_id, project)
            init_buttons(project)
        }})
    
}
const edit_item = (item, project) => {
    const todo_item = document.querySelectorAll('[data-id="' + item +'"]')[0];
    const dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
    if (todo_item.classList.contains('edit-todo-item')) {
        todo_item.classList.remove('edit-todo-item');
        dropdown_button.classList.remove('fa-caret-square-up')
        dropdown_button.classList.add('fa-caret-square-down')
        const extra_info = document.querySelectorAll('[data-id="' + item +'"]')[4];
        console.log(extra_info)
        extra_info.remove()
    } else{
        dropdown_button.classList.remove('fa-caret-square-down');
        dropdown_button.classList.add('fa-caret-square-up');
        const todo_item_info = project.items[item]
        const current_info = todo_item.innerHTML
        const total_info = current_info + '<div class="extra-info" data-id="' + item + '"><input placeholder="' + todo_item_info.description + '"><br><input placeholder="' + todo_item_info.due_date + '"<br><input placeholder="' + todo_item_info.priority + '"<br><input placeholder="' + project.title + '"<br><button class="save-item" data-id="' + item +'">Save</button></div>';
        todo_item.classList.add('edit-todo-item')
        todo_item.innerHTML = total_info;
        const save_button = document.querySelectorAll('[data-id="' + item +'"]')[5];
        save_button.onclick = () => {
            todo_item.innerHTML = current_info
            const dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
            dropdown_button.classList.remove('fa-caret-square-up')
            dropdown_button.classList.add('fa-caret-square-down')
            todo_item.classList.remove('edit-todo-item');
            init_buttons(project)
        }
        const close_dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
        close_dropdown_button.onclick = () => {
            todo_item.innerHTML = current_info
            const dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
            dropdown_button.classList.remove('fa-caret-square-up')
            dropdown_button.classList.add('fa-caret-square-down')
            todo_item.classList.remove('edit-todo-item');
            init_buttons(project)
        }
    }
}
const display_dropdown_item = (item, project) => {
    const todo_item = document.querySelectorAll('[data-id="' + item +'"]')[0];
    const dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
    dropdown_button.classList.remove('fa-caret-square-down');
    dropdown_button.classList.add('fa-caret-square-up');
    const todo_item_info = project.items[item]
    const current_info = todo_item.innerHTML
    const total_info = current_info + '<div class="extra-info">' + todo_item_info.description + '<br>' + todo_item_info.due_date + '</div>';
    todo_item.classList.add('open-todo-item')
    todo_item.innerHTML = total_info;
    const close_dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
    close_dropdown_button.onclick = () => {
        todo_item.innerHTML = current_info
        const dropdown_button = document.querySelectorAll('[data-id="' + item +'"]')[1];
        dropdown_button.classList.remove('fa-caret-square-up')
        dropdown_button.classList.add('fa-caret-square-down')
        todo_item.classList.remove('open-todo-item');
        init_buttons(project)
    }
}


const delete_item = (data_id, project) => {
    project.items.splice(data_id, 1)    
}

export default init_buttons;