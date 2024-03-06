import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { FC } from 'react'
import TodoCreator from '../components/TodoCreator'
import TodoList from '../components/TodoList'
import { Container } from '@mui/material'
import cls from './App.module.scss'

const App: FC = () => {
  return (
    <Container className={cls.container}>
      <TodoCreator/>
      <TodoList />
    </Container>
  )
}
export default App
