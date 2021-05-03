import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import { FaTimes } from "react-icons/fa";


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory();

  useEffect(() => {
    if(login) history.push("/app");
  }, [login, history])

  const fetchUser = () => {
    fetch('http://localhost:8080/api/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
        setLogin(true)
      }
      else{
        setError(result.msg)
      }
    })
    .catch(console.log)
  }

  return (
    <main>
      {
        error 
        ? <div className={"flex flex-row justify-between text-white font-bold my-auto bg-red-600 p-4"}>
            <div>{error}</div>
            <div className={"my-auto"} ><FaTimes onClick={() => setError(false)} /></div>
          </div>
        : null
      }
      <section className={"flex flex-row"}>
        <aside className={"hidden md:flex flex-col justify-around items-start bg-red-400 h-screen w-2/6 text-red-200"}>
          <div className={"pl-8"}>
            <h1 className={"font-bold text-5xl pb-8"}>GiantBox</h1>
            <h2 className={"font-bold text-2xl"}>Do you know how your</h2>
            <h2 className={"font-bold text-2xl"}>business is performing?</h2>
          </div>
          <div className={"px-4"}>
            <img alt="person looking at chart" className={"h-96"} src={window.location.origin + '/images/backgrounds/background_3.svg'} />
            <p className={"text-sm pl-8 pt-8"}>Illustration by: <a className={"underlined"} href="https://undraw.co/">unDraw</a></p>
          </div>
        </aside>
        <div className={"flex flex-col h-screen w-screen md:w-4/6 px-8"}>
          <div className={"text-sm self-end pt-4"}>Not a member? <Link to="/sign-up" className={"text-blue-400"}>Sign Up Now.</Link></div>
          <div className={"self-center my-auto flex flex-col"}>
            <h3 className={"font-bold text-2xl pb-6"}>Sign in to GiantBox</h3>
            <h4 className={"font-bold pb-1"}>Username or Email Address</h4>
            <TextField className={"pb-2 w-80"} variant="outlined" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <h4 className={"font-bold pb-1"}>Password</h4>
            <TextField className={"pb-4"} variant="outlined" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <Button className={"w-32 bg-indigo-500"} variant="contained" color="primary" onClick={fetchUser}>Sign In</Button>
          </div>
        </div>
      </section>
    </main>
  )
}