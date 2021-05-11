import React from 'react'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CurrentDashboards from './CurrentDashboards'
import Header from '../Navigation/Header'

export default function DashboardContainer() {

  const [tab, setTab] = useState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header tab={tab} setTab={setTab} tabNames={["Current Dashboards", "Settings"]} title={"Dashboards"} button={"Dashboards"} />
        <CurrentDashboards />
      </div>
    </DndProvider>
  )
}
