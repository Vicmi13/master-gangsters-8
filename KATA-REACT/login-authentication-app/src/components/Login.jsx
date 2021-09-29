import React, { useState } from 'react'
// import Button from '@mui/material/Button';
import { Alert, AlertTitle, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import './Login.css'
import validateEmail from '../utils/utilities';
// import loginService from '../services/Auth.services';

function Login() {

    // PASO 1 CREAR estado para guardar valores de INPUTS
    const [loginObject, setLoginObject] = useState({})
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = ({ target: { name, value } }) => {
        // PASO 4 recuperar valores de input y setear en ESTADO

        /** destructurin de event 
         *  event.target.name && event.target.value
         * 
         *  Otra forma
         *  const { name, value } = target 
         * */
        setLoginObject({ ...loginObject, [name]: value })

    }

    const sendLoginRequest = () => {
        /**
         * Validar que ni email ni password vengan vacias,
         * en caso de que una o las dos, mandar alert
         * EXTRA Mostar componente de alertas de Material UI
         * EXTRA 2 Validar por regex el email
         */
        
        /** Se valida el tamaño vacio*/
        if (loginObject.email === undefined || loginObject.email.length === 0) {
            setErrorMessage('El email se encuentra vacio')
            setShowError(true)
            return 
        } 
        if (loginObject.password === undefined || loginObject.password.length === 0) {
            setErrorMessage('El password se encuentra vacio')
            setShowError(true)
            return
        } 

         /** Se valida el email formato correcto*/
        const emailValidation = validateEmail(loginObject.email)
        if(!emailValidation) {
            setErrorMessage('Email con formato incorrecto')
            setShowError(true)
            return 
        }

        // PASO 6 
        console.log(loginObject);

        // RECORDAR cambiar URL_BACKEND  
        // loginService(loginObject)
    }

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
                        // PASO 2 asociar evento que detecta c/cambio en el input
                        onChange={handleInputChange}
                        className="input"

                        // PASO 3 crear prop name con el nombre que desee guardar en mi estado como KEY { key: value }
                        name="email"
                        required
                        label="Email"
                        InputProps={{
                            endAdornment: (
                                <EmailIcon />
                            )
                        }}
                    />

                    <TextField
                        // PASO 2 asociar evento que detecta c/cambio en el input
                        onChange={handleInputChange}

                        // PASO 3 crear prop name con el nombre que desee guardar en mi estado como KEY { key: value }
                        name="password"
                        className="input"
                        required
                        label="Password"
                        type="password"
                        InputProps={{
                            endAdornment: (
                                <LockIcon />
                            )
                        }}
                    />
                    {/**  PASO 5 creamos evento onClick y creamos funcion para asociar  */}
                    <Button variant="contained" style={{ marginTop: 80 }} onClick={() => sendLoginRequest()}>Enviar</Button>
                </CardContent>
                

                {showError && (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errorMessage}
                    </Alert>)
                }
            </Card>
        </div>

    )
}

export default Login
