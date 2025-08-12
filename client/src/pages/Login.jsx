import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        console.log({
            email,
            password
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button>Save</button>
            </div>
            <div>
                New here, <Link to='/register'>Register</Link>
            </div>
        </form>
    </div>
  )
}

export default Login