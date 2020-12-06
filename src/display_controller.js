const display_list = (project) => {
    var list_export = ''
    project.items.forEach((item, index) => { 
        list_export += '<div data-id="' + index +'"class="todo-item ' + item.priority + '"><h3>' + item.title + '</h3><i class="far fa-caret-square-down" data-id= "' + index +'"></i><i class="far fa-trash-alt" data-id= "' + index +'"></i><i class="far fa-edit" data-id= "' + index +'"></i></div><br>';
    })
    set_display(list_export)
}

const set_display = (data) => {
    const todo_section = document.querySelector('.todo-section');
    todo_section.innerHTML = data;
}

export default display_list;