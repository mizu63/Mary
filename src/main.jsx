import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Summary from './Components/Summary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About/>
    <Skills/>
    <Summary/>
  </StrictMode>,
)
