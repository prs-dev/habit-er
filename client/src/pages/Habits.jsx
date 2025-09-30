import React from 'react'
import HabitInput from '../components/HabitInput'
import HabitList from '../components/HabitList'

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
      <div>
        {/* cards */}
        <HabitList />
      </div>
      <div>
        {/* update habits */}
        <HabitInput status={"update"}/> 
        {/* add a selected in habit input for selecting habit */}
      </div>
    </div>
  )
}

export default Habits