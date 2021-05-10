import React from 'react'
import { useState } from 'react'
import ChartTilesSideBar from './ChartTilesSideBar'
import DashboardBody from './DashboardBody'

function CurrentDashboards() {

  const [dashboard, setDashboard] = useState([])

  return (
    <div className={"flex flex-row h-screen w-full justify-around items-center"}>
      <DashboardBody dashboard={dashboard} />
      <ChartTilesSideBar setDashboard={setDashboard} dashboard={dashboard} />
    </div>
  );
}

export default CurrentDashboards;
