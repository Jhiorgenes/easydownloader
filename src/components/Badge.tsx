import { Social } from './Social'
import { Link } from 'react-router-dom'
import { ReactNode, useContext } from 'react'
import { DownloadSimple } from 'phosphor-react'
import { ThemeContext } from '../context/ThemeContext'

interface BadgeProps {
  title: string
  icon: string
  link: string
}

export const Badge = ({ title, icon, link }: BadgeProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Link to={link}>
      <div
        className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white-100'} ${
          theme === 'dark' ? 'hover:bg-gray-700' : 'hover:brightness-90'
        } rounded py-2 md:py-4 px-2 md:px-4 flex justify-between items-center cursor-pointer w-full transition-all`}
      >
        <div className="flex items-center gap-4">
          <Social icon={icon} />
          <span
            className={`${
              theme === 'dark' ? 'text-white-50' : 'text-dark'
            } font-medium text-xl md:text-2xl`}
          >
            {title}
          </span>
        </div>
        <DownloadSimple
          weight="regular"
          width={24}
          height={24}
          color="#00865A"
        />
      </div>
    </Link>
  )
}
