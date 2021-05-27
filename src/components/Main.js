import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import SideNav from './Navigation/SideNav'
import Profile from './Home/Profile'
import Integrations from './Integrations/IntegrationsMain'
import Dashboards from './Dashboards/DashboardContainer'
import BottomNav from './Navigation/BottomNav'

export default function Main() {
  const [tab, setTab] = useState(0);
  const [ herokuAwake, setHerokuAwake ] = useState(false)

  useEffect(() => {
    if(!herokuAwake){
      fetch(`${process.env.DB_HOST || 'https://mysterious-journey-89767.herokuapp.com'}/frontend/integrations`)
      .then(setHerokuAwake(true))
    }
  }, [herokuAwake])

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
