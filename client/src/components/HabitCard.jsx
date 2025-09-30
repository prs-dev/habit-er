import {useState} from 'react'
import { useHabits } from '../hooks/useHabits'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const HabitCard = ({ habit }) => {
  const [state, setState] = useState(null)
  const {updateHabit} = useHabits()
  const {loading, setLoading} = useContext(AuthContext)
  const handleChange = (e) => {
    // if(e.target.type === 'checkbox') {
    //   setState({
    //     ...state,
    //     completed: e.target.checked
    //   })
    // } else {
    //   setState(
    //   {...state, [e.target.name]: e.target.value}
    // )
    // }
    // console.log("tes", e.target.type)
    setState(
      e.target.type === 'checkbox' ? {...state, completed: e.target.checked} : {...state, [e.target.name]:e.target.value}
    )
  }
  const handleSubmit = async() => {
    setLoading(true)
    const updatedHabit = {
      ...habit,
      logs: [...habit.logs, state]
    }
    const res = await updateHabit(updatedHabit, habit._id)
    console.log("updated log", res)
    setLoading(false)
    // console.log("updatedHabit", updatedHabit)
  }
  console.log("state", state)
  return (
    <div>
      <div>
        <h2>Title: {habit.title}</h2>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <label htmlFor="">Select date for habit completion</label>
        <input type="date" name="date" onChange={handleChange}/>
        <label htmlFor="">Status of habit</label>
        <input type="checkbox" name="completed" onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>

  )
}

export default HabitCard