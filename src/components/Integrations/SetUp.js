import React from 'react'
import AvailableIntegrationsList from './AvailableIntegrationsList'

export default function SetUp({ selectedMetric, selectedIntegration }) {
  return (
    <>
      <div className={"flex flex-row pt-4"}>
        <img 
          alt={`${selectedIntegration} Logo`} 
          src={`${window.location.origin}/images/logos/${selectedIntegration}.png`} 
          className={"relative w-48 transition-all duration-500"} 
        />
        <div className={"text-5xl pl-8 font-bold text-gray-500"}>
          {selectedMetric} API
        </div>
      </div>
      <div>
        <form>

        </form>
      </div>
    </>
  )
}
