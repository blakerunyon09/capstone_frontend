import React from 'react'
import { useState } from 'react'
import IntegrationCard from './IntegrationCard'
import { IntegrationsList } from './IntegrationsList'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function AvailableIntegrationsList({ setSelectedIntegration }) {

  const [showIntegrations, setShowIntegrations] = useState(true)

  const buildLogos = () => {
    return IntegrationsList.map( integration => {
      return <IntegrationCard key={integration.name} integration={integration} setSelectedIntegration={setSelectedIntegration} />
    })
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
        <p className={"text-lg"}>Data Integrations</p>
        <div className={"ml-2 w-12 h-0 my-auto flex-grow border-dashed border-gray-500 border-b"}></div>
      </div>
      <div className={`${showIntegrations ? null : "hidden"} flex flex-row pt-8`}>
        {buildLogos()}
      </div>
    </>
  )
}
