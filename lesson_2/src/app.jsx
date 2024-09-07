import { useState } from 'preact/hooks'
import './app.css'
import Counter from './componets/counter/counter'
import TextInput from './componets/textInput/textInput'
import TodoList from './componets/todoList/todoList'
import Timer from './componets/timer/timer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <TextInput />
      <TodoList />
      <Timer />
    </>
  )
}
