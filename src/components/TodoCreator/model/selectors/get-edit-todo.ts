import { RootState } from '../../../../app/store.ts'
import { ITodo } from '../../../Todo/todo.type.ts'

export const getEditTodo =
  (state: RootState): ITodo | undefined => state.todoCreator.todo
