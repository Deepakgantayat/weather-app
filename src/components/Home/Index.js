import React from "react"
import Header from "../Header/index"
import SideNav from "../Sidebar/Index"

class Home extends React.Component{
    render(){
        return(
            <div className = "column">
                <div>
                <Header/>
                </div>
                <div>
                <SideNav/>
                </div>    
            </div>
        )
    }
}

export default Home