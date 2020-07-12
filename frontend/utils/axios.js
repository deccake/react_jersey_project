import axios from "axios";

let serverApiAxiosUrl = () => {
  //   let baseUrl = "http://rstoreapi.varstreet.com/";
  // let baseUrl = "http://5e6714a71937020016fed56e.mockapi.io";
  // let baseUrl = "http://5e6714a71937020016fed56e.mockapi.io";
  let baseUrl = "http://localhost:8080/";
  return baseUrl;
};

const storeAxios = axios.create({
  baseURL: serverApiAxiosUrl()
});

storeAxios.defaults.withCredentials = false;
export default storeAxios;
