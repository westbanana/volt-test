import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EditTodoProps, TodoListState } from '../todo-list.type.ts'
import { ITodo } from '../../../Todo/todo.type.ts'

const initialState: TodoListState = {
  'list': [],
}

export const todoListSlice = createSlice({
  'name': 'todoList',
  initialState,
  'reducers': {
    'addTodo': (state, action: PayloadAction<ITodo>) => {
      state.list.push(action.payload)
    },
    'deleteTodo': (state, action: PayloadAction<ITodo>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id)
    },
    'editTodo': (state, action: PayloadAction<EditTodoProps>) => {
      state.list = state.list.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            'title': action.payload.title,
          }
        }
        return todo
      })
    },
    'toggleCompleteTodo': (state, action: PayloadAction<ITodo>) => {
      state.list = state.list.map((todo) => {
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

export const {
  addTodo,
  deleteTodo,
  toggleCompleteTodo,
  editTodo,
} = todoListSlice.actions

export default todoListSlice.reducer
