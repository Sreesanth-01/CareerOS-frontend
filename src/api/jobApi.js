import api from "./axios";

export const addJobApplication = (data) =>{
    return api.post("/job",data);
}

export const getJobApplications = () =>{
    return api.get("/job");
}

export const editJobApplication = (id,data) =>{
    return api.put(`/job/${id}`,data);
}

export const deleteJobApplication = (id) =>{
    return api.delete(`/job/${id}`);
}