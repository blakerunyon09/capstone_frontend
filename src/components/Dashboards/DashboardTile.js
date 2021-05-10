import React from 'react'
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

export default function DashboardTile({ name }) {

  const [ integrations, setIntegrations ] = useState([])
  const [ selectedIntegration, setSelectedIntegration ] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8080/api/show-integrations',{
      method: "GET",
      headers:{
        token
      }
    })
    .then(res => res.json())
    .then(data => setIntegrations(data.integrations))
    .catch(console.error)
  }, [])

  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:8080/api/integration/${selectedIntegration}`,{
      method: "GET",
      headers: {
        token
      }
    })
    .then(res => res.json())
    .then(data => {
      fetch('http://localhost:8080/fetch/',{
        method: "GET",
        headers: {
          ...data
        }
      })
      .then(res => res.json())
      .then(r => console.log(r))
    })
  },[selectedIntegration])

  const handleChange = (event) => {
    setSelectedIntegration(event.target.value)
  };

  return (
    <div>
      {name} {selectedIntegration}
      <FormControl variant="filled">
        <InputLabel>Age</InputLabel>
        <Select
          value={selectedIntegration}
          onChange={handleChange}
        >
          {integrations.map(e => {
            return <MenuItem value={`${e.id}`}>{e.provider} - {e.type}</MenuItem>
          })}
        </Select>
      </FormControl>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}
