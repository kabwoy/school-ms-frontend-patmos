export default function getTokenFromLocalStorage(){
    return JSON.parse(localStorage.getItem('token')).token
}