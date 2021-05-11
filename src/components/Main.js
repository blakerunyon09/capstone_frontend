import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import SideNav from './Navigation/SideNav'
import Profile from './Home/Profile'
import Integrations from './Integrations/IntegrationsMain'
import Dashboards from './Dashboards/DashboardContainer'
import BottomNav from './Navigation/BottomNav'

export default function Main() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-row">
        <Router>
          <BrowserRouter>
            <SideNav />
            <Route exact path="/app">
              <Profile tab={tab} setTab={setTab} />
            </Route>
            <Route path="/app/dashboards">
              <Dashboards tab={tab} setTab={setTab} />
            </Route>
            <Route path="/app/integrations">
              <Integrations tab={tab} setTab={setTab} />
            </Route>
            <BottomNav />
          </BrowserRouter>
        </Router>
      </div>
    </>
  )
}
