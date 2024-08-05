import { axiosInstance } from "../index";

export const getProjects = async () => {
  return await axiosInstance.get("/projects");
};
