import React, { Component } from 'react';
import WheatherInfo from './components/WheaterInfo';
import WheatherForm from './components/WheaterForm';

import {WHEATER_KEY} from './keys';

class App extends Component {  

  state = {
     temperature: '',
     description: '',
     humidity: '',
     wind_speed:'',
     city:'',
     country:'',
     error: null
  };

  getWheather = async e => {
    e.preventDefault();
    const {city, country} = e.target.elements;
    const cityValue = city.value,
          countryValue = country.value;

    if(cityValue && countryValue){       
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WHEATER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
     console.log(data);
  
      this.setState({
        temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,  
          city: data.name,
          country: data.sys.country,
          error: null
      });
    } else {
         this.setState({error: 'Please Enter a City  and a Country'})
    }

  };

  render () {
    return (
       <div className="container p-4">
         <div className="row">
              <div className="col-md-6 mx-auto">
                 <WheatherForm getWheather={this.getWheather}/>
                 <WheatherInfo {...this.state}/>
              </div>
         </div>
       </div>
    );
  }
}; 

export default App;
