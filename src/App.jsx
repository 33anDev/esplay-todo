import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function addTodo() {
    const todo = {id: Date.now(), text: newTodo, done: false}
    setTodos([...todos, todo])
    setNewTodo('')
  }

  return (
    <div>
      <h1>Gather Checklist</h1>
      <input type="text" placeholder="Ny uppgift..."
      value={newTodo}
      onChange={(event) => setNewTodo(event.target.value)}
      />
      <button onClick={addTodo}>Lägg till</button>
      <p>{todos.length} uppgifter</p>
    </div>
  )
}

export default App