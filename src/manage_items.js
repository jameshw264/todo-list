import { give_projects } from "./manage_projects";

class Item {
    constructor(title, description, due_date, priority, checklist){
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.priority = priority;
        this.checklist = checklist;
    }
}


const create_item = (title, description, due_date, priority, checklist) => {
    const item = new Item(title, description, due_date, priority, checklist);
    return item;
}



export default create_item;
