import { configureStore } from '@reduxjs/toolkit'
import todoListReducer
  from '../components/TodoList/model/slices/todo-list-slice.ts'
import todoCreatorReducer
  from '../components/TodoCreator/model/slice/todo-creator-slice.ts'

export const store = configureStore({
  'reducer': {
    'todoList': todoListReducer,
    'todoCreator': todoCreatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
