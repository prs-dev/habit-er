import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useHabits = () => {
    const [habits, setHabits] = useState([])
    const  {user, token} = useContext(AuthContext)
    console.log("test", user, habits)
    useEffect(() => {
        setHabits(user?.habits)
    }, [user])
    const addHabit = async (body) => {
        try {
            const res = await fetch('/api/habits/create', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                }
            })
            if(res.ok) {
                const data = await res.json()
                console.log(data)
            }
        } catch (error) {
            throw new Error("error in add habit, ", error)
        }
    }
    const updateHabit = async (body, habitId) => {
        try {
            const res = await fetch(`/api/habits/update/${habitId}`, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                }
            })
            if(res.ok) {
                const data = await res.json()
                console.log(data)
            }
        } catch (error) {
            throw new Error("error in update habit, ", error)
        }
    }
    const deleteHabit = async () => {
        try {

        } catch (error) {
            throw new Error("error in delete habit, ", error)
        }
    }
    const toggleComplete = async () => {
        try {

        } catch (error) {
            throw new Error("error in toggle complete, ", error)
        }
    }
    return {
        habits,
        addHabit,
        updateHabit,
        deleteHabit,
        toggleComplete
    }
}