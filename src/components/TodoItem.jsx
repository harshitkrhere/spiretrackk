import { useState } from 'react'
import '../styles/TodoItem.css'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [error, setError] = useState('')

  const handleSaveEdit = () => {
    if (!editText.trim()) {
      setError('Task cannot be empty')
      return
    }

    if (editText.length > 100) {
      setError('Task must be 100 characters or less')
      return
    }

    onEdit(todo.id, editText.trim())
    setIsEditing(false)
    setError('')
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
    setError('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label="Mark todo as complete"
        />

        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={(e) => {
                setEditText(e.target.value)
                setError('')
              }}
              onKeyDown={handleKeyDown}
              autoFocus
              maxLength={100}
            />
            {error && <div className="edit-error">{error}</div>}
          </div>
        ) : (
          <div className="text-section">
            <p className="todo-text">{todo.text}</p>
            <span className="todo-date">{todo.createdAt}</span>
          </div>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button
              className="btn btn-save"
              onClick={handleSaveEdit}
              title="Save"
            >
              ✓
            </button>
            <button
              className="btn btn-cancel"
              onClick={handleCancel}
              title="Cancel"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-edit"
              onClick={() => setIsEditing(true)}
              title="Edit"
            >
              ✏️
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDelete(todo.id)}
              title="Delete"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem
