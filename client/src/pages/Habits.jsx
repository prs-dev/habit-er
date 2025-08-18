import React from 'react'
import HabitInput from '../components/HabitInput'

const Habits = () => {
  return (
    <div>
      <div>
        <h1>Create New Habit</h1>
      </div>
      <div>
        {/* input */}
        <HabitInput />
      </div>
    </div>
  )
}

export default Habits