import React from "react"
import axios from "../../config/axios"


class Brazil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cities : ["Brasília", "Salvador", "Curitiba", "Recife", "Goiânia", "Belém"],
            weather: [],
            place: []
       
        }
    }
    componentDidMount=() =>{
        Promise.all([axios.get('Brasília'), 
        axios.get('Salvador'),
        axios.get('Curitiba'), 
        axios.get('Recife'),
        axios.get('Goiânia'),
        axios.get('Belém')
    ])    
            .then((values) => {
             const weather = values
              this.setState({weather:weather})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    
    render(){
        console.log(this.state.weather, "weather")
        return(
           
            <div className="container mt-5">
                <br/>
               <h2> Listing Weather Report Of Brazil - {this.state.cities.length}</h2>
               <br/>
               <table className="table">
                   <thead>
                       <tr>
                           <th scope="col">Place</th>
                           <th scope="col">Time</th>
                           <th scope="col">Temperature</th>
                           <th scope="col">Icon</th>
                           <th scope="col">Description</th>
                           <th scope="col">Wind Speed</th>
                       </tr>
                   </thead>
                   <tbody>
                   {
                           this.state.weather.map((weathernow,index) =>{
                               return(<tr key ={index}>
                                   <td>{weathernow.data.location.name}</td>
                                    <td>{weathernow.data.current.observation_time}</td>
                                    <td>{weathernow.data.current.temperature}</td>
                                    <td>{weathernow.data.current.weather_icons}</td>
                                    <td>{weathernow.data.current.weather_descriptions}</td>
                                    <td>{weathernow.data.current.wind_speed}</td>
                               </tr>)
                           })
                       }
                   </tbody>

               </table>
            </div>
        )
    }
}
export default Brazil