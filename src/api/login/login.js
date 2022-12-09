import axiosInstance from "../axios/axios";

export const login = (Username, Password) => {
  return axiosInstance.post("/accounts/authenticate", {
    Username,
    Password,
  });
};
