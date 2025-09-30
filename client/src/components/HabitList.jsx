import HabitCard from "./HabitCard"
import { useHabits } from "../hooks/useHabits"

const HabitList = () => {
  const {habits} = useHabits()
  console.log(habits)
  return (
    <div>
      <HabitCard />
      <HabitCard />
      <HabitCard />
      <HabitCard />
      <HabitCard />
    </div>
  )
}

export default HabitList