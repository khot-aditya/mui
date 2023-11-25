import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProviderWrapper from './theme/Provider.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './context/ThemeContext.tsx';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeContextProvider>
          <ThemeProviderWrapper>
            <Routes />
            <CssBaseline />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProviderWrapper>
        </ThemeContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)