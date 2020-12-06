var projects = [];

class Project {
    constructor(title, description, color, items){
        this.title = title;
        this.description = description;
        this.color = color;
        this.items = items;
    }
}

const create_project = (title, description, color, items) => {
    const project = new Project(title, description, color, items);
    projects.push(project)
    return project
}

const add_item = (project, item)=> {
    const temp_list = []
    if (project.items == undefined){
        project.items = item
    } else {
        project.items.forEach(project_item => {
            temp_list.push(project_item)
        })
        temp_list.push(item)
        project.items = temp_list
    }
}

const give_project = (project_title) => {
    projects.forEach(project => {
        if (project.title == project_title){
            return project
        }
    })
}

const give_projects = () => {
    return projects
}





export {create_project, add_item, give_projects, give_project};