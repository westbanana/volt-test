import { Button, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import cls from './style.module.scss'

const TodoCreator:FC = () => {
  const [todoValue, setTodoValue] = useState<string>('')
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    return setTodoValue(event.target.value)
  }

  const AddTaskVariant = todoValue ? 'contained' : 'outlined'

  const TodoValidation = todoValue.length >= 10

  return (
    <div className={cls.creatorContainer}>
      <TextField
        variant="outlined"
        label="type your task"
        onChange={onChangeHandler}
        className={cls.input}
        value={todoValue}
      />
      <Button
        size="large"
        color="primary"
        variant={AddTaskVariant}
        className={cls.addButton}
        disabled={!todoValue || !TodoValidation}
      >
        {'ADD TODO'}
      </Button>
    </div>
  )
}

export default TodoCreator
