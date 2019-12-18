import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://localhost:5000/api/" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-eventshare")
    }
});


export default Api;