import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import routes from './routers'
import BackTop from './base-ui/backTop'
const App = () => {
  const element = useRoutes(routes)
  return (
    <div className="app">
      <AppHeader />
      <div className="home">{element}</div>
      <BackTop />
      <AppFooter />
    </div>
  )
}

export default App
