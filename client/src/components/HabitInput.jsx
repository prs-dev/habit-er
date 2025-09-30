import { useState } from "react"
import { useHabits } from "../hooks/useHabits"

const HabitInput = ({status}) => {
    const {habits, addHabit, updateHabit} = useHabits()
    const [state, setState] = useState({
        title: '',
        frequency: '',
        createdAt: new Date()
    })
    const [habitId, setHabitId] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("habits", state)
        try {
            const res = habitId ? await updateHabit(state, habitId) : await addHabit(state)
            console.log(res)
        } catch (error) {
            console.log(`Error in habit input, ${error}`)
        }
    }
    const handleChange = e => {
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={state.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Frequency</label>
                <select name="frequency" onChange={handleChange} value={state.frequency}>
                    <option value="" disabled>Select</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Date</label>
                <input type="date" name="createdAt" value={state.createdAt} onChange={handleChange}/>
            </div>
            {status === 'update' && 
            <div>
                <select value={habitId} onChange={e => setHabitId(e.target.value)}>
                    <option value="" disabled>Select</option>
                    {habits?.map(habit => <option value={habit._id}>{habit.title}</option>)}
                </select>
            </div>}
            <button>{status === 'update' ? "update" : "save"}</button>
        </form>
    )
}

export default HabitInput