import { Route, Routes } from 'react-router-dom'
import { Download } from './pages/Download'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:social" element={<Download />} />
    </Routes>
  )
}
