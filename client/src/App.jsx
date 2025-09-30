import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import Habits from './pages/Habits'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const { token } = useContext(AuthContext)
  return (
    <>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: "20px",
        height: "70px",
        background: "#222",
        color: "white"
      }}>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/habits' element={token ? <Habits /> : <Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App