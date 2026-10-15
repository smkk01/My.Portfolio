import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch (error) {
    if (!(error instanceof DOMException)) throw error
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.bsTheme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      if (!(error instanceof DOMException)) throw error
      console.warn('Theme preference could not be saved in browser storage.', error)
    }
    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', theme === 'dark' ? '#12161c' : '#0d6efd')
  }, [theme])

  return [theme, setTheme]
}
