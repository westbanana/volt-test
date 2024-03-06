import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { FC } from 'react'
import TodoCreator from '../components/TodoCreator'
import TodoList from '../components/TodoList'
import { Container } from '@mui/material'
import cls from './App.module.scss'
import { Toaster } from 'react-hot-toast'

const App: FC = () => {
  return (
    <Container className={cls.container}>
      <TodoCreator/>
      <TodoList />
      <Toaster position="top-right" />
    </Container>
  )
}
export default App
