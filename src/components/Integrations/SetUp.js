import React from 'react'
import { useState } from 'react'
import { IntegrationsList } from './IntegrationsList'
import { TextField, Button } from '@material-ui/core'
import { keys } from '@material-ui/core/styles/createBreakpoints'

export default function SetUp({ selectedMetric, selectedIntegration }) {

  const[ formValues, setFormValues ] = useState({})
  const [ requestBody, setRequestBody ] = useState(findAPI().request)
  
  function findAPI(){
    const foundIntegration = IntegrationsList.find(api => api.name === selectedIntegration) 
    return foundIntegration.apis.find(apiType => apiType.name === selectedMetric)
  }

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
    console.log(newValue[1])
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
    const foundMetric = findAPI()
    return foundMetric.setUpForm.map(field => {
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

  return (
    <>
      <div className={"pt-4"}>
        <img 
          alt={`${selectedIntegration} Logo`} 
          src={`${window.location.origin}/images/logos/${selectedIntegration}.png`} 
          className={"relative w-48 transition-all duration-500"} 
        />
      </div>
      <div className={"text-2xl mt-10 font-bold text-gray-600"}>
          {selectedMetric} API
      </div>
      <div>
        <form className={"flex flex-col mt-2 w-60"}>
          {buildForms()}
          <Button 
            className={"w-40 bg-blue-500 mt-4"} 
            variant="contained" 
            color="primary" 
            onClick={() => {}}
          >
            Connect API
          </Button>
        </form>
      </div>
    </>
  )
}
