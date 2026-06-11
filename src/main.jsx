import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import CharacterPage from './pages/characterpage.jsx'


//pnpm add react-router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/personaje/:id' element={<CharacterPage/>}/>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
