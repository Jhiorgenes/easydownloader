import { Router } from './routes'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Moon, Sun } from 'phosphor-react'
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
        <header
          className={`h-[3.125rem] ${
            theme === 'dark' ? 'bg-dark' : 'bg-white-100'
          } flex items-center justify-between px-4 md:h-20`}
        >
          <NavLink to="/">
            <h2
              className={`font-medium text-xl md:text-3xl ${
                theme === 'dark' ? 'text-white-50' : 'text-dark'
              } hover:opacity-80 transition-opacity`}
            >
              Easy<span className="text-green-600">Downloader</span>
            </h2>
          </NavLink>

          {theme === 'dark' && (
            <Sun
              className="w-6 h-6 md:h-10 md:w-10 text-white-50 cursor-pointer hover:opacity-75 hover:text-green-600 transition-colors"
              onClick={toggleTheme}
            />
          )}
          {theme === 'light' && (
            <Moon
              className="w-6 h-6 md:h-10 md:w-10 text-dark cursor-pointer hover:opacity-75 hover:text-green-600 transition-colors"
              onClick={toggleTheme}
            />
          )}
        </header>
        <main className="mt-16 md:mt-20 px-4 md:px-0">
          <Router />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}
