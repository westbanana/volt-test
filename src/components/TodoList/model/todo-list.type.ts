import { ITodo } from '../../Todo/todo.type.ts'

export type TodoListState = {
  list: ITodo[]
  error: string
}

export type EditTodoProps = {
  id: string | number
  title: string
}
