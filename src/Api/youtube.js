import axios from "axios";

const KEY = "AIzaSyCOv921Q-8fyRpByvMI2_SG0-e72r5yyzo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
