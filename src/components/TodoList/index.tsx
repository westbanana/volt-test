import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from './model/selectors/get-todos.ts'

const TodoList:FC = () => {
  const todos = useSelector(getTodos)
  useEffect(() => {})
  console.log(todos)
  return (
    <div>
      qwe
    </div>
  )
}

export default TodoList
