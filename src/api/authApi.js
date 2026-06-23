import api from "./axios";

export const registerUser = (data) =>{
    return api.post('/path',data);
}

export const login = (data) =>{
    return api.post("/path",data);
}