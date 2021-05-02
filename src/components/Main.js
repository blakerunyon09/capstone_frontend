import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import SideNav from './SideNav'
import Dashboard from './Dashboards'
import Integration from './Integrations'
import BottomNav from './BottomNav'

export default function Main() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-row">
        <Router>
          <BrowserRouter>
            <SideNav />
            <Route path="/app/dashboards">
              <Dashboard tab={tab} setTab={setTab} />
            </Route>
            <Route path="/app/integrations">
              <Integration tab={tab} setTab={setTab} />
            </Route>
            <BottomNav />
          </BrowserRouter>
        </Router>
      </div>
    </>
  )
}
