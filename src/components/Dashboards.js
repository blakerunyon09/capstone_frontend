import React from 'react'
import Header from './Header'
import CreateDashboards from './CreateDashboards'
import CurrentDashboards from './CurrentDashboards'

export default function Dashboards({ tab, setTab }) {
  return (
    <div className={"flex flex-col "}>
      <Header tab={tab} setTab={setTab} title={"Dashboards"} button={"New Connection"} />
      <main className={"h-full px-12 pt-4"}>
        { tab === 0 ? <CreateDashboards /> : <CurrentDashboards /> }
      </main>
    </div>
  )
}
