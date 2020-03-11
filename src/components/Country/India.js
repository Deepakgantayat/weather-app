import React from "react"
import axios from "axios"

// let cities = [Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolakata, Pune, Lucknow, Kanpur]

class India extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cities : ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Berhampur"],
            weather: [],
            place: []
       
        }
    }
    componentDidMount=() =>{
        this.state.cities.map(city =>{
            axios.get(`http://api.weatherstack.com/current?access_key=6ae470ea28f70f3481a461a68dd96cbb&query=${city}`)
            .then((response) => {
               const place = response.data.location
             const weather = response.data.current
              this.setState({weather:weather, place:place})
                    // console.log(this.state.weather, "state")
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        
    }
    
    render(){
        console.log(this.state.weather, "weather")
        return(
           
            <div className="container mt-5">
                <br/>
               <h2> Listing Weather Report - {this.state.cities.length}</h2>
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
                       {/* {
                          this.state.cities.map((city, index) =>{
                            axios.get(`http://api.weatherstack.com/current?access_key=6ae470ea28f70f3481a461a68dd96cbb&query=${city}`)
                            .then((response) => {
                                console.log(response, "weather");
                                if(response.data){
                                    return (<tr key ={index}>
                                        <td>{response.data.request.observation_time}</td>
                                        <td>{response.data.temperature}</td>
                                        <td>{response.data.weather_icons}</td>
                                        <td>{response.data.weather_descriptions}</td>
                                        <td>{response.data.wind_speed}</td>
                                      </tr>
                                   )
                                    
                                }})
            
                           })
                       } */}
                       {/* {
                           this.state.weather.map((weathernow, index)=>{
                            return (<tr key ={index}>
                                <td>{weathernow.observation_time}</td>
                                <td>{weathernow.temperature}</td>
                                <td>{weathernow.weather_icons}</td>
                                <td>{weathernow.weather_descriptions}</td>
                                <td>{weathernow.wind_speed}</td>
                              </tr>
                           )
                           })
                       } */}
                       <tr>
                       <td>{this.state.place.name}</td>
                        <td>{this.state.weather.observation_time}</td>
                        <td>{this.state.weather.temperature}</td>
                        <td>{this.state.weather.weather_icons}</td>
                        <td>{this.state.weather.weather_descriptions}</td>
                        <td>{this.state.weather.wind_speed}</td>
                       </tr>
                   </tbody>

               </table>
            </div>
        )
    }
}
export default India