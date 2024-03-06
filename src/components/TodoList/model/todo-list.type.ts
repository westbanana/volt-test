import { ITodo } from '../../Todo/todo.type.ts'

export type TodoListState = {
  list: ITodo[]
}

export type EditTodoProps = {
  id: string | number
  title: string
}
