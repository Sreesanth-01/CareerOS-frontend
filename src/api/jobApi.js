import api from "./axios";

export const addJobApplication = (data) =>{
    return api.post("/job",data);
}

export const getJobApplications = () =>{
    return api.get("/job");
}