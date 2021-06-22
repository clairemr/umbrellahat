import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//potentially add localstorage for location, see lecture 193 to use with useEffect

const Location = () => {
    const [city] = useState('Hornsby');
    return (
    <div>
      Location: {city}
    </div>)
}

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                Should I bring an umbrella or a hat today?
                </Typography>
                <Location />
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;