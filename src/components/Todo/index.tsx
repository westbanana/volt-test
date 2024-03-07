import { FC } from 'react'
import { Checkbox, ListItem, Typography } from '@mui/material'
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
  const editTodo = ():void => {
    const responseObj:ToggleResponseProps<ITodo> = {
      'mode': CreatorMode.EDIT_MODE,
      todo,
    }
    dispatch(toggleMode(responseObj))
  }

  const toggleComplete = ():PayloadAction<ITodo> => {
    return dispatch(toggleCompleteTodo(todo))
  }

  const onDelete = ():void => {
    dispatch(deleteTodo(todo))
  }

  return (
    <ListItem divider key={todo.id}>
      <Checkbox
        onClick={toggleComplete}
        checked={todo.completed}
      />
      <Typography
        noWrap
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
