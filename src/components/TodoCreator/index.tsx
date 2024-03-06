import { Button, TextField } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import cls from './style.module.scss'
import { addTodo, editTodo } from '../TodoList/model/slices/todo-list-slice.ts'
import { ITodo } from '../Todo/todo.type.ts'
import {
  CreatorLabel,
  CreatorMode,
  ToggleResponseProps,
} from './model/todo-creator.type.ts'
import { useDispatch, useSelector } from 'react-redux'
import { getMode } from './model/selectors/get-mode.ts'
import { getEditTodo } from './model/selectors/get-edit-todo.ts'
import { EditTodoProps } from '../TodoList/model/todo-list.type.ts'
import { toggleMode } from './model/slice/todo-creator-slice.ts'

const TodoCreator:FC = () => {
  const dispatch = useDispatch()
  const currentMode = useSelector(getMode)
  const currentTodo = useSelector(getEditTodo)
  const [todoValue, setTodoValue] = useState<string>('')
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    return setTodoValue(event.target.value)
  }

  const AddTaskVariant = todoValue ? 'contained' : 'outlined'

  const TodoValidation = todoValue.length >= 10

  const createTodo = ():void => {
    const todo:ITodo = {
      'id': Date.now(),
      'title': todoValue,
      'completed': false,
    }
    dispatch(addTodo(todo))
    setTodoValue('')
  }

  useEffect(() => {
    if (currentMode === CreatorMode.EDIT_MODE) {
      setTodoValue(currentTodo.title)
    }
  }, [currentMode])

  const onEdit = ():void => {
    const editedTodo:EditTodoProps = {
      'title': todoValue,
      'id': currentTodo.id,
    }
    const togleResponse:ToggleResponseProps<ITodo> = {
      'todo': undefined,
      'mode': CreatorMode.CREATE_MODE,
    }
    dispatch(editTodo(editedTodo))
    dispatch(toggleMode(togleResponse))
    setTodoValue('')
  }

  const label =
    currentMode === CreatorMode.EDIT_MODE ? CreatorLabel.EDIT : CreatorLabel.CREATE

  return (
    <div className={cls.creatorContainer}>
      <TextField
        variant="outlined"
        label={label}
        onChange={onChangeHandler}
        className={cls.input}
        value={todoValue}
      />
      {currentMode === CreatorMode.EDIT_MODE &&
        <Button
          size="large"
          color="primary"
          variant={AddTaskVariant}
          className={cls.addButton}
          onClick={onEdit}
          disabled={!todoValue || !TodoValidation}
        >
          {'EDIT TODO'}
        </Button>
      }
      {currentMode === CreatorMode.CREATE_MODE &&
        <Button
          size="large"
          color="primary"
          variant={AddTaskVariant}
          className={cls.addButton}
          onClick={createTodo}
          disabled={!todoValue || !TodoValidation}
        >
          {'ADD TODO'}
        </Button>
      }
    </div>
  )
}

export default TodoCreator
