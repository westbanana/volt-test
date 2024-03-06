import { Todo } from '../components/TodoList/model/todo-list.type.ts'

export type StateSchema = {
  'todoList': {
    list: Todo[]
  }
}
