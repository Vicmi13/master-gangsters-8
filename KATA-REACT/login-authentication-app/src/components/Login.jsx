import React from 'react'
// import Button from '@mui/material/Button';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
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

                    <TextField
                        className="input"
                        required
                        id="outlined-required"
                        label="Email"
                        InputProps={{
                            endAdornment: (
                                <EmailIcon />
                            )
                        }}
                    />
                    <TextField
                        className="input"
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        InputProps={{
                            endAdornment: (
                                <LockIcon />
                            )
                        }}
                    />

                    <Button variant="contained" style={{ marginTop: 80 }}>Enviar</Button>
                </CardContent>
            </Card>
        </div>

    )
}

export default Login
