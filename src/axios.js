import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-71182/us-central1/api", //API URL (cloud function) 
});

export default instance;
