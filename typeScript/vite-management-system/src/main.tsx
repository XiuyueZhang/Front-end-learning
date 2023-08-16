import React from 'react'
import ReactDOM from 'react-dom/client'

// rest styles
import "reset-css"
// import UI design

// import global scss style sheet
import "@/assets/styles/global.scss"
// custumed component style
// import App from './App.tsx'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
