import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes, Route} from 'react-router-dom'
import Habits from './pages/Habits'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

const App = () => {
  const {token} = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/habits' element={token ? <Habits /> : <Login />} />
    </Routes>
  )
}

export default App