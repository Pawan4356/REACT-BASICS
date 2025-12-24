import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const submit = (e) => {
    e.preventDefault() // Prevents page refresh
    setUser({ userName, password }) // Storing the user info in global context
  }

  return (
    <div>
      <h2>Login</h2>
      <input type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='username' />
      <br />
      <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
      <br />
      <button onClick={submit}>Submit</button>
    </div>

  )
}

export default Login