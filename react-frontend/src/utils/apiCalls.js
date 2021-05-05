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
    return axios
      .get(BASE_URL + "/get/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("Error in the get user", error);
      });
  },

  insertUser: (payload) => {
    return axios
      .post(BASE_URL + "/insert", payload)
      .then((response) => {
        //const user = response.data;
      })
      .catch((error) => {
        console.log("Error in post", error);
      });
  },

  updateUser: (id, payload) => {
    return axios
      .post(BASE_URL + "/update/" + id, payload)
      .then((response) => {
        //const user = response.data;
      })
      .catch((error) => {
        console.log("Error in post", error);
      });
  },

  deleteUser: (id) => {
    return axios.delete(BASE_URL + "/delete/" + id).catch((error) => {
      console.log("Error in post", error);
    });
  },
};
