import React from 'react'
import { useState } from 'react'
import AvailableIntegrationsList from './AvailableIntegrationsList'
import Metrics from './Metrics'
import SetUp from './SetUp'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'



export default function AvailableIntegrations() {

  const [selectedIntegration, setSelectedIntegration] = useState(null)
  const [selectedMetric, setSelectedMetric] = useState(null)

  return (
    <section>
        <Router>
          <BrowserRouter>
            <Route exact path="/app/integrations">
              <AvailableIntegrationsList setSelectedIntegration={setSelectedIntegration} />
            </Route>
            <Route path="/app/integrations/addmetrics">
              <Metrics selectedIntegration={selectedIntegration} setSelectedMetric={setSelectedMetric} />
            </Route>
            <Route path="/app/integrations/setup">
              <SetUp selectedIntegration={selectedIntegration} selectedMetric={selectedMetric} />
            </Route>
          </BrowserRouter>
        </Router>
    </section>
  )
}
