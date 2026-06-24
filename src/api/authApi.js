import api from "./axios";

export const registerUser = (data) =>{
    return api.post('/auth/signUp',data);
}

export const login = (data) =>{
    return api.post("/auth/login",data);
}