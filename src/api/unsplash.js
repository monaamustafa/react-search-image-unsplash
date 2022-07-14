import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID At0wDdBU04oY1vWb6z2-ZE7EVbO-nRaE-dFVfjDVqPY'
    }
});