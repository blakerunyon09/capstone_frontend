import React from 'react'
import { useState } from 'react'
// import { TextField } from '@material-ui/core'
import IntegrationLogo from './IntegrationLogo'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export default function CreateDashboards() {

  const [showIntegrations, setShowIntegrations] = useState(true)

  const logos = [
    '/images/logos/Hubspot.png', 
    '/images/logos/Active.png'
  ]

  const buildLogos = () => {
    return logos.map( l => {
      console.log(l)
      return <IntegrationLogo key={l} logo={l} />
    })
  }

  return (
    <section>
      {/* <div className={"px-8 py-8 bg-blue-400 w-80 rounded-lg flex items-center justify-between"}>
        <FaDatabase className={"text-4xl text-gray-600"} />
        <div>
          <p className={"font-bold pb-1"}>Search</p>
          <TextField id="outlined-basic" label="Search Connections" variant="outlined" />
        </div>
      </div> */}
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
    </section>
  )
}
