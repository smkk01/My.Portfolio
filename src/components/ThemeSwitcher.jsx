function ThemeSwitcher({ theme, onChange }) {
  const isDark = theme === 'dark'
  return (
    <button className="theme-switcher" type="button" onClick={() => onChange(isDark ? 'light' : 'dark')} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} aria-pressed={isDark} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
    </button>
  )
}

export default ThemeSwitcher