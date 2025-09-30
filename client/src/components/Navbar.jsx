import {useState} from 'react'
import { Link } from 'react-router-dom'
const LINK_STYLE = {
    color: "white",
    textDecoration: "none"
}

const Navbar = () => {
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    return (
        <>
            <div>
                <h1>habit-er</h1>
            </div>
            <ul style={{
                display: "flex",
                gap: "10px",
                listStyle: "none",
                
            }}>
                <li><Link style={LINK_STYLE} to='/'>home</Link></li>
                <li><Link style={LINK_STYLE} to='/login'>login</Link></li>
                <li><Link onClick={logout} style={LINK_STYLE} to='/'>logout</Link></li>
                <li><Link style={LINK_STYLE} to='/habits'>habits</Link></li>
            </ul>
        </>
    )
}

export default Navbar