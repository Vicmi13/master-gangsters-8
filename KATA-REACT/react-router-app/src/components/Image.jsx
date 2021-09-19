import React, { useEffect, useState } from 'react'
const axios = require('axios').default;

const Image = (props) => {
    const BASE_URL = 'https://source.unsplash.com/'

    const [image, setImage] = useState("")
    const [statusCode, setStatusCode] = useState(0)

    // componentDidMount
    useEffect(() => {
        getUnplashImage()
    }, [])

    useEffect(() => {
        console.log('statusCode en useeffect', statusCode)
        // Este  useEffect  esta escuchando los cambios en el estado status     

        props.statusCode(statusCode)
    }, [statusCode])


    const getUnplashImage = async () => {
        try {
            // Lo que nos regresa aqui es un objeto y se aplica destructuring
            // para obtener solo el atributo data
            const { data, status } = await axios.get(`${BASE_URL}random/800x600`)
            console.log('data', data)
            setImage(data)
            setStatusCode(status)
            // console.log('imageResponse data', data)

            // OTRA FORMA de aplicar  destructuring
            // const {data } = objectImage

        } catch (error) {
            console.log('ocurrio un error', error)
        }

    }

    return (
        <div>
            {image.length === 0 ?
                <h4>Cargando imagen</h4>
                : <div>
                    {image}
                </div>
            }
        </div>
    )
}

export default Image
