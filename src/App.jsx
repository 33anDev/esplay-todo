import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function addTodo(event) {
    event.preventDefault()
    const text = newTodo.trim()
    if (text === '') return

    const todo = { id: crypto.randomUUID(), text: text, completed: false }
    setTodos((prevTodos) => [...prevTodos, todo])
    setNewTodo('')
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    <div>
      <h1>Min att göra-lista</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Ny uppgift..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>

      <p>{remaining} av {todos.length} uppgifter kvar</p>
    </div>
  )
}

export default App