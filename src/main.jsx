import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './themes/global.js'
import TodoProvider from './context/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
