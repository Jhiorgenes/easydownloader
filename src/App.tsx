import { Router } from './routes'
import { useState } from 'react'
import { Header } from './components/Header'
import { ThemeContext } from './context/ThemeContext'

export const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`${
          theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'
        } h-screen transition-all duration-200`}
      >
        <Header toggleTheme={toggleTheme} />
        <main className="mt-16 md:mt-20 px-4 md:px-0">
          <Router />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}
