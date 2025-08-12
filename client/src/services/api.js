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
            // console.log(data)
            return data
        }
    } catch (error) {
        throw new Error("Error in register endpoint", error)
    }
}

const login = () => {

}