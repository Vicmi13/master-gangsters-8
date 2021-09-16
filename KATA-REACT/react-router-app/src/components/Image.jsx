import React, { useEffect } from 'react'
const axios = require('axios').default;

const Image = () => {

    // componentDidMount
    useEffect(() => {
        getUnplashImage()
    }, [])

    const getUnplashImage = (() => {
        // try {
        //     const imageResponse =  axios.get('url')
        // }
        // setTimeout(() => {
        //     console.log('llamando a metodo')
        // }, 3000)
    })

    return (
        <div>
            imagen
        </div>
    )
}

export default Image
