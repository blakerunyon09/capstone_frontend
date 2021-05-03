import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { BsPlug } from 'react-icons/bs'

export default function MetricCard({ logo, api, setSelectedMetric }) {

  const [ showConnect, setShowConnect ] = useState(false)

  return (
    <Link to="setup">
      <article 
          // onClick={() => setSelectedIntegration(integration.name)}
          onMouseEnter={() => {setShowConnect(true)}} 
          onMouseLeave={() => {setShowConnect(false)}} 
          onClick={() => {setSelectedMetric(api.name)}}
          className={"flex flex-col justify-between items-center h-40 w-40 bg-white rounded-xl border mr-4 overflow-hidden"} 
        >
          <div className={"self-end p-1 mt-2 bg-gray-500 rounded-l-sm"} >
            <FaPlus style={{fontSize: "5px"}} className={"text-white font-extralight"} />
          </div>
          <img 
            alt={api.name} 
            src={window.location.origin + logo} 
            style={ showConnect ? {bottom: "0"} : {bottom: "-10px"}}
            className={"relative w-24 transition-all duration-500"} 
          />
          <div 
          className={"relative text-gray-500 font-bold text-sm transition-all duration-500"}
          style={ showConnect ? {bottom: "0"} : {bottom: "-10px"}}
          >
            {api.name}
          </div>
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
