import axios from "axios"

const useAuth = () => {

    const createUser = (url, data) => {
        axios.post(url, data)
            .then ( res => console.log(res.data))
            .catch ( err => console.log(err))
    } 

    const loginUser = (url, data) => {
        axios.post(url, data)
        .then (res => (
            console.log(res.data),
            localStorage.setItem("token", res.data.token)
            ))
        .catch ( err => console.log(err))
    }
    
    return { createUser, loginUser }
}

export default useAuth
