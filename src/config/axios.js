import Axios from 'axios'

const axios = Axios.create({
    baseURL: `http://api.weatherstack.com/current?access_key=6ae470ea28f70f3481a461a68dd96cbb&query=`
})

// const axios = Axios.create({
//     baseURL: '/'
// })

export default axios