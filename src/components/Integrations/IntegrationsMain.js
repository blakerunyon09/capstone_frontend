import React from 'react'
import Header from '../Navigation/Header'
import AvailableIntegrations from './AvailableIntegrations'
import CurrentIntegrations from './CurrentIntegrations'

export default function Dashboards({ tab, setTab }) {
  return (
    <div className={"flex flex-col "}>
      <Header tab={tab} setTab={setTab} title={"Integrations"} button={"New Connection"} />
      <main className={"h-full px-12 pt-4"}>
        { tab === 0 ? <CurrentIntegrations /> : <AvailableIntegrations /> }
      </main>
    </div>
  )
}
