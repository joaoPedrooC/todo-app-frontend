import axios from "axios";

export const api = axios.create({ baseURL: 'https://todo-app-backend-ppo7.onrender.com/' })