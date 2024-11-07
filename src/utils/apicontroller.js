import axios from 'axios'

// Work in progres need to add more logic
// const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const BASE_URL = ''

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'token',
        // You can add other headers like authorization token here
    },
})

// Common API method to handle all type of API calls
export const apiController = (
    url,
    type = 'GET',
    config = {},
    data = null,
    queryString = null
) => {
    if (url && url.length) {
        let apiURL = url

        if (queryString && queryString.length) {
            apiURL += (url.split('?')[1] ? '&' : '?') + queryString
        }
        if (type === 'GET') {
            apiClient
                .get(apiURL, config)
                .then((res) => {
                    // @todo -- please use consoleInDev
                    console.log(res)
                    return res
                })
                .catch((err) => {
                    // @todo -- please use consoleInDev
                    console.log('error', err)
                })
        } else if (type === 'POST') {
            if (data && Object.keys(data).length) {
                return apiClient
                    .post(apiURL, data, config)
                    .then((res) => {
                        // @todo -- please use consoleInDev
                        console.log(res)
                        return res
                    })
                    .catch((err) => {
                        // @todo -- please use consoleInDev
                        console.log('error', err)
                    })
            } else {
                return false
            }
        }
    } else {
        return false
    }
}
