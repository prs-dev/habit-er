import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App