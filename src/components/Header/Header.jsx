import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="flex flex-row justify-between bg-violet-500 text-white">
                {/* <Link to="/">App</Link> */}
                <div>
                    <Link to="/home"><img src="react.svg" alt="" /></Link>
                    
                </div>
                <div className="flex flex-row gap-10"> 
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contract">Contract</Link>
                </div>
            </nav>
        </>
    )
}
