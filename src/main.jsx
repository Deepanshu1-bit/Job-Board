import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import JobContext from './Context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <JobContext>
      <App />
    </JobContext>
  </BrowserRouter>

)
