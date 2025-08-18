import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes, Route} from 'react-router-dom'
import Habits from './pages/Habits'

const App = () => {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/habits' element={<Habits />} />
    </Routes>
  )
}

export default App