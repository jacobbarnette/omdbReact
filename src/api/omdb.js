import axios from 'axios'

export default axios.create({
    baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=a15611a8'
})