import './App.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { FC } from 'react'
import TodoCreator from '../components/TodoCreator'
import TodoList from '../components/TodoList'

const App: FC = () => {
  console.log('app')
  return (
    <div>
      <TodoCreator/>
      <TodoList />
    </div>
  )
}
export default App
