import { axiosInstance } from "./axios-instance";

type SignInResponse = any;

export interface SignInDataType {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  phone: string;
}

const sendRequest = async (
  postData: SignInDataType
): Promise<SignInResponse> => {
  const data = await axiosInstance.post("/auth/login", postData);
  return data;
};

export default sendRequest;
