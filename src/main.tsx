import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReservationProvider } from "./context/ReservationContext";
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReservationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReservationProvider>
  </StrictMode>
)
