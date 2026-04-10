function SmoothNav({ sections, onNavigate }) {
  return (
    <header className="top-nav">
      <p className="brand">Sorry Dashboard</p>
      <nav>
        {sections.map((section) => (
          <button
            key={section.label}
            type="button"
            className="nav-link"
            onClick={() => onNavigate(section.ref)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default SmoothNav
