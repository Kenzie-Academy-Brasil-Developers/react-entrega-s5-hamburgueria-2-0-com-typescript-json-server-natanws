import axios from "axios";

export const api = axios.create({
  baseURL: "https://burguerkenzie-api.herokuapp.com",
});
