import storeAxios from "./axios";

let storeId = 0;
class SSRCentralService {
  static doPost(URL, data, adapterCallBackObj, containerCallBackObj) {
    return storeAxios
      .post(URL, data)
      .then((response) => {
        return adapterCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.error("\ndoPost error: ", error);
        return adapterCallBackObj.onFailure(error, containerCallBackObj);
      });
  }

  static doPostWithFormData(URL, data, adapterCallBackObj, containerCallBackObj) {
    let bodyFormData = new FormData();
    for (let key in data) {
      if (typeof data[key] != "object") {
        bodyFormData.append(key, data[key]);
      }
    }
    return storeAxios
      .post(URL, bodyFormData)
      .then((response) => {
        return adapterCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.error("\ndoPostWithFormData error: ", error);
        return adapterCallBackObj.onFailure(error, containerCallBackObj);
      });
  }

  static async doGet(URL, adapterCallBackObj, containerCallBackObj) {
    return storeAxios
      .get(URL, {
        params: containerCallBackObj.data,
      })
      .then((response) => {
        return adapterCallBackObj.onSuccess(response, containerCallBackObj, true);
      })
      .catch((error) => {
        console.error("\ndoget error: ", error);
        return adapterCallBackObj.onFailure(error, containerCallBackObj);
      });
  }

  static async doGetWithData(URL, serviceCallBackObj, containerCallBackObj) {
    return storeAxios
      .get(URL, containerCallBackObj.data)
      .then((response) => {
        console.error("\ndoGetWithData response: ", response);
        return serviceCallBackObj.onSuccess(response, containerCallBackObj);
      })
      .catch((error) => {
        console.error("\ndoGetWithData error: ", error);
        return serviceCallBackObj.onFailure(error, containerCallBackObj);
      });
  }
}

export default SSRCentralService;
