
import { Typography } from '@mui/material'
import React from 'react'
import { Switch, Route } from 'react-router'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <>
            <NavBar />

           <Switch>
                <Route exact path="/dashboard">
                    <Typography variant="h5" style={{ textAlign: "center" }} >
                        Main page
                    </Typography>
                </Route>   

                <Route path="/dashboard/nuevo-usuario">
                    <Typography variant="h6" style={{ textAlign: "center", color: 'orange' }} >
                        Nuevos usuarios
                    </Typography>
                </Route>     

                <Route>
                    <Typography variant="h6" style={{ textAlign: "center", color: 'red' }} >
                        404 not found de dashboard
                    </Typography>
                </Route>     
            </Switch> 
         
        </>
    )
}

export default Dashboard
