import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {login} from '../services/api'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const {setToken} = useContext(AuthContext)
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await login({
            email, password
        })
        setToken(res.token)
        // console.log(res)
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