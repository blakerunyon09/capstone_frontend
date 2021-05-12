import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleUp, FaAngleDown, FaCheck } from 'react-icons/fa'
import { Button, Menu, MenuItem } from '@material-ui/core'
require('dotenv').config()

export default function Integrations({ tab, setTab }) {

  const [showIntegrations, setShowIntegrations] = useState(true)
  const [ userIntegrations, setUserIntegrations ] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${process.env.DB_HOST || 'https://mysterious-journey-89767.herokuapp.com'}/api/show-integrations`,{
      method: "GET",
      headers:{
        token
      }
    })
    .then(res => res.json())
    .then(setUserIntegrations)
    .catch(console.error)
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buildUserIntegrations = () => {
    return userIntegrations.integrations.map( connection => {
      const created_at = new Date(connection.created_at.substring(0,4), connection.created_at.substring(5,7), connection.created_at.substring(8,10))
      console.log(created_at.toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' }))
      return (
        <div key={connection.type} className={"flex flex-row items-center justify-start py-6 text-gray-500 font-light text-sm"}>
          <div className={"flex flex-row w-96"}>
            <img
              src={`${window.location.origin}/images/logos/${connection.provider}.png`}
              alt={`${connection.provider} Logo`}
              className={"w-24 my-auto"}
            />
            <div className={"flex flex-col pl-6"}>
              <div className={"text-gray-700 font-bold text-base"}>
                {connection.type} / {connection.provider}
              </div>
              <div>
                {userIntegrations.organization}
              </div>
            </div>
          </div>
          <div className={"w-72"}>
            <div>
              {created_at.toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            <div>
              by {userIntegrations.username}
            </div>
          </div>
          <div className={"flex-grow"}>
            <div className={"flex flex-row items-center"}>
              <FaCheck className={"text-green-500"} /> 
              <div className={"pl-1"}>
                Updated:
              </div>
            </div>
            <div>
              {created_at.toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </div>
          <div className={"flex-grow"}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={"bg-gray-400"}>
              Update
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Pull</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </div>
        </div>
      )
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
        <p className={"text-lg"}>Connected Data Sources</p>
        <div className={"ml-2 w-12 h-0 my-auto flex-grow border-dashed border-gray-500 border-b"}></div>
      </div>
      <div className={`${showIntegrations ? null : "hidden"} pt-8`}>
          {userIntegrations &&
          <div className={"flex flex-row justify-start mb-4 text-sm text-gray-500 border-b"}>
            <div className={"w-96"}>Title</div>
            <div className={"w-72"}>Connected</div>
            <div className={"flex-grow"}>Status</div>
            <div className={"flex-grow"}>Update</div>
          </div>
          }
          {userIntegrations && buildUserIntegrations()}
      </div>
    </>
  )
}
