import React from 'react'
import {Link} from "react-router-dom"

function NavBars() {
    
    return (
        <div className="nav-bar">
        

                <h3><Link to="/Home">Home</Link></h3>
                <h3><Link to="/About">About</Link></h3>
               
               
                 
            </div>
    )
}

export default NavBars