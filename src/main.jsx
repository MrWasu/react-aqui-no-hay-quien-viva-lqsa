import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import CharactersApp from './CharactersApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
