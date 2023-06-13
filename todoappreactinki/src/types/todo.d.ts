
interface ITodoItemContent{
    content: string;
}

interface ITodoitem extends ITodoItemContent {
    id: string;
    completed: boolean;    
    editing: boolean;
}