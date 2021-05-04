import React from 'react'
import { useEffect } from 'react'

export default function FetchTest() {

  const fetchData = () => {
    const options = {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        appToken:"Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
        request:{
          applicationName:"Avid4AdventureNew",
          userName:"blake@avid4.com",
          password:"Gigglys5",
          seasonIds:"[]"
        }
      })
    }
    
    fetch('https://awapi.active.com/rest/camps-season-info/', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error)    
  }

  useEffect(()=> {
    fetchData()
  })

  return (
    <div>
      Test
    </div>
  )
}
