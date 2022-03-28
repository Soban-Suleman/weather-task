import axios from "axios";
const KEY = "AIzaSyBoqu_w01wSZCzY-07CIbzyNf_4P0fbRmI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
