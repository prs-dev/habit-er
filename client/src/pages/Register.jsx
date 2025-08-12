import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../services/api'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        const data = await register({
            email, password
        })
        console.log("test", data)
    }
  return (
    <div>
        <h1>Register</h1>
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
                <button type='submit'>Save</button>
            </div>
            <div>
                Already registered, <Link to='/login'>Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Register