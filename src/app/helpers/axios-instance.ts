// import { auth } from '@/auth';
import axios from "axios";

export const BASE_URL =
  "http://lassod.purpledove.net/api/resource/PurpleDoveUsers";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
