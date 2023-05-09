import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://quizapi.io/api/`,
  timeout: 4000,
  // headers: { Bearer: 'foobar', Authorization: `Bearer marcin` },
});
