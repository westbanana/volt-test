import { Todo } from '../todo-list.type.ts'
import { RootState } from '../../../../app/store.ts'

export const getTodos = (state:RootState):Todo[] => state.todoList.list
