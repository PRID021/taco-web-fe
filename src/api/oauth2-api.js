
import axios from 'axios';


const clientId = 'taco-admin-client';
const clientSecret = 'secret';
const tokenEndpoint = 'http://localhost:9000';

const axiosConfig = {
    baseURL: tokenEndpoint,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
    },

};


function OAuth2Api() {
    const baseAxios = axios;
    const axiosInstance = baseAxios.create(axiosConfig);
    if (axiosInstance) {
        axiosInstance.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );
        axiosInstance.interceptors.response.use(
            (response) => response,
            error => {
                return Promise.reject(error)
            }
        );
    }

    return {
        exchangeCode: async (code) => {
            const data = new URLSearchParams();
            data.append('grant_type', 'authorization_code');
            data.append('redirect_uri', 'http://localhost:5000/login/oauth2');
            data.append('code', code);

            return axiosInstance
                .post('/oauth2/token', data)
                .then((response) => {
                    if (response.data) {
                        localStorage.setItem('user', JSON.stringify(response.data));
                        console.log('LocalStorage :', localStorage.getItem('user'));
                    }
                })
                .catch(error => {
                    console.error('Token request failed:', error);
                    // Handle the error
                })

                ;
        },
    }
}

export default OAuth2Api;