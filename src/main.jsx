import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import AuthProvider from './context/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
         
         <ErrorBoundary>
            <AuthProvider>
              <App />
            </AuthProvider>
         </ErrorBoundary>
        
     
    
  </StrictMode>,
)
