import instagramLogo from '../assets/instagram.png'
import facebookLogo from '../assets/facebook.png'
import twitterLogo from '../assets/twitter.png'
import tiktokLogo from '../assets/tiktok.png'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useParams } from 'react-router-dom'
import { Link } from 'phosphor-react'
import { api } from '../lib/axios'

export const Download = () => {
  const [url, setUrl] = useState('')
  const { theme } = useContext(ThemeContext)
  const [loading, setLoading] = useState(false)

  const { social } = useParams()

  async function downloadFile(link: string, filename?: string) {
    if (social === 'tiktok' || social === 'twitter') {
      const response = await api.get(link, {
        responseType: 'blob',
      })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(
        new Blob([response.data], { type: 'video/mp4' })
      )
      a.download = `${filename}.mp4`
      document.body.appendChild(a)
      a.click()
    } else if (social === 'facebook' || social === 'instagram') {
      const a = document.createElement('a')
      a.href = link
      a.download = `${link}.mp4`
      document.body.appendChild(a)
      a.click()
    }
  }

  async function getVideoInfo(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const enteredUrl = url
      if (!enteredUrl) {
        alert('Por favor INSIRA uma URL')
        return
      }

      const response = await api.post(
        `/${social}`,
        { url: enteredUrl },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (social === 'tiktok') {
        downloadFile(response.data.download.nowm, response.data.desc)
      } else if (social === 'twitter') {
        downloadFile(
          response.data.download[0].url,
          response.data.tweet_user.text
        )
      } else if (social === 'facebook') {
        console.log(response.data.download[0].url)
        downloadFile(response.data.download[0].url)
      } else if (social === 'instagram') {
        console.log(response.data)
        downloadFile(response.data.url_list[0])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      setUrl('')
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {social === 'facebook' ? (
          <img className="w-28 h-28" src={facebookLogo} />
        ) : (
          ''
        )}
        {social === 'twitter' ? (
          <img className="w-28 h-28" src={twitterLogo} />
        ) : (
          ''
        )}

        {social === 'tiktok' ? (
          <img className="w-28 h-28" src={tiktokLogo} />
        ) : (
          ''
        )}
        {social === 'instagram' ? (
          <img className="w-28 h-28" src={instagramLogo} />
        ) : (
          ''
        )}

        <h1
          className={`${
            theme === 'dark' ? 'text-white-50' : 'text-dark'
          } font-semibold text-2xl text-center mt-5 md:mt-10 md:text-4xl`}
        >
          Baixe videos do <span>{social}</span>
          <br /> <span className="text-green-600">sem marca d’água</span>
        </h1>
      </div>
      <form onSubmit={getVideoInfo}>
        <div className="mt-10 md:mt-20 flex gap-4 justify-center">
          <div className="h-12 md:h-16 flex items-center relative">
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              placeholder="Insira a url aqui"
              className={`rounded w-full h-full pl-10 md:pl-16 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-500'
              } outline-none text-gray-600 placeholder:text-gray-600 md:text-2xl text-ellipsis overflow-hidden whitespace-nowrap`}
            />
            <Link className="absolute left-2 h-5 w-5 md:h-10 md:w-10 text-gray-600" />
          </div>
          <button
            disabled={loading}
            className="cursor-pointer bg-green-600 px-2 h-12 md:h-16 md:px-8 md:text-2xl rounded text-white-50 font-bold hover:bg-green-500 transition-all disabled:opacity-60 disabled:hover:bg-green-600 disabled:cursor-not-allowed"
          >
            {loading ? 'Carregando...' : 'Baixar'}
          </button>
        </div>
      </form>
    </>
  )
}
