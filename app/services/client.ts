import axios from "axios";

const instance = axios.create({
  baseURL: "https://sw-api.starnavi.io/",
});

// asynchronous function called get that sends a GET request to a specified URL and returns the response data
// The function is generic, meaning it can work with different types of data (T).
export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },
};
