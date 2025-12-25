import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString()
    }
    setTodos([newTodo, ...todos])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const filteredTodos = getFilteredTodos()
  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="header-section">
          <h1 className="app-title">✨ SpireTrack</h1>
          <p className="app-subtitle">Organize your tasks, achieve your goals</p>
        </div>

        <TodoForm onAddTodo={addTodo} />

        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-label">Total</span>
            <span className="stat-value">{totalCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{completedCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Remaining</span>
            <span className="stat-value">{totalCount - completedCount}</span>
          </div>
        </div>

        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p className="empty-message">
              {filter === 'completed' && todos.length > 0
                ? 'No completed tasks yet'
                : filter === 'active' && todos.length > 0
                ? 'No active tasks'
                : 'No tasks yet. Add one to get started!'}
            </p>
          </div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        )}

        <div className="progress-section">
          <div className="progress-label">
            Progress: {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : '0%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
