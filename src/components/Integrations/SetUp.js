import React from 'react'
import { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'

export default function SetUp({ selectedMetric, selectedIntegration }) {

  const[ formValues, setFormValues ] = useState({})
  const [ integration, setIntegration ] = useState()
  const [ requestBody, setRequestBody ] = useState()

  useEffect(() => {
    const endpoint = `${process.env.DB_HOST || 'https://mysterious-journey-89767.herokuapp.com'}/frontend/${selectedIntegration}/${selectedMetric}`

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      setIntegration(data)
      setRequestBody(data.metric.request)
    })
    .catch(console.error)
    
  }, [selectedIntegration, selectedMetric])
  
  
  // function findAPI(){
  //   const foundIntegration = IntegrationsList.find(api => api.name === selectedIntegration) 
  //   return foundIntegration.apis.find(apiType => apiType.name === selectedMetric)
  // }

  const findRequestKey = (e, object) => {
    let finalKey = []
    for(var key in object){
      if(key === e.target.id){
        finalKey.push(e.target.id)
        break
      }
      if(typeof object[key] === "object"){
        return finalKey = [findRequestKey(e, object[key])[0], key]
      }
    }
    return finalKey
  }

  const updateRequest = (e) => {
    let newValue = findRequestKey(e, requestBody)
    setFormValues({...formValues, [e.target.id]: e.target.value})

    if(newValue.length === 1){
    setRequestBody({
      ...requestBody,
      [newValue[0]]: e.target.value
    })}
    else{
      setRequestBody({
        ...requestBody,
        [newValue[1]]: {
          ...requestBody[newValue[1]],
          [newValue[0]]: e.target.value
        }
      })
    }
  }

  const buildForms = () => {
    if(selectedMetric){
    return integration.metric.setUpForm.map(field => {
      return (
          <TextField 
            id={field.requestName} 
            key={field.inputName} 
            label={field.inputName} 
            variant="outlined" 
            type={field.type} 
            // value={formValues[field.requestName]}
            className={"mb-2"} 
            helperText={field.note}
            onChange={(e) => updateRequest(e)}
          />
      )
    })
    }
  }

  const fetchData = () => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/api/add-integration', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        token,
        provider: selectedIntegration,
        type: selectedMetric,
        requestBody: JSON.stringify(requestBody),
        requestHeader: JSON.stringify({
          "Content-Type":"application/json",
          "Accept":"application/json",
        })
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error)
  }

  return (
    <>
      <div className={"pt-4"}>
          {
          integration && <img 
          alt={`${integration.name} Logo`} 
          src={`${window.location.origin}/images/logos/${selectedIntegration}.png`} 
          className={"relative w-48 transition-all duration-500"} />
          }
      </div>
      <div className={"text-2xl mt-10 font-bold text-gray-600"}>
          {integration && integration.metric.name} API
      </div>
      <div>
        <form className={"flex flex-col mt-2 w-60"}>
          {integration && buildForms()}
          <Button 
            className={"w-40 bg-blue-500 mt-4"} 
            variant="contained" 
            color="primary" 
            onClick={() => fetchData()}
          >
            Connect API
          </Button>
        </form>
      </div>
    </>
  )
}
