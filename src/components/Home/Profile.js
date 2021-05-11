import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Profile() {

  const [ user, setUser ] = useState()

  useEffect(() => {
      const token = localStorage.getItem('token');
      fetch(`${process.env.DB_HOST || 'https://mysterious-journey-89767.herokuapp.com'}/api/show-integrations`,{
        method: "GET",
        headers:{
          token
        }
      })
      .then(res => res.json())
      .then(setUser)
      .catch(console.error)
  },[])

  let history = useHistory()
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/')
  }

  const buildProfile = () => {
    return (
      <div className={"flex flex-col flex-wrap p-6 w-5/6 h-screen"}>
        <div
          className={"flex-grow h-full w-5/12 bg-gray-100 rounded-lg p-6"}
        >
          <div
            className={"w-3/4 rounded mx-auto mt-4"}
          >
            <div className={"flex flex-col"}>
              <img 
                alt={`${user.username} avatar`} 
                src={window.location.origin + '/images/avatars/avatar.svg'}
                className={"w-42"}
              />
              <div className={"font-bold text-5xl mb-4 pb-2"}>{user.username}</div>
              <div className={"font-bold"}>Email:</div>
              <div className={"text self-start"}>{user.email}</div>
              <div className={"pt-4 font-bold"}>Organization:</div>
              <div className={"text self-start"}>{user.organization}</div>
              <Button className={"w-32 bg-red-400 mt-40 self-center"} variant="contained" color="primary" onClick={logout}><a href="/">Log Out</a></Button>
            </div>
          </div>
        </div>
        <div
          className={"h-48 w-6/12 flex-grow mb-4 bg-gray-100 rounded-lg p-6"}
        >
          <div className={"m-6 rounded font-bold text-2xl"}>
            <div className={"border-b border-gray-500"}>Integrations</div>
          </div>
        </div>
        <div className={"h-48 w-6/12 flex-grow bg-gray-100 rounded-lg p-6"}>
          <div className={"m-6 rounded font-bold text-2xl"}>
            <div className={"border-b border-gray-500"}>Dashboards</div>
          </div>
        </div>
      </div>
    )}

  return (
    <main 
      className={"w-full h-screen flex flex-fow justify-center items-center bg-blue-400"}
    >
      {user ? buildProfile() : null}
    </main>
    )
}
