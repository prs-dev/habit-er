import { useHabits } from "../hooks/useHabits"

const HabitInput = () => {
    const {habits, addHabits} = useHabits()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("habits", habits)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Frequency</label>
                <select>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" />
            </div>
            <button>Save</button>
        </form>
    )
}

export default HabitInput