import React from "react"
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div className = "container-fluid">
    <nav className="navbar"style={{ backgroundColor: '#ff4d4d' }} >
    <a href="#" className="navbar-brand "><img src = "https://seeklogo.com/images/P/partly-sunny-weather-symbo-logo-FE1CF4CAE5-seeklogo.com.gif" style={{height:"3rem", width: "3rem", margin_left: "2rem"}}/></a>
        <ul className="nav justify-content-end">
  
        {/* <li className="nav-item active " ><Link to = "/" className="nav-link"  style={{text_align:"end", color:"black"}}>Home</Link></li> */}
        </ul>
        </nav>
    
        </div>
        )
    }
}

export default Header