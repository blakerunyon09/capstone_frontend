import React from 'react'
import { useState } from 'react'
import Card from './ChartTile'

export default function ChartTilesSideBar({ setDashboard, dashboard }) {

  const [charts,] = useState(["Line Graph", "Bar Chart", "Pie Chart"])

  return (
    <div
      className={`bg-gray-700 w-56 h-full`}
    >
      {charts.map(chart => {
        return <Card setDashboard={setDashboard} dashboard={dashboard} name={chart} />
      })}
    </div>
  )

}
