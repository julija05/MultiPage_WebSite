import axios from "axios";

const BASE_PATH = `${process.env.REACT_APP_API_HOST}`;

class AxiosService {
  instance = axios.create({
    baseURL: BASE_PATH,
  });

  get(url, params, config = {}) {
    return this.instance
      .get(url, { params, ...config })
      .then(({ data }) => data)
      .catch((error) => this.errorHandling(error));
  }

  post(url, params, config = {}) {
    return this.instance
      .post(url, params, config)
      .then(({ data }) => data)
      .catch((error) => this.errorHandling(error));
  }

  delete(url, params, config = {}) {
    return this.instance
      .delete(url, config)
      .then(({ data }) => data)
      .catch(this.errorHandling);
  }

  put(url, params, config = {}) {
    return this.instance
      .put(url, params, config)
      .then(({ data }) => data)
      .catch(this.errorHandling);
  }

  errorHandling(error) {
    console.log(error);
  }
}

export const axiosInstance = new AxiosService();
