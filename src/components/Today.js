import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
//import CardMedia from '@material-ui/core/CardMedia'
//import Button from '@material-ui/core/Button'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Typography from '@material-ui/core/Typography';


//https://openweathermap.org/api/one-call-api

const CardWeather = (props) => {
    const weather = props.weather;
    const [time, setTime] = useState(props.time);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const displayTime = () => {
      if(weather['hourly'][time]["dt"]){// == (weather && weather['hourly'][time]["dt"]) 
        const jsDate = new Date(weather['hourly'][time]["dt"] * 1000);
        return jsDate.getHours() + ':00, ' + days[jsDate.getDay()];
      }
    }
    const hat = (weather && weather['hourly'][time]["clouds"] <= 60 && weather['hourly'][time]["uvi"] >= 3) ? true : false;
    const umbrella = (weather && weather['hourly'][time].hasOwnProperty('rain') && weather['hourly'][time]["rain"]['1h'] >= 1) ? true : false;
  
    return (
      <div>
        <h2><WhatToBring hat={hat} umbrella={umbrella}/></h2>
        {umbrella ? <BeachAccessIcon color='primary'/> : <BeachAccessIcon color='disabled'/>}
        {hat ? <WbSunnyIcon color='primary'/> : <WbSunnyIcon color='disabled'/>}
        {(weather && <p>Feels like: {weather['hourly'][time]["feels_like"]} degrees</p> )}
        {(weather && weather['hourly'][time]["rain"] && <p>Rain: {weather['hourly'][time]["rain"]['1h']}mm</p> )}
        {(weather && <p>Cloudiness: {weather['hourly'][time]["clouds"]}</p> )}
        {(weather && <p>UV index: {weather['hourly'][time]["uvi"]}</p> )}
        {console.log(time, weather)}
        <br/>{(time >= 1) && <button onClick={() => setTime(time - 1)}> {'<'} </button>}
        Time: {displayTime()}
        {(time <= 46) && <button onClick={() => setTime(time + 1)}> {'>'} </button>}
      </div>
    );
  }
  
  const WhatToBring = (props) => {
    if(props.umbrella && props.hat){
      return "Bring both!";
    }else if(props.umbrella){
      return "Don't forget your umbrella!";
    }else if(props.hat){
      return "Pick out a hat";
    }else{
      return "No need for either";
    }
  }

const Today = (props) => (
    <Card>
      <CardContent>
      <Typography gutterBottom variant="subtitle1" component="h2">
        <CardWeather time={0} weather={props.weather}/>
      </Typography>
      </CardContent>
    </Card>
)

export default Today;