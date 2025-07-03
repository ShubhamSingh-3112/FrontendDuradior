import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./AddToCartContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
   <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
