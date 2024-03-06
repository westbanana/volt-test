import { RootState } from '../../../../app/store.ts'
import { ITodo } from '../../../Todo/todo.type.ts'

export const getTodos = (state:RootState):ITodo[] => state.todoList.list
