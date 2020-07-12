import storeAxios from "./axios";

class CentralService {
  static doPut(URL, data, serviceCallBackObj, containerCallBackObj) {
    storeAxios
      .put(URL, data)
      .then((response) => {
        serviceCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.log("Error in doPost: \n", JSON.stringify(error));
      });
  }

  static doPost(URL, data, serviceCallBackObj, containerCallBackObj) {
    storeAxios
      .post(URL, data)
      .then((response) => {
        serviceCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.log("Error in doPost: \n", JSON.stringify(error));
      });
  }

  static doPostWithFormData(URL, data, serviceCallBackObj, containerCallBackObj) {
    let bodyFormData = new FormData();
    for (let key in data) {
      if (typeof data[key] != "object") {
        bodyFormData.append(key, data[key]);
      }
    }
    storeAxios
      .post(URL, bodyFormData)
      .then((response) => {
        serviceCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.log("Error in doPostWithFormData: \n", JSON.stringify(error));
      });
  }

  static doGetWithData(URL, serviceCallBackObj, containerCallBackObj) {
    storeAxios
      .get(URL, { params: containerCallBackObj.data })
      .then((response) => {
        serviceCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.log("Error in doGetWithData: \n", JSON.stringify(error));
      });
  }
}

export default CentralService;
