import React from 'react'
// import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import './Login.css'

function Login() {

    return (
        <div className="card-container">
            <Card className="card" elevation={4} >
                <CardContent>
                    <Typography variant="h5" style={{ textAlign: "center" }} >
                        Login
                    </Typography>
                    <Typography variant="subtitle2" style={{ textAlign: "center", color: "#4f5052" }}>
                        Ingresar los datos requeridos
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Login
