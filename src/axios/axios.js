import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.95:5000/api/reservas/v1",
    headers:{
        "accept":"application/json"
    }
});
const sheets = {
    postLogin:(user) => api.post("/user/login/",user),
    postCadastro:(user) => api.post("User/",user)
}
export default sheets;