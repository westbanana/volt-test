import { FC } from 'react'
import { ListItem, Typography } from '@mui/material'
import { classNames } from '../../lib/classNames/classnames.ts'
import cls from '../TodoList/style.module.scss'
import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton'
import { ITodo, TodoProps } from './todo.type.ts'
import { useDispatch } from 'react-redux'
import {
  deleteTodo,
  toggleCompleteTodo,
} from '../TodoList/model/slices/todo-list-slice.ts'
import { PayloadAction } from '@reduxjs/toolkit'
import { toggleMode } from '../TodoCreator/model/slice/todo-creator-slice.ts'
import {
  CreatorMode, ToggleResponseProps,
} from '../TodoCreator/model/todo-creator.type.ts'

const Todo:FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch()
  const editTodo = ():PayloadAction<CreatorMode> => {
    const responseObj:ToggleResponseProps<ITodo> = {
      'mode': CreatorMode.EDIT_MODE,
      todo,
    }
    return dispatch(toggleMode(responseObj))
  }

  const toggleComplete = ():PayloadAction<ITodo> => {
    return dispatch(toggleCompleteTodo(todo))
  }

  const onDelete = ():PayloadAction<ITodo> => {
    return dispatch(deleteTodo(todo))
  }

  return (
    <ListItem divider key={todo.id}>
      <Typography
        onClick={toggleComplete}
        className={classNames(cls.text,
          { [cls.completed]: todo.completed },
          [])}
        key={todo.id}
      >
        {todo.title}
      </Typography>
      <EditButton onClick={editTodo} />
      <DeleteButton onClick={onDelete}/>
    </ListItem>
  )
}

export default Todo
