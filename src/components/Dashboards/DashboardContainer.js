import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CurrentDashboards from './CurrentDashboards'

export default function DashboardContainer() {

  return (
    <DndProvider backend={HTML5Backend}>
      <CurrentDashboards />
    </DndProvider>
  )
}
