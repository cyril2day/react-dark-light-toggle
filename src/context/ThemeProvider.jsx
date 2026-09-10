import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const getInitialTheme = () =>
  localStorage.getItem('theme') || 'light'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme())

  document.documentElement.classList.add(theme)

  const toggleTheme = () => {

    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'

      document.documentElement.classList.remove ('light', 'dark')

      document.documentElement.classList.add(newTheme)

      localStorage.setItem('theme', newTheme)

      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
