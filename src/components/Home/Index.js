import React from "react"
import Header from "../Header/index"
import SideNav from "../Sidebar/Index"

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <SideNav/>
            </div>
        )
    }
}

export default Home