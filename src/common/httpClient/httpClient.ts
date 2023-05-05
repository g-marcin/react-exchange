import axios from "axios";

export const httpClient = axios.create({
  baseURL: `https://api.frankfurter.app`,
  timeout: 4000,
});
