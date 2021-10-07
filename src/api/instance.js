import axios from "axios";

const instance = axios.create({
  baseURL: "https://615dd9d812571a0017207926.mockapi.io/api/v1/meo",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
