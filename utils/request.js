import axios from 'axios'
const baseUrl = "http://localhost:3700"

export default async function net(method, url, params) {
    const {
        data
    } = await axios({
        method: method,
        url: baseUrl + url,
        data: params
    })
    if (data.code === 0) {
        return data.data
    }
}