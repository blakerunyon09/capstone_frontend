import React from 'react'
import { useState, useEffect } from 'react'
import MetricCard from './MetricCard'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function Metrics({ selectedIntegration, setSelectedMetric }) {

  const [showIntegrations, setShowIntegrations] = useState(true)
  const [ metricTiles, setMetricTiles ] = useState()

  useEffect(() => {
    const endpoint = `${process.env.DB_HOST || 'https://mysterious-journey-89767.herokuapp.com'}/frontend/${selectedIntegration.toLowerCase()}`

    fetch(endpoint)
    .then(res => res.json())
    .then(setMetricTiles)
    .catch(console.error)
  }, [selectedIntegration])
  
  const buildMetrics = () => {
    return metricTiles.options.map(api => <MetricCard key={api.name} logo={metricTiles.logo} api={api} setSelectedMetric={setSelectedMetric} />)
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
      {metricTiles && buildMetrics()}
    </div>
  </>
  )
}
