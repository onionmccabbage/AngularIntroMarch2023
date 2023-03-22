// the default exported entity needs no brackets
import ITodo, {author} from "../types/Itodo"

export class Todo implements ITodo {
    userId!: number // ! says we guarantee it WILL be provided (honest 'guv)
    id: number
    title: string
    completed: boolean
    constructor (todo:ITodo) {
        this.userId = todo.userId
        this.id = todo.id
        this.title = todo.title
        this.completed = todo.completed
    }
}