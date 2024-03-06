import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoListState } from '../todo-list.type.ts'

const initialState: TodoListState = {
  'list': [],
}

export const todoListSlice = createSlice({
  'name': 'todoList',
  initialState,
  'reducers': {
    'addTodo': (state, action: PayloadAction<Todo>) => {
      state.list.push(action.payload)
    },
    'deleteTodo': (state, action: PayloadAction<Todo>) => {
      state.list.filter((todo) => todo.id !== action.payload.id)
    },
    'toggleCompleteTodo': (state, action: PayloadAction<Todo>) => {
      state.list.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            'completed': !todo.completed,
          }
        }
        return todo
      })
    },
  },
})

export const { addTodo, deleteTodo } = todoListSlice.actions

export default todoListSlice.reducer
