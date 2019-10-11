import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a95297c93c3024004daf90267504625eb6b3074b3a33ee5e470275fd44ac06c6"
  }
});
