import axios from 'axios'
import { URL_BACKEND } from '../utils/url_base'

const loginService = (formBody) => {
    axios.post(`${URL_BACKEND}/auth`, formBody)
        .then(data => {
            console.log(data)
            // return data
        })
        .catch(error => {
            console.log('error', error)
        })
}

export default loginService