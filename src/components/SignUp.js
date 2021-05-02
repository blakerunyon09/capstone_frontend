import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'

export default function Login() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [organization, setOrganization] = useState('')
  const [login, setLogin] = useState(false)
  const history = useHistory();

  useEffect(() => {
    if(login) history.push("/app");
  }, [login, history])

  const fetchUser = () => {
    fetch('http://localhost:8080/api/register',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        organization: organization
      })
    })
    .then(res => res.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
        setLogin(true)
      }
    })
    .catch(console.log)
  }

  return (
    <main>
      <section className={"flex flex-row"}>
        <aside className={"hidden md:flex flex-col justify-around items-start bg-yellow-200 h-screen w-2/6 text-blue-400"}>
          <div className={"pl-8"}>
            <h1 className={"font-bold text-5xl pb-8"}>GiantBox</h1>
            <h2 className={"font-bold text-2xl"}>Empower your team with</h2>
            <h2 className={"font-bold text-2xl"}>the data they need.</h2>
          </div>
          <div className={"px-4"}>
            <img alt="person looking at chart" className={"h-96"} src={window.location.origin + '/images/backgrounds/background_2.svg'} />
            <p className={"text-sm pl-8 pt-8"}>Illustration by: <a className={"underlined"} href="https://undraw.co/">unDraw</a></p>
          </div>
        </aside>
        <div className={"flex flex-col h-screen w-screen md:w-4/6 px-8"}>
          <div className={"text-sm self-end pt-4"}>Already have an account? <Link to="/" className={"text-blue-400"}>Sign In.</Link></div>
          <div className={"self-center my-auto flex flex-col"}>
            <h3 className={"font-bold text-2xl pb-6"}>Welcome To GiantBox</h3>
            <h4 className={"font-bold pb-1"}>Username</h4>
            <TextField className={"pb-2 w-80"} variant="outlined" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <h4 className={"font-bold pb-1"}>Email</h4>
            <TextField className={"pb-2 w-80"} variant="outlined" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <h4 className={"font-bold pb-1"}>Password</h4>
            <TextField className={"pb-2 w-80"} variant="outlined" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <h4 className={"font-bold pb-1"}>Organization</h4>
            <TextField className={"pb-4"} variant="outlined" value={organization} onChange={(e) => {setOrganization(e.target.value)}} />
            <Button className={"w-32 bg-blue-500"} variant="contained" color="primary" onClick={fetchUser}>Sign Up</Button>
          </div>
        </div>
      </section>
    </main>
  )
}