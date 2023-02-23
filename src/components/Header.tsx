import { Sun, Moon } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

interface HeaderProps {
  toggleTheme: () => void
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const { theme } = useContext(ThemeContext)

  return (
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
  )
}
