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
    fetch(process.env.REACT_APP_API_KEY)
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
  console.log(weather);
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
    return "Weather hasn't loaded";
  }
  
}

export default App;