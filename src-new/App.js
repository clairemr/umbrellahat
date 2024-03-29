import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar.js';
import Days from './components/Days.js';
import Today from './components/Today.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function Weather(){
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/onecall?lat=-33.7046&lon=151.0987&units=metric&APPID=dda30a2653d9ac40b002cd7bf333c385")
    .then(response => response.json())
    .then(response => {
      setWeather(response)
    })
    .catch(err => { console.log(err); 
    });
    //setWeather({})
  }, [])
  return (weather) ? weather : null;
}

function App() {
  const weather = Weather();
  if(weather){
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <hr/><Today weather={weather}/><hr/>
        </header>
        <body>
          
          <Days weather={weather}/>
        </body>
      </div>
      </ThemeProvider>
    );
  }else{
    return null;
  }
  
}

export default App;