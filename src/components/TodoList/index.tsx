import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from './model/selectors/get-todos.ts'
import { List } from '@mui/material'

import Todo from '../Todo/index.tsx'

const TodoList:FC = () => {
  const todos = useSelector(getTodos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <List>
      {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </List>
  )
}

export default TodoList
