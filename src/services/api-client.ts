import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "https://afternoon-castle-59606-f91da93d1220.herokuapp.com",
  withCredentials: true,
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = async (message: string) => {
    try {
      const res = await axiosIntance.post<T>(this.endpoint + "/", { message });
      return res.data;
    } catch (error) {
      console.error("APIClient post error:", error);
      throw error;
    }
  };
}

export default APIClient;
