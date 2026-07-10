import api from "./axios";

export const addJobApplication = (data) =>{
    return api.post("/job",data);
}