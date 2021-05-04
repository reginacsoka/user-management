import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080";

export const apiCalls = {
  getAllUsers: () => {
    return axios
      .get(BASE_URL + "/get-all")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("Error in the get all", error);
      });
  },

  getUser: (id) => {
    return {};
  },

  insertUser: (payload) => {},

  deleteUser: (id) => {},
};
