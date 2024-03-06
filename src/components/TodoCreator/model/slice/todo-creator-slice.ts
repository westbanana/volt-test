import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {
  CreatorMode,
  TodoCreatorState,
  ToggleResponseProps,
} from '../todo-creator.type.ts'
import { ITodo } from '../../../Todo/todo.type.ts'

const initialState: TodoCreatorState = {
  'mode': CreatorMode.CREATE_MODE,
  'todo': undefined,
}

export const todoCreator = createSlice({
  'name': 'todoCreator',
  initialState,
  'reducers': {
    'toggleMode': (
      state,
      action: PayloadAction<ToggleResponseProps<ITodo>>,
    ) => {
      state.mode = action.payload.mode
      state.todo = action.payload.todo
    },
  },
})

export const { toggleMode } = todoCreator.actions

export default todoCreator.reducer
