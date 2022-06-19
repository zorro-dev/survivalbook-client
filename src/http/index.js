import axios from "axios";


const isDebug = false

if (isDebug) console.log("DEBUG MODE")
console.log(isDebug)
console.log("Connected to Database")
console.log(isDebug ? process.env.REACT_APP_API_URL_DEBUG : process.env.REACT_APP_API_URL)


const $host = axios.create({
    baseURL: isDebug ? process.env.REACT_APP_API_URL_DEBUG : process.env.REACT_APP_API_URL
})

export {
    $host,
}
