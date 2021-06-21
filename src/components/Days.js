import React from 'react'
import Grid from '@material-ui/core/Grid';
import Day from './Day.js';

const Days = (props) => {
    return(
        <div>
            <Grid container spacing={5} style={{padding: 24}}>
                <Grid item xl={3}>
                    <Day weather={props.weather} day={0}/>
                </Grid>
                <Grid item xl={3}>
                    <Day weather={props.weather} day={1}/>
                </Grid>
                <Grid item xl={3}>
                    <Day weather={props.weather} day={2}/>
                </Grid>
                <Grid item xl={3}>
                    <Day weather={props.weather} day={3}/>
                </Grid>
                <Grid item xl={3}>
                    <Day weather={props.weather} day={4}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Days;