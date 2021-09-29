import axios from 'axios'
import { URL_BACKEND } from '../utils/url_base'

const loginService = (formBody) => {
    return new Promise( (resolve, reject) => {
        axios.post(`${URL_BACKEND}/auth`, formBody)
        .then(response => {
            const { data } = response
            // console.log('data', data)
            // console.log('status', status)
            resolve(data)
        })
        .catch(error => {
            console.log('error', error)
            reject(error)
        })
     })
       
}

export default loginService