import HabitCard from "./HabitCard"
import { useHabits } from "../hooks/useHabits"

const HabitList = () => {
  const {habits} = useHabits()
  console.log(habits)
  return (
    <div style={{display: "flex", padding: "10px", gap: "10px"}}>
      {habits?.map(habit => <HabitCard habit={habit} />)}
    </div>
  )
}

export default HabitList