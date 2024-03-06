import { Button, TextField, Typography } from '@mui/material'
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
import { getTodos } from '../TodoList/model/selectors/get-todos.ts'
import { toast } from 'react-hot-toast'

const TodoCreator:FC = () => {
  const dispatch = useDispatch()
  const currentMode = useSelector(getMode)
  const todoList = useSelector(getTodos)
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
    if (todoList.some((el) => el.title === todo.title)) {
      toast.error('Todo already exists')
    } else {
      dispatch(addTodo(todo))
    }
  }

  useEffect(() => {
    setTodoValue('')
  }, [todoList])

  useEffect(() => {
    if (currentMode === CreatorMode.EDIT_MODE) {
      setTodoValue(currentTodo!.title)
    }
  }, [currentMode])

  const onEdit = ():void => {
    const editedTodo:EditTodoProps = {
      'title': todoValue,
      'id': currentTodo!.id,
    }
    const togleResponse:ToggleResponseProps<ITodo> = {
      'todo': undefined,
      'mode': CreatorMode.CREATE_MODE,
    }
    dispatch(editTodo(editedTodo))
    dispatch(toggleMode(togleResponse))
    setTodoValue('')
  }

  const label = currentMode === CreatorMode.EDIT_MODE ? CreatorLabel.EDIT : CreatorLabel.CREATE

  const showHint = !TodoValidation && todoValue.length > 0

  return (
    <div className={cls.creatorContainer}>
      <div className={cls.inputContainer}>
        <TextField
          variant="outlined"
          error={showHint}
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
      {showHint &&
        <div className={cls.hintValidateContainer}>
          <Typography className={cls.hint}>
            *Todo must be at least 10 characters
          </Typography>
        </div>
      }
    </div>
  )
}

export default TodoCreator
