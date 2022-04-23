import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAlbums() {
    return apiClient.get("/albums");
  },
};
