import React from 'react'
import HabitInput from '../components/HabitInput'
import HabitList from '../components/HabitList'

const Habits = () => {
  return (
    <div style={{
    }}>
      <div style={{display: "flex", gap: "20px"}}>
        <div>
        {/* input */}
        <div>
          <h1>Create New Habit</h1>
        </div>
        <HabitInput />
      </div>
      <div>
        {/* update habits */}
        <div>
          <h1>Update Habit</h1>
        </div>
        <HabitInput status={"update"} />
        {/* add a selected in habit input for selecting habit */}
      </div>
      </div>
      <div>
        {/* cards */}
        <HabitList />
      </div>
    </div>
  )
}

export default Habits