import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../src/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ fontFamily: "Avenir, 'Avenir Next', Helvetica, Arial, system-ui, sans-serif" }}>
      <App />
    </div>
  </React.StrictMode>
)
