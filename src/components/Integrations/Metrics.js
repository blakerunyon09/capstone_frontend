import React from 'react'
import { useState } from 'react'
import MetricCard from './MetricCard'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { IntegrationsList } from './IntegrationsList'

export default function Metrics({ selectedIntegration, setSelectedMetric }) {

  const [showIntegrations, setShowIntegrations] = useState(true)

  const buildMetrics = () => {
    const foundInt = IntegrationsList.find(Integration => Integration.name === selectedIntegration)
    return foundInt && foundInt.apis.map(api => <MetricCard key={api.name} logo={foundInt.logo} api={api} setSelectedMetric={setSelectedMetric} />)
  }

  return (
    <>
    <div onClick={() => setShowIntegrations(!showIntegrations)} className={"pt-4 flex flex-row text-gray-500"}>
      <div className={"pr-2 my-auto text-lg"}  >
      { showIntegrations
        ? <FaAngleUp />
        : <FaAngleDown />
      }
      </div>
      <p className={"text-lg"}>{selectedIntegration} Data Sets</p>
      <div className={"ml-2 w-12 h-0 my-auto flex-grow border-dashed border-gray-500 border-b"}></div>
    </div>
    <div className={`${showIntegrations ? null : "hidden"} flex flex-row pt-8`}>
      {buildMetrics()}
    </div>
  </>
  )
}
