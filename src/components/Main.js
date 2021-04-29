import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import SideNav from './SideNav'
import Dashboard from './Dashboards'
import Integration from './Integrations'

export default function Main() {
  return (
    <Router>
    <BrowserRouter>
      <div>

      <SideNav />
      </div>
      <Route path="/app/dashboard">
        <Dashboard />
      </Route>
      <Route path="/app/integrations">
        <Integration />
      </Route>
    </BrowserRouter>
  </Router>
  )
}
