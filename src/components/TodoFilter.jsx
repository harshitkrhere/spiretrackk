import '../styles/TodoFilter.css'

function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All Tasks', icon: '📋' },
    { id: 'active', label: 'Active', icon: '⚡' },
    { id: 'completed', label: 'Completed', icon: '✅' }
  ]

  return (
    <div className="filter-section">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TodoFilter
