// services/api.js
import axios from "axios";
const baseURL = "http://localhost:8800/api";
const instance = axios.create({
  baseURL: "http://localhost:8800/api/",
});

// Додаємо інтерсептор для кожного запиту
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${localStorage.getItem("token")}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getLists = async (type, genre) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:8800/api/lists${type ? `?type=${type}` : ""}${
        genre ? `&genre=${genre}` : ""
      }`,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching lists:", error);
    throw error;
  }
};

export const getRandomMovie = async (type) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token is missing");
      // Handle the error or redirect the user to the login page
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `http://localhost:8800/api/movies/random?type=${type}`,
      config
    );
    // Handle the response
    return res;
  } catch (error) {
    console.error("Error fetching lists:", error);
    throw error;
  }
};
export const getMovieById = async (item) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token is missing");
      // Handle the error or redirect the user to the login page
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `http://localhost:8800/api/movies/find/${item}`,
      config
    );
    // Handle the response
    return res;
  } catch (error) {
    console.error("Error fetching lists:", error);
    throw error;
  }
};
export default instance;
