import React from 'react'
import { useEffect, useState } from 'react'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import { FormControl, Select, MenuItem } from '@material-ui/core'

export default function DashboardTile({ name }) {

  const [ integrations, setIntegrations ] = useState([])
  const [ selectedIntegration, setSelectedIntegration ] = useState('')
  const [ chartData, setChartData ] = useState(null)
  const [ title, setTitle ] = useState('')

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

  let state = {}

  if(chartData){
    state = {
      labels: chartData.slice(1, 5).map(label => label.name),
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: chartData.slice(1, 5).map(label => label.totalSales)
        }
      ]
    }
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
      setTitle(`${data.provider} ${data.type}`)
      fetch('http://localhost:8080/fetch/',{
        method: "GET",
        headers: {
          ...data
        }
      })
      .then(res => res.json())
      .then(setChartData)
    })
  },[selectedIntegration])

  const handleChange = (event) => {
    setSelectedIntegration(event.target.value)
  };

  const buildChart = () => {
    if(selectedIntegration && (name === "Bar Chart")){
      return <Bar
        data={state}
        options={{
          title:{
            display:true,
            fontSize:15
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    } else if (selectedIntegration && (name === "Line Graph")){
      return <Line
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
    } else if (selectedIntegration && (name === "Pie Chart")){
      return <Doughnut
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
    }
  }

  return (
    <div className={"flex flex-col justify-center w-5/12 h-72 m-1 py-2 px-4 bg-white transform transition-all hover:scale-105"}>
      <div className={"flex flex-row justify-between"}>
        {title ? title : "Create a Chart"}
        <FormControl>
          <Select
            value={selectedIntegration}
            onChange={handleChange}
          >
            {integrations.map(e => {
              return <MenuItem value={`${e.id}`}>{e.provider} - {e.type}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
      {buildChart()}
    </div>
  )
}
