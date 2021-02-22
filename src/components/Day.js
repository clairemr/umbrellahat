import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
//import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Day = (props) => {
    const weather = props.weather;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const displayTime = () => {
      if(weather && Object.keys(weather).length !== 0){
        const jsDate = new Date(weather['daily'][props.day].["dt"] * 1000);
        console.log(Object.keys(weather).length)
        return days[jsDate.getDay()];
      }
      //return "monday"
    }
    const hat = (weather && weather['daily'][props.day].["clouds"] <= 60 && weather['daily'][props.day].["uvi"] >= 3) ? true : false;
    const umbrella = (weather && weather['daily'][props.day].hasOwnProperty('rain') && weather['daily'][props.day].["rain"] >= 5)? true : false;

    return(
        <div>
            { weather ? (
                <Card >

                    <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h4">
                       {displayTime()}
                    </Typography>
                    
                    {umbrella ? <BeachAccessIcon color='primary'/> : <BeachAccessIcon color='disabled'/>}
                    {hat ? <WbSunnyIcon color='primary'/> : <WbSunnyIcon color='disabled'/>}
                    
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href='test.com' target="_blank">
                        See details
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Day;