import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line max-len
import todoListReducer from '../components/TodoList/model/slices/todo-list-slice.ts'

export const store = configureStore({
  'reducer': {
    'todoList': todoListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
