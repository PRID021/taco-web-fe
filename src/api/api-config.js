import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar'
    },
};

function BaseApi() {
    const config = axiosConfig || {};
    const baseAxios = axios;
    const  axiosInstance = baseAxios.create(config);
    console.log(axiosInstance,'axiosInstance');
    if (axiosInstance) {
        axiosInstance.interceptors.request.use(
            (config) => {
                // Do something before request is sent
                return config;
            },
            (error) => {
                // Do something with request error
                return Promise.reject(error);
            }
        );
          axiosInstance.interceptors.response.use(
            (response) => {
                // Do something with response data
                return response;
            },
            (error) => {
                // Do something with response error
                return Promise.reject(error);
            }
        );
    }

    return [axiosInstance,config];

}
export default BaseApi;