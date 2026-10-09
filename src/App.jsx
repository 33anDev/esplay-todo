import { useState } from 'react'
import './App.css'

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
    <div className="app">
      <header className="app-header">
        <h1>Esplay ToDo</h1>
        <p className="counter">{remaining} av {todos.length} kvar</p>
      </header>

      <form className="todo-form" onSubmit={addTodo}>
        <input type="text" placeholder="Vad behöver göras?"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

      {todos.length === 0 && (
        <p className="empty">Listan är tom.</p>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            </label>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App