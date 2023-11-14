import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProviderWrapper from './theme/Provider.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext.tsx';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeProviderWrapper>
          <App />
          <CssBaseline />
        </ThemeProviderWrapper>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)