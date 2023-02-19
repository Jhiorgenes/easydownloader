import { createContext } from 'react'

interface ContextProps {
  theme: 'light' | 'dark'
  toggleTheme?: () => void
}

export const ThemeContext = createContext({} as ContextProps)
