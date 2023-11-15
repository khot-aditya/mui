import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProviderWrapper from './theme/Provider.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext.tsx';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeProviderWrapper>
          <Routes />
          <CssBaseline />
        </ThemeProviderWrapper>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)