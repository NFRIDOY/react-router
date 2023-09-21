import { Link, NavLink } from "react-router-dom"
import './Header.css'
// import {  } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="flex flex-row justify-between bg-violet-900 text-white px-20 font-bold py-2">
                {/* <Link to="/">App</Link> */}
                <div>
                    <Link to="/home"><img src="react.svg" alt="" /></Link>
                    
                </div>
                <div className="flex flex-row gap-10"> 
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contract">Contract</NavLink>
                    <NavLink to="/users">User</NavLink>
                    <NavLink to="/posts">Post</NavLink>
                    

                </div>
            </nav>
        </>
    )
}
