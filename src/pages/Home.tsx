import instagramLogo from '../assets/instagram.png'
import facebookLogo from '../assets/facebook.png'
import twitterLogo from '../assets/twitter.png'
import tiktokLogo from '../assets/tiktok.png'
import heroImage from '../assets/hero.png'

import { ThemeContext } from '../context/ThemeContext'
import { Social } from '../components/Social'
import { Badge } from '../components/Badge'
import { useContext } from 'react'

export const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={heroImage} className="h-20 w-20 md:h-40 md:w-40" alt="" />
      </div>
      <h2
        className={`mt-10 ${
          theme === 'dark' ? 'text-white-50' : 'text-dark'
        }  text-2xl md:text-4xl font-medium text-center`}
      >
        Baixe videos das redes socias <br />
        <span className="text-green-600">sem marca d’água</span>{' '}
      </h2>

      <div className="mt-20 flex justify-center">
        <div className="flex flex-1 flex-col gap-5 max-w-xl">
          <Badge link="/tiktok" title="Baixar Do TikTok" icon={tiktokLogo} />
          <Badge
            link="/instagram"
            title="Baixar Do Instagram"
            icon={instagramLogo}
          />
          <Badge link="/twitter" title="Baixar Do Twitter" icon={twitterLogo} />
          <Badge
            link="/facebook"
            title="Baixar Do Facebook"
            icon={facebookLogo}
          />
        </div>
      </div>
    </>
  )
}
