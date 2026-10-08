import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <div>
      <h1>Gather Checklist</h1>
      <input type="text" placeholder="Ny uppgift..."
      value={newTodo}
      onChange={(event) => setNewTodo(event.target.value)}
      />
      <button>Lägg till</button>
      <p>{newTodo}</p>
    </div>
  )
}

export default App