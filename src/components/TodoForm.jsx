import { useState } from 'react'
import '../styles/TodoForm.css'

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!input.trim()) {
      setError('Please enter a task')
      return
    }

    if (input.length > 100) {
      setError('Task must be 100 characters or less')
      return
    }

    onAddTodo(input.trim())
    setInput('')
    setError('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className={`form-input ${error ? 'error' : ''}`}
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setError('')
          }}
          maxLength={100}
        />
        <button type="submit" className="form-button">
          <span>Add Task</span>
          <span className="button-icon">+</span>
        </button>
      </div>
      {error && <div className="form-error">{error}</div>}
      {input.length > 0 && (
        <div className="char-count">{input.length}/100</div>
      )}
    </form>
  )
}

export default TodoForm
