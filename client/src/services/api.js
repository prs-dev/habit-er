export const register = async (body) => {
    try {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    } catch (error) {
        throw new Error("Error in register endpoint", error)
    }
}

export const login = async(body) => {
    try {
        const res = await fetch('/api/auth/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
        }
    } catch (error) {
        throw new Error("Error in login endpoint, ", error)
    }
}

export const userDetails = async (token) => {
    // console.log(token)
    try {
        const res = await fetch('/api/auth/user', {
            headers: {
                'content-type': "application/json",
                "authorization": `Bearer ${token}` 
            }
        })
        if(res.ok) {
            const data = await res.json()
            return data
            // console.log(data)
        }

    } catch (error) {
        throw new Error("Error in userDetails, ", error)
    }
}
