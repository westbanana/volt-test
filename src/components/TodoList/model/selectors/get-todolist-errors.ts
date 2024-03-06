import { RootState } from '../../../../app/store.ts'

export const getTodolistErrors = (state:RootState):string => state.todoList.error
