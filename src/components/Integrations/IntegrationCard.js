import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { BsPlug } from "react-icons/bs";


export default function Integration({ integration, setSelectedIntegration }) {

  const [ showConnect, setShowConnect ] = useState(false)

  return (
    <Link to="/app/integrations/addmetrics">
      <article 
        onClick={() => setSelectedIntegration(integration.name)}
        onMouseEnter={() => {setShowConnect(true)}} 
        onMouseLeave={() => {setShowConnect(false)}} 
        className={"flex flex-col justify-between items-center h-40 w-40 bg-gray-300 rounded-xl mr-4 overflow-hidden"} 
      >
        <div className={"self-end p-1 mt-2 bg-gray-500 rounded-l-sm"} >
          <FaPlus style={{fontSize: "5px"}} className={"text-white font-extralight"} />
        </div>
        <img 
          alt={integration.name} 
          src={window.location.origin + integration.logo} 
          style={ showConnect ? {bottom: "0"} : {bottom: "-10px"}}
          className={"relative w-28 transition-all duration-500"} 
        />
        <div 
          style={ showConnect ? {bottom: "0"} : {bottom: "-40px"}} 
          className={"relative flex flex-row justify-center items-center transition-all duration-500 w-full h-10 text-white font-bold bg-green-400"} 
        >
          <BsPlug />
          Connect
        </div>
      </article>
    </Link>
  )
}
